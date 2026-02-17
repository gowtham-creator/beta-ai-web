"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BgDecorations from "@/components/BgDecorations";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using Beta Education's services, website, or enrolling in our programs, you agree to be bound by these Terms of Service.",
      "If you do not agree to these terms, please do not use our services.",
      "We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.",
    ],
  },
  {
    title: "2. Eligibility",
    content: [
      "Our programs are designed for students of various age groups. Specific age requirements apply to different programs.",
      "For students under 18, a parent or legal guardian must agree to these terms on their behalf.",
      "Institutions enrolling students must have proper authorization to do so.",
    ],
  },
  {
    title: "3. Program Enrollment",
    content: [
      "Enrollment is subject to availability and program-specific eligibility requirements.",
      "We reserve the right to refuse enrollment or cancel enrollments at our discretion.",
      "Accurate information must be provided during enrollment. False information may result in termination of enrollment.",
      "Program schedules, curriculum, and instructors are subject to change based on operational requirements.",
    ],
  },
  {
    title: "4. Payment Terms",
    content: [
      "Fees must be paid according to the payment schedule specified at the time of enrollment.",
      "All fees are in Indian Rupees (INR) unless otherwise specified.",
      "Late payments may result in suspension of access to programs and materials.",
      "Promotional offers and discounts are subject to specific terms and conditions.",
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      "All course materials, content, curriculum, and resources are the intellectual property of Beta Education.",
      "Students are granted a limited, non-transferable license to use materials for personal educational purposes only.",
      "Reproduction, distribution, or commercial use of our materials without written permission is strictly prohibited.",
      "Student projects and creations remain their property, though Beta Education may showcase them for promotional purposes with consent.",
    ],
  },
  {
    title: "6. Code of Conduct",
    content: [
      "Students must maintain respectful behavior towards instructors, staff, and fellow students.",
      "Harassment, discrimination, or disruptive behavior will not be tolerated and may result in dismissal.",
      "Students must not share login credentials or allow unauthorized access to our platforms.",
      "Any form of cheating or academic dishonesty is grounds for immediate dismissal without refund.",
    ],
  },
  {
    title: "7. Online Learning Platform",
    content: [
      "Access to our online learning platform is provided as part of program enrollment.",
      "We strive for 99.9% uptime but do not guarantee uninterrupted access.",
      "Users are responsible for maintaining compatible devices and internet connectivity.",
      "Recording of live sessions without explicit permission is prohibited.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "Beta Education provides educational services and does not guarantee specific outcomes, grades, or career placements.",
      "We are not liable for any indirect, incidental, or consequential damages arising from use of our services.",
      "Our total liability shall not exceed the amount paid for the specific program in question.",
      "We are not responsible for third-party content, links, or services referenced in our materials.",
    ],
  },
  {
    title: "9. Privacy",
    content: [
      "Your use of our services is also governed by our Privacy Policy.",
      "We collect and process personal information as described in our Privacy Policy.",
      "By using our services, you consent to our data practices as outlined in the Privacy Policy.",
    ],
  },
  {
    title: "10. Termination",
    content: [
      "Either party may terminate enrollment with written notice as per the refund policy terms.",
      "We may terminate access immediately for violation of these terms.",
      "Upon termination, access to online platforms and materials will be revoked.",
      "Obligations that by their nature should survive termination shall remain in effect.",
    ],
  },
  {
    title: "11. Dispute Resolution",
    content: [
      "Any disputes shall first be attempted to be resolved through good-faith negotiation.",
      "If negotiation fails, disputes shall be resolved through arbitration in Chennai, India.",
      "These terms are governed by the laws of India.",
      "The courts of Chennai, Tamil Nadu shall have exclusive jurisdiction.",
    ],
  },
  {
    title: "12. Contact Information",
    content: [
      "For questions about these Terms of Service, please contact us:",
      "Email: legal@betaeducation.in",
      "Phone: +91 98765 43210",
      "Address: Beta Education, Chennai, Tamil Nadu, India",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <BgDecorations items={[
          { asset: 2, className: "absolute -left-16 top-4", color: "purple", opacity: 0.05, rotate: -18 },
          { asset: 1, className: "absolute -right-20 bottom-0", color: "coral", opacity: 0.04, rotate: 12, flipX: true },
        ]} />

        <Navbar />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="text-center">
            <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4">
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Terms of Service
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
          { asset: 3, className: "absolute -right-28 top-1/3", color: "purple", opacity: 0.03, rotate: -10, flipX: true },
        ]} />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 shadow-sm rounded-2xl p-6 lg:p-8 mb-8">
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              Welcome to Beta Education. These Terms of Service govern your use of our website, services, and educational programs. Please read these terms carefully before enrolling in any program or using our services.
            </p>
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
                    <li key={itemIndex} className="text-gray-600 text-base leading-relaxed flex gap-3">
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
