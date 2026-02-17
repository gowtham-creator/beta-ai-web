"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BgDecorations from "@/components/BgDecorations";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Personal Information: When you register for our programs, we collect your name, email address, phone number, and educational institution details.",
      "Student Information: For enrolled students, we collect age, grade level, and academic information necessary for program placement.",
      "Payment Information: We collect billing details for processing payments. All payment data is securely processed through our certified payment partners.",
      "Usage Data: We automatically collect information about how you interact with our website and learning platforms, including IP address, browser type, and pages visited.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To provide and maintain our educational services and programs.",
      "To communicate with you about your enrollment, program updates, and important announcements.",
      "To personalize your learning experience and track academic progress.",
      "To process payments and send transaction confirmations.",
      "To improve our services, curriculum, and user experience.",
      "To comply with legal obligations and protect our rights.",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We do not sell, trade, or rent your personal information to third parties.",
      "We may share information with partner institutions where you are enrolled, with your consent.",
      "We may share data with service providers who assist in our operations (payment processors, hosting services) under strict confidentiality agreements.",
      "We may disclose information if required by law or to protect the safety of our students and staff.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your personal information.",
      "All data transmission is encrypted using SSL/TLS technology.",
      "Access to personal information is restricted to authorized personnel only.",
      "We regularly review and update our security practices to address emerging threats.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "We are committed to protecting the privacy of children. For students under 18, we require parental or guardian consent before collecting any personal information.",
      "Parents and guardians have the right to review, update, or request deletion of their child's information at any time.",
      "We do not knowingly collect personal information from children without verified parental consent.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Access: You have the right to request a copy of the personal information we hold about you.",
      "Correction: You can request corrections to any inaccurate or incomplete information.",
      "Deletion: You may request deletion of your personal information, subject to legal retention requirements.",
      "Opt-out: You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails.",
    ],
  },
  {
    title: "Cookies and Tracking",
    content: [
      "We use cookies and similar technologies to enhance your browsing experience. For detailed information, please refer to our Cookie Policy.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the effective date.",
      "We encourage you to review this policy periodically to stay informed about how we protect your information.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy or our data practices, please contact us at:",
      "Email: privacy@betaeducation.in",
      "Phone: +91 98765 43210",
      "Address: Beta Education, Chennai, Tamil Nadu, India",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <BgDecorations items={[
          { asset: 1, className: "absolute -left-20 top-0", color: "coral", opacity: 0.05, rotate: -12 },
          { asset: 2, className: "absolute -right-16 bottom-10", color: "purple", opacity: 0.04, rotate: 15, flipX: true },
        ]} />

        <Navbar />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="text-center">
            <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4">
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
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
          { asset: 3, className: "absolute -left-28 top-1/4", color: "coral", opacity: 0.04, rotate: 8 },
        ]} />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6">
          {/* Introduction */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 shadow-sm rounded-2xl p-6 lg:p-8 mb-8">
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              At Beta Education, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website, or enroll in our programs.
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
