import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Himachal Cars',
  description: 'Read our privacy policy to understand how we collect and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1B4D3E] to-[#0f2c23] py-12 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-200">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Introduction
              </h2>
              <p className="text-gray-700">
                Himachal Cars ("we," "us," "our," or "Company") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website and use our cab booking services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect information in the following ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Personal Information:</strong> When you book a cab, we collect your name, phone
                  number, email address, pickup and drop-off locations, and payment information.
                </li>
                <li>
                  <strong>Usage Data:</strong> We collect information about how you interact with our website,
                  including pages visited, time spent, and links clicked.
                </li>
                <li>
                  <strong>Location Data:</strong> With your consent, we may collect your location data to
                  provide better service and accurate estimates.
                </li>
                <li>
                  <strong>Device Information:</strong> We collect data about the device you use to access our
                  services, including device type, browser, and IP address.
                </li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Process and confirm your cab bookings</li>
                <li>Send confirmation and status updates via email or SMS</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Improve our services and user experience</li>
                <li>Send promotional offers and marketing communications (with your consent)</li>
                <li>Detect and prevent fraud and security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Data Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. However, we may
                share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Service Providers:</strong> We share information with payment processors, email
                  service providers, and other vendors who assist in our operations.
                </li>
                <li>
                  <strong>Driver Assignment:</strong> We share essential information (name, phone, location)
                  with your assigned driver to complete your booking.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> We may disclose information when required by law or to
                  protect our rights and safety.
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700">
                We use cookies and similar tracking technologies to enhance your experience, remember your
                preferences, and analyze website traffic. You can disable cookies through your browser settings,
                but this may limit some website functionality. We use both session-based and persistent cookies.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure. While we strive to protect your information, we cannot guarantee
                absolute security.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy or how we handle your personal information, please
                contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg text-gray-700">
                <p>
                  <strong>Email:</strong> vikramkashyap980@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> 8091783474
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
