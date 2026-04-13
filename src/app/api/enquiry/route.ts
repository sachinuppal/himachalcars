import { NextRequest, NextResponse } from 'next/server';
import { EMAIL, PHONE, WHATSAPP_NUMBER } from '@/lib/constants';

interface EnquiryRequest {
  enquiryType?: 'cab' | 'package';
  tripType?: string;
  customerName?: string;
  name?: string;
  customerPhone?: string;
  phone?: string;
  customerEmail?: string;
  email?: string;
  pickupLocation?: string;
  dropLocation?: string;
  pickupDate?: string;
  travelDate?: string;
  returnDate?: string;
  hours?: number;
  carType?: string;
  preferredCar?: string;
  packageId?: string;
  packageTitle?: string;
  numberOfAdults?: number;
  numberOfChildren?: number;
  numAdults?: number;
  numChildren?: number;
  specialRequests?: string;
}

function generateEnquiryNumber(): string {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  return `HC-${date}-${random}`;
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
        from: 'bookings@himachalcars.com',
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
    const body: EnquiryRequest = await request.json();

    // Normalize field names (support both formats)
    const name = body.customerName || body.name;
    const phone = body.customerPhone || body.phone;
    const email = body.customerEmail || body.email;
    const pickupDate = body.pickupDate || body.travelDate;
    const carType = body.carType || body.preferredCar;
    const numAdults = body.numberOfAdults || body.numAdults;
    const numChildren = body.numberOfChildren || body.numChildren;
    const enquiryType = body.enquiryType || (body.packageId ? 'package' : 'cab');

    // Validation
    if (!name || !phone || !pickupDate) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields: name, phone, or date',
        },
        { status: 400 }
      );
    }

    // Generate enquiry number
    const enquiryNumber = generateEnquiryNumber();

    // Prepare customer email body
    const customerEmailBody = `
Dear ${name},

Thank you for your enquiry with Himachal Cars!

Your Enquiry Details:
Enquiry Number: ${enquiryNumber}
Type: ${enquiryType === 'cab' ? 'Cab Booking' : 'Package Tour'}
Date: ${pickupDate}
Phone: ${phone}
Email: ${email || 'Not provided'}

${
  enquiryType === 'cab'
    ? `
Pickup Location: ${body.pickupLocation || 'N/A'}
Drop Location: ${body.dropLocation || 'N/A'}
Trip Type: ${body.tripType || 'N/A'}
Car Type: ${carType || 'N/A'}
${body.returnDate ? `Return Date: ${body.returnDate}` : ''}
${body.hours ? `Hours: ${body.hours}` : ''}
`
    : `
Package: ${body.packageTitle || 'N/A'}
Adults: ${numAdults || 1}
Children: ${numChildren || 0}
`
}

${body.specialRequests ? `Special Requests: ${body.specialRequests}` : ''}

We will review your enquiry and get back to you within 24 hours via phone or email.

For urgent queries, please call us at ${PHONE} or message on WhatsApp: ${WHATSAPP_NUMBER}

Best regards,
Himachal Cars Team
${PHONE}
${EMAIL}
`;

    // Prepare admin email body
    const adminEmailBody = `
New Enquiry Received!

Enquiry Number: ${enquiryNumber}
Type: ${enquiryType === 'cab' ? 'Cab Booking' : 'Package Tour'}

Customer Details:
Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}

${
  enquiryType === 'cab'
    ? `
Cab Booking Details:
Pickup Location: ${body.pickupLocation || 'N/A'}
Drop Location: ${body.dropLocation || 'N/A'}
Pickup Date: ${pickupDate}
Return Date: ${body.returnDate || 'N/A'}
Trip Type: ${body.tripType || 'N/A'}
Car Type: ${carType || 'N/A'}
Hours: ${body.hours || 'N/A'}
`
    : `
Package Booking Details:
Package: ${body.packageTitle || 'N/A'}
Package ID: ${body.packageId || 'N/A'}
Travel Date: ${pickupDate}
Adults: ${numAdults || 1}
Children: ${numChildren || 0}
`
}

Special Requests:
${body.specialRequests || 'None'}

Action: Please follow up with the customer via phone or email.

---
This is an automated message. Please respond to the customer promptly.
`;

    // Send emails
    const customerEmailSent = email
      ? await sendEmail(email, `Enquiry Confirmation - ${enquiryNumber}`, customerEmailBody)
      : true;

    const adminEmailSent = await sendEmail(
      EMAIL,
      `New Enquiry: ${enquiryNumber}`,
      adminEmailBody
    );

    // Prepare WhatsApp link for admin notification
    const whatsappMessage = `New Enquiry: ${enquiryNumber}\n${body.customerName}\n${body.customerPhone}`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return NextResponse.json(
      {
        success: true,
        enquiryNumber,
        message: 'Enquiry submitted successfully',
        whatsappLink,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Enquiry API error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process enquiry',
      },
      { status: 500 }
    );
  }
}
