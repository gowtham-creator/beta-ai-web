"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BgDecorations from "@/components/BgDecorations";

const sections = [
  {
    title: "Cancellation Policy",
    content: [
      "Cancellation requests must be submitted in writing to our support team at support@betaeducation.in.",
      "Cancellation requests are processed within 5-7 business days.",
      "The date of receipt of the cancellation request will be considered as the cancellation date.",
      "Partial attendance does not automatically qualify for partial refunds.",
    ],
  },
  {
    title: "Refund Eligibility",
    content: [
      "Full Refund (100%): Cancellation made within 48 hours of enrollment and before the program start date.",
      "Partial Refund (75%): Cancellation made at least 7 days before the program start date.",
      "Partial Refund (50%): Cancellation made within 7 days of the program start date but before the first session.",
      "No Refund: Once the program has commenced, refunds are not available except in exceptional circumstances.",
    ],
  },
  {
    title: "Exceptional Circumstances",
    content: [
      "Medical emergencies (with valid documentation) may qualify for pro-rata refunds.",
      "Relocation to a city without Beta Education centres may be considered for partial refunds.",
      "Family emergencies will be evaluated on a case-by-case basis.",
      "All exceptional circumstance requests must be submitted with supporting documentation.",
    ],
  },
  {
    title: "Non-Refundable Items",
    content: [
      "Registration and administrative fees are non-refundable.",
      "Course materials (books, kits, digital resources) that have been dispatched or accessed are non-refundable.",
      "Certification fees once the certification process has begun.",
      "Any promotional discounts or offers may have specific non-refundable terms.",
    ],
  },
  {
    title: "Program Transfers",
    content: [
      "You may request to transfer to a different batch or program within 30 days of enrollment.",
      "Transfer requests are subject to availability and program eligibility.",
      "One free transfer is allowed per enrollment. Additional transfers may incur a fee.",
      "Transfers to higher-value programs require payment of the difference.",
      "Transfers to lower-value programs do not qualify for refund of the difference.",
    ],
  },
  {
    title: "Refund Process",
    content: [
      "Approved refunds will be processed within 15-20 business days.",
      "Refunds will be credited to the original payment method used during enrollment.",
      "For card payments, refunds may take an additional 5-7 business days to reflect in your account.",
      "A confirmation email will be sent once the refund is processed.",
    ],
  },
  {
    title: "Program Cancellation by Beta Education",
    content: [
      "In the rare event that we cancel a program, enrolled students will receive a full refund.",
      "Alternatively, students may choose to transfer to another available program.",
      "We will provide at least 7 days notice for program cancellations, except in emergency situations.",
      "Any additional expenses incurred by students due to our cancellation will not be reimbursed.",
    ],
  },
  {
    title: "Institutional Enrollments",
    content: [
      "Schools and colleges enrolling multiple students are subject to separate contractual terms.",
      "Institutional refund policies are outlined in the partnership agreement.",
      "Contact our institutional partnerships team for specific queries.",
    ],
  },
  {
    title: "How to Request a Refund",
    content: [
      "Email your refund request to: refunds@betaeducation.in",
      "Include your enrollment ID, student name, and reason for refund.",
      "Attach any supporting documents if applicable.",
      "Our team will respond within 3 business days with the status of your request.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "For any questions regarding our refund policy, please contact us:",
      "Email: refunds@betaeducation.in",
      "Phone: +91 98765 43210",
      "Working Hours: Monday to Saturday, 9 AM to 6 PM IST",
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <BgDecorations items={[
          { asset: 1, className: "absolute -left-16 top-4", color: "purple", opacity: 0.04, rotate: 10 },
          { asset: 3, className: "absolute -right-20 bottom-0", color: "coral", opacity: 0.05, rotate: -20, flipX: true },
        ]} />

        <Navbar />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="text-center">
            <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4">
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Refund Policy
            </h1>
            <p className="text-gray-500 text-base lg:text-lg">
              Last updated: February 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <BgDecorations items={[
          { asset: 2, className: "absolute -left-28 top-1/2", color: "purple", opacity: 0.04, rotate: -6 },
        ]} />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6">
          {/* Introduction */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 lg:p-8 mb-8">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              At Beta Education, we want you to be completely satisfied with your learning experience. We understand that circumstances may change, and we have established this refund policy to ensure a fair process for all parties.
            </p>
          </div>

          {/* Quick Reference Card */}
          <div className="bg-brand-purple/5 border border-brand-purple/20 rounded-2xl p-6 lg:p-8 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Reference</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple font-bold text-sm">
                  100%
                </div>
                <span className="text-gray-600 text-sm">Within 48 hours of enrollment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple font-bold text-sm">
                  75%
                </div>
                <span className="text-gray-600 text-sm">7+ days before program start</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple font-bold text-sm">
                  50%
                </div>
                <span className="text-gray-600 text-sm">Before first session</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 font-bold text-sm">
                  0%
                </div>
                <span className="text-gray-600 text-sm">After program starts</span>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-slate-200 pb-8 last:border-0">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-500 text-base leading-relaxed flex gap-3">
                      <span className="text-brand-purple mt-1.5 flex-shrink-0">
                        <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="4" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
