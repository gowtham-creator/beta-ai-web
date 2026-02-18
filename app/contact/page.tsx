"use client";

import { useState, useRef, useEffect } from "react";
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

  const heroRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll(".hero-animate"),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }
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
                  className="hero-animate bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
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

      {/* FAQs Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Frequently Asked</h2>
            <p className="text-gray-500">Quick answers to common questions.</p>
          </div>

          <div className="space-y-3 mb-10">
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
            <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4">
              Headquarters
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
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
