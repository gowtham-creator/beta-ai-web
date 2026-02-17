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
    value: "hello@betaeducation.in",
    href: "mailto:hello@betaeducation.in",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    description: "Mon-Sat, 9 AM - 6 PM IST",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Visit Us",
    description: "Headquarters",
    value: "Chennai, Tamil Nadu",
    href: "#offices",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    description: "Quick responses",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const offices = [
  {
    city: "Chennai (HQ)",
    address: "No. 45, Anna Salai, Teynampet, Chennai - 600018, Tamil Nadu",
    phone: "+91 44 2345 6789",
    email: "chennai@betaeducation.in",
  },
  {
    city: "Bangalore",
    address: "2nd Floor, Tech Park, Koramangala, Bangalore - 560034, Karnataka",
    phone: "+91 80 4567 8901",
    email: "bangalore@betaeducation.in",
  },
  {
    city: "Mumbai",
    address: "7th Floor, BKC Complex, Bandra Kurla, Mumbai - 400051, Maharashtra",
    phone: "+91 22 7890 1234",
    email: "mumbai@betaeducation.in",
  },
];

const subjects = [
  "General Inquiry",
  "Admissions",
  "Partnerships & Institutions",
  "Technical Support",
  "Feedback",
  "Media & Press",
];

const faqs = [
  {
    question: "What age groups do you teach?",
    answer: "We offer programs for students from Grade 6 to college level, with age-appropriate curriculum for each group."
  },
  {
    question: "How can my school partner with Beta Education?",
    answer: "Fill out the contact form with 'Partnerships & Institutions' as the subject, and our team will reach out within 24 hours."
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  };

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

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: formRef.current, start: "top 80%" },
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
                  className="hero-animate bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index % 4]} flex items-center justify-center text-white mb-4 shadow-md`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{method.description}</p>
                  <p className="text-brand-purple font-medium text-sm">{method.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div ref={formRef}>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

              {isSubmitted ? (
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 rounded-2xl p-8 text-center shadow-lg">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-md">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-green-600 hover:text-green-700 transition-colors text-sm font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 text-sm mb-2">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-gray-900 focus:outline-none focus:border-brand-purple transition-colors cursor-pointer"
                      >
                        {subjects.map((subject) => (
                          <option key={subject} value={subject} className="bg-white">
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600 text-sm mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-purple transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-brand-purple text-white font-semibold rounded-full hover:bg-brand-purple-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Frequently Asked</h2>
              <p className="text-gray-500 mb-8">Quick answers to common questions.</p>

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
                        className={`w-5 h-5 text-gray-400 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
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
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section ref={officesRef} id="offices" className="relative py-16 lg:py-24 overflow-hidden">
        <BgDecorations items={[
          { asset: 3, className: "absolute -right-24 top-0", color: "purple", opacity: 0.05, rotate: -12, flipX: true },
        ]} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4">
              Our Offices
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Visit Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="office-card bg-white border border-slate-200 shadow-sm rounded-2xl p-6 lg:p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{office.address}</p>

                <div className="space-y-3">
                  <a href={`tel:${office.phone}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-purple transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">{office.phone}</span>
                  </a>
                  <a href={`mailto:${office.email}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-purple transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">{office.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
