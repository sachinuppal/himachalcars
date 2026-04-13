import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Himachal Cars',
  description: 'Read our terms of service to understand the conditions for using Himachal Cars services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1B4D3E] to-[#0f2c23] py-12 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-200">Last updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="space-y-8">
            {/* Service Description */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Service Description
              </h2>
              <p className="text-gray-700">
                Himachal Cars provides cab and transportation services across Himachal Pradesh and nearby regions.
                We offer various vehicle options for different travel needs including outstation trips, hourly rentals,
                airport transfers, and tour packages. Our services are available 24/7 through our website, mobile app,
                and phone booking.
              </p>
            </div>

            {/* Booking and Cancellation */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Booking and Cancellation Policy
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Booking Confirmation:</strong> Your booking is confirmed only after payment is received
                  and you receive a confirmation message with your booking details and driver information.
                </li>
                <li>
                  <strong>Cancellation:</strong> Cancellations made more than 24 hours before your scheduled trip
                  are eligible for a full refund. Cancellations made within 24 hours are subject to a 50% cancellation
                  charge.
                </li>
                <li>
                  <strong>No-Show Policy:</strong> If you do not use your booked cab without prior cancellation notice,
                  no refund will be provided.
                </li>
                <li>
                  <strong>Rescheduling:</strong> Bookings can be rescheduled up to 24 hours before the scheduled time
                  without additional charges, subject to availability.
                </li>
              </ul>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Pricing and Payment
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Price Transparency:</strong> All prices are quoted upfront. We provide detailed breakdown
                  of base fare, per-kilometer charges, and other applicable fees.
                </li>
                <li>
                  <strong>Payment Methods:</strong> We accept credit cards, debit cards, digital wallets, and UPI transfers.
                  Payment must be completed before or at the time of booking.
                </li>
                <li>
                  <strong>Extra Charges:</strong> Additional charges may apply for waiting time, detours, tolls, and
                  late-night surcharges. These will be communicated before the trip begins.
                </li>
                <li>
                  <strong>No Refunds:</strong> Once your trip is completed, no refunds are provided except in cases of
                  service failure or cancellation as per our policy.
                </li>
              </ul>
            </div>

            {/* Liability */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Liability and Limitations
              </h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Passenger Safety:</strong> Passengers are responsible for their own safety and belongings
                  during the trip. Himachal Cars is not responsible for loss, theft, or damage to personal items.
                </li>
                <li>
                  <strong>Road Safety:</strong> All passengers must adhere to traffic laws and seat belt regulations.
                  Himachal Cars reserves the right to refuse service to passengers who pose a safety risk.
                </li>
                <li>
                  <strong>Liability Limitation:</strong> Our liability is limited to the amount paid for the service.
                  We are not liable for indirect, incidental, or consequential damages.
                </li>
                <li>
                  <strong>Delay and Lateness:</strong> While we strive to maintain schedules, we are not liable for
                  delays caused by traffic, weather, or other unforeseen circumstances.
                </li>
              </ul>
            </div>

            {/* User Conduct */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                User Conduct and Responsibilities
              </h2>
              <p className="text-gray-700 mb-3">
                By using our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide accurate and truthful information during booking</li>
                <li>Arrive on time for your scheduled trip</li>
                <li>Treat our drivers and vehicles with respect</li>
                <li>Not consume alcohol or engage in illegal activities during the trip</li>
                <li>Not transport prohibited or hazardous materials</li>
                <li>Comply with all traffic laws and regulations</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700">
                These Terms of Service are governed by and construed in accordance with the laws of India, specifically
                the laws applicable in Himachal Pradesh. Any disputes arising from these terms shall be subject to the
                exclusive jurisdiction of courts in Shimla, Himachal Pradesh.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
                upon posting to our website. Your continued use of our services constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-[#1B4D3E] mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700">
                For questions about these Terms of Service, please contact us at:
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
