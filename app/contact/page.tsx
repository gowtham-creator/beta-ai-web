"use client";

import { useState, useRef, useEffect } from "react";
import CanvasCaptcha, { CanvasCaptchaRef } from "@/components/CanvasCaptcha";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BgDecorations from "@/components/BgDecorations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const contactMethods = [
  {
    title: "Email Us",
    description: "Get a response within 24 hours",
    value: "contact@betaai.ai",
    href: "mailto:contact@betaai.ai",
    icon: null,
  },
  {
    title: "Call Us",
    description: "Mon-Sat, 9 AM - 6 PM IST",
    value: "+91 90001 29292",
    href: "tel:+919000129292",
    icon: null,
  },
  {
    title: "Visit Us",
    description: "Headquarters",
    value: "Hyderabad, Telangana",
    href: "#offices",
    icon: null
  },
  {
    title: "WhatsApp",
    description: "Quick responses",
    value: "+91 90001 29292",
    href: "https://wa.me/919000129292",
    icon: null
  },
];

const headquarters = {
  city: "Hyderabad",
  state: "Telangana, India",
  address: "Plot No. 12, Madhapur, Hi-Tech City, Hyderabad - 500081, Telangana",
  phone: "+91 90001 29292",
  email: "contact@betaai.ai",
};

