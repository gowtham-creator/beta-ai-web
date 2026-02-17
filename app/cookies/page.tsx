"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BgDecorations from "@/components/BgDecorations";

const cookieTypes = [
  {
    name: "Essential Cookies",
    description: "Required for the website to function properly. Cannot be disabled.",
    examples: ["Session management", "Security tokens", "User authentication"],
    required: true,
  },
  {
    name: "Functional Cookies",
    description: "Enable enhanced functionality and personalization.",
    examples: ["Language preferences", "Region settings", "Accessibility options"],
    required: false,
  },
  {
    name: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website.",
    examples: ["Page views", "Traffic sources", "User behavior patterns"],
    required: false,
  },
  {
    name: "Marketing Cookies",
    description: "Used to deliver relevant advertisements and track campaign performance.",
    examples: ["Ad targeting", "Campaign tracking", "Conversion measurement"],
    required: false,
  },
];

const sections = [
  {
    title: "What Are Cookies?",
    content: [
      "Cookies are small text files that are placed on your device when you visit a website.",
      "They help websites remember your preferences and improve your browsing experience.",
      "Cookies can be 'session' cookies (deleted when you close your browser) or 'persistent' cookies (remain until they expire or you delete them).",
      "First-party cookies are set by the website you're visiting, while third-party cookies are set by external services.",
    ],
  },
  {
    title: "How We Use Cookies",
    content: [
      "To keep you signed in to your account across sessions.",
      "To remember your preferences (language, region, accessibility settings).",
      "To understand how you use our website and improve our services.",
      "To measure the effectiveness of our marketing campaigns.",
      "To provide personalized learning recommendations on our platform.",
    ],
  },
  {
    title: "Third-Party Cookies",
    content: [
      "Google Analytics: We use Google Analytics to understand website traffic and user behavior.",
      "Payment Processors: Our payment partners may set cookies for transaction security.",
      "Social Media: If you share content, social platforms may set their own cookies.",
      "Video Players: Embedded educational videos may use cookies for playback preferences.",
    ],
  },
  {
    title: "Managing Your Cookie Preferences",
    content: [
      "You can manage cookies through your browser settings. Most browsers allow you to block or delete cookies.",
      "Disabling essential cookies may prevent you from using certain features of our website.",
      "You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.",
      "For marketing cookies, you can adjust your preferences in our cookie consent banner.",
    ],
  },
  {
    title: "Browser Settings",
    content: [
      "Chrome: Settings > Privacy and Security > Cookies and other site data",
      "Firefox: Options > Privacy & Security > Cookies and Site Data",
      "Safari: Preferences > Privacy > Manage Website Data",
      "Edge: Settings > Privacy, search, and services > Cookies",
    ],
  },
  {
    title: "Updates to This Policy",
    content: [
      "We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements.",
      "We will post the updated policy on this page with a new effective date.",
      "We encourage you to review this policy periodically.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have questions about our use of cookies, please contact us:",
      "Email: privacy@betaeducation.in",
      "Phone: +91 98765 43210",
      "Address: Beta Education, Chennai, Tamil Nadu, India",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <BgDecorations items={[
          { asset: 3, className: "absolute -left-20 top-0", color: "coral", opacity: 0.04, rotate: 20 },
          { asset: 1, className: "absolute -right-16 bottom-8", color: "purple", opacity: 0.05, rotate: -8, flipX: true },
        ]} />

        <Navbar />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="text-center">
            <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4">
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cookie Policy
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
          { asset: 2, className: "absolute -right-24 top-1/4", color: "coral", opacity: 0.03, rotate: 14, flipX: true },
        ]} />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6">
          {/* Introduction */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 lg:p-8 mb-8">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              This Cookie Policy explains how Beta Education uses cookies and similar technologies when you visit our website or use our learning platforms. By continuing to use our services, you consent to our use of cookies as described in this policy.
            </p>
          </div>

          {/* Cookie Types Grid */}
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Types of Cookies We Use
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {cookieTypes.map((cookie, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 ${
                    cookie.required
                      ? "bg-brand-purple/5 border border-brand-purple/20"
                      : "bg-white border border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{cookie.name}</h3>
                    {cookie.required && (
                      <span className="text-xs font-medium text-brand-purple bg-brand-purple/10 px-2 py-1 rounded-full">
                        Required
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-4">{cookie.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cookie.examples.map((example, exIndex) => (
                      <span
                        key={exIndex}
                        className="text-xs text-gray-500 bg-slate-100 px-2 py-1 rounded"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
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
