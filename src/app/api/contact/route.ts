import { NextRequest, NextResponse } from 'next/server';
import { EMAIL } from '@/lib/constants';

interface ContactRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
}

async function sendEmail(
  to: string,
  subject: string,
  body: string
): Promise<boolean> {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log(`Email would be sent to ${to} (RESEND_API_KEY not set)`);
      console.log(`Subject: ${subject}`);
      console.log(`Body: ${body}`);
      return true;
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'contact@himachalcars.com',
        to,
        subject,
        text: body,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json();

    // Validation
    if (!body.name || !body.phone || !body.email || !body.message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields',
        },
        { status: 400 }
      );
    }

    // Email body to admin
    const adminEmailBody = `
New Contact Form Submission

Name: ${body.name}
Phone: ${body.phone}
Email: ${body.email}

Message:
${body.message}

---
Please respond to this message promptly.
`;

    // Send email to admin
    const emailSent = await sendEmail(
      EMAIL,
      `New Contact Form: ${body.name}`,
      adminEmailBody
    );

    if (!emailSent) {
      console.warn('Email sending failed, but continuing with response');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process your message',
      },
      { status: 500 }
    );
  }
}