const faqs = [
  {
    question: "What age groups do you teach?",
    answer: "We offer programs for students from Grade 6 to college level, with age-appropriate curriculum for each group."
  },
  {
    question: "How can my school partner with Beta Education?",
    answer: "Reach out to us via email or phone and our team will get back to you within 24 hours to discuss partnership opportunities."
  },
  {
    question: "What is the fee structure?",
    answer: "Fees vary by program and duration. Contact us for a detailed fee structure tailored to your requirements."
  },
  {
    question: "Do you offer online programs?",
    answer: "Yes, we offer hybrid programs combining online learning with hands-on sessions at our centres."
  },
];

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    role: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [captchaError, setCaptchaError] = useState(false);
  const captchaRef = useRef<CanvasCaptchaRef>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate captcha
    const captchaValue = captchaRef.current?.getValue();
    if (!captchaValue) {
      setCaptchaError(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setCaptchaError(false);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz9NrugN5gc9DdCjeiBRjgf1jak-VtamyJKfgiE5LwgTqIS3JRFewDKYqPK1aZmpGUTPA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setSubmitStatus("success");
      setFormData({ name: "", organization: "", role: "", interest: "" });
      captchaRef.current?.reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroRef = useRef<HTMLDivElement>(null);
  const enquireRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        // Animate heading text
        gsap.fromTo(
          heroRef.current.querySelectorAll(".hero-animate"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" }
        );

        // Animate contact cards - all appear together smoothly
        gsap.fromTo(
          heroRef.current.querySelectorAll(".card-animate"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, delay: 0.25, ease: "power2.out" }
        );
      }

      // Animate Enquire Now section on scroll
      if (enquireRef.current) {
        gsap.fromTo(
          enquireRef.current.querySelectorAll(".enquire-animate"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: enquireRef.current, start: "top 75%" },
          }
        );
      }

      // Animate FAQ section on scroll
      if (faqRef.current) {
        gsap.fromTo(
          faqRef.current.querySelectorAll(".faq-animate"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: faqRef.current, start: "top 75%" },
          }
        );
      }

      if (officesRef.current) {
        gsap.fromTo(
          officesRef.current.querySelectorAll(".office-card"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: officesRef.current, start: "top 75%" },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <BgDecorations items={[
          { asset: 2, className: "absolute -left-20 top-0", color: "coral", opacity: 0.05, rotate: -15 },
          { asset: 3, className: "absolute -right-16 bottom-4", color: "purple", opacity: 0.04, rotate: 10, flipX: true },
        ]} />

        <Navbar />

        <div ref={heroRef} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="hero-animate text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4">
              Contact Us
            </p>
            <h1 className="hero-animate text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="text-brand-purple italic">Touch</span>
            </h1>
            <p className="hero-animate text-gray-500 text-lg">
              Have questions about our programs? Want to partner with us? We&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {contactMethods.map((method, index) => {
              const gradients = [
                "from-blue-400 to-cyan-400",
                "from-purple-400 to-pink-400",
                "from-orange-400 to-red-400",
                "from-green-400 to-teal-400"
              ];
              return (
                <a
                  key={index}
                  href={method.href}
                  className="card-animate bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  {method.icon && (
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index % 4]} flex items-center justify-center text-white mb-4 shadow-md`}>
                      {method.icon}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{method.description}</p>
                  <p className="text-brand-purple font-medium text-sm">{method.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquire Now Form Section */}
      <section ref={enquireRef} className="relative py-16 lg:py-24 overflow-hidden">
        <BgDecorations items={[
          { asset: 1, className: "absolute -right-20 top-10 w-64 sm:w-80", color: "purple", opacity: 0.04, rotate: 20 },
          { asset: 2, className: "absolute -left-16 bottom-10 w-56 sm:w-72", color: "purple", opacity: 0.05, rotate: -25 },
        ]} />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[700px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="enquire-animate text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Enquire <span className="text-brand-purple italic">Now!</span>
            </h2>
            <p className="enquire-animate text-gray-500 text-lg">
              Fill in your details and we&apos;ll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="enquire-animate bg-white border border-slate-200 shadow-lg rounded-3xl p-8 lg:p-10 space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all duration-200"
              />
            </div>

            {/* Organization / Institution */}
            <div>
              <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                Organization / Institution
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleFormChange}
                required
                placeholder="Enter your organization or institution name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all duration-200"
              />
            </div>

            {/* Your Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all duration-200 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "20px",
                }}
              >
                <option value="" disabled>Choose your role</option>
                <option value="Founder / Director">Founder / Director</option>
                <option value="Faculty / Teacher">Faculty / Teacher</option>
                <option value="Administrator">Administrator</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* What are you interested in? */}
            <div>
              <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                What are you interested in?
              </label>
              <input
                type="text"
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleFormChange}
                required
                placeholder="Tell us what you're looking for"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-all duration-200"
              />
            </div>

            {/* Canvas Captcha */}
            <div>
              <CanvasCaptcha
                ref={captchaRef}
                onChange={() => setCaptchaError(false)}
              />
              {captchaError && (
                <p className="text-red-500 text-sm mt-2">Please complete the captcha verification.</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-brand-purple/20 active:scale-[0.98] ${isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-brand-purple hover:bg-brand-purple-dark"
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Enquiry"
              )}
            </button>

            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <p className="text-green-700 font-semibold">✓ Thank you for your enquiry!</p>
                <p className="text-green-600 text-sm mt-1">We&apos;ll get back to you shortly.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                <p className="text-red-700 font-semibold">Something went wrong</p>
                <p className="text-red-600 text-sm mt-1">Please try again or contact us directly.</p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div ref={faqRef} className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="faq-animate text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Frequently Asked</h2>
            <p className="faq-animate text-gray-500">Quick answers to common questions.</p>
          </div>

          <div className="faq-animate space-y-3 mb-10">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-left"
                >
                  <span className="text-gray-700">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${expandedFaq === index ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-gray-500 text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Response Time */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold mb-1">Quick Response Guaranteed</h3>
                <p className="text-gray-600 text-sm">Our team responds to all inquiries within 24 hours during business days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section ref={officesRef} id="offices" className="relative py-16 lg:py-24 overflow-hidden">
        <BgDecorations items={[
          { asset: 3, className: "absolute -right-24 top-0", color: "purple", opacity: 0.05, rotate: -12, flipX: true },
        ]} />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="office-card text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4">
              Headquarters
            </p>
            <h2 className="office-card text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Visit Us
            </h2>
          </div>

          <div className="office-card bg-white border border-slate-200 shadow-lg rounded-3xl p-10 lg:p-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-1">{headquarters.city}</h3>
                <p className="text-brand-purple font-semibold text-lg mb-6">{headquarters.state}</p>
                <p className="text-gray-500 text-base leading-relaxed max-w-md">{headquarters.address}</p>
              </div>

              <div className="flex flex-col gap-5 lg:text-right lg:items-end">
                <a
                  href={`tel:${headquarters.phone}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-brand-purple transition-colors group"
                >
                  <svg className="w-5 h-5 text-brand-purple lg:order-last" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg font-medium">{headquarters.phone}</span>
                </a>
                <a
                  href={`mailto:${headquarters.email}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-brand-purple transition-colors group"
                >
                  <svg className="w-5 h-5 text-brand-purple lg:order-last" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg font-medium">{headquarters.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
