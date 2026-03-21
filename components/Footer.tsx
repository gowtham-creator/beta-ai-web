"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BgDecorations from "./BgDecorations";
import ScrollElement from "./ui/scroll-animation";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Centres", href: "/centres" },
    { label: "Contact", href: "/contact" },
  ],
  programs: [
    { label: "AI for Schools", href: "/programs/schools" },
    { label: "AI for Colleges", href: "/programs/colleges" },
    { label: "Teacher Training", href: "/programs/teachers" },
    { label: "Workshops", href: "/programs/workshops" },
    { label: "Corporate Training", href: "/programs/corporate" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Background Assets */}
      <BgDecorations
        items={[
          { asset: 3, className: "-left-24 top-0 w-72 sm:w-96", color: "purple", opacity: 0.04, rotate: 8 },
          { asset: 2, className: "-right-10 bottom-10 w-40 sm:w-56", color: "coral", opacity: 0.05, rotate: -20, flipX: true },
        ]}
      />

      {/* Main Footer */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <ScrollElement direction="up" delay={0.1} viewport={{ amount: 0.2, once: true }}>
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/Beta-Logo.svg"
                  alt="Beta Education"
                  width={120}
                  height={120}
                  className="w-28 h-28"
                />
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                Building future-ready minds with AI education. Empowering students,
                teachers, and institutions across India.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-gray-500 hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollElement>

          {/* Quick Links */}
          <ScrollElement direction="up" delay={0.2} viewport={{ amount: 0.2, once: true }}>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-brand-purple transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollElement>

          {/* Programs */}
          <ScrollElement direction="up" delay={0.3} viewport={{ amount: 0.2, once: true }}>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Programs</h4>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-brand-purple transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollElement>

          {/* Legal */}
          <ScrollElement direction="up" delay={0.4} viewport={{ amount: 0.2, once: true }}>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 text-sm hover:text-brand-purple transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollElement>

          {/* Newsletter */}
          <ScrollElement direction="up" delay={0.5} viewport={{ amount: 0.2, once: true }}>
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <h4 className="text-gray-900 font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-500 text-sm mb-4">
                Get updates on AI education trends and Beta news.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-brand-purple transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 rounded-xl bg-brand-purple text-white font-semibold text-sm hover:bg-brand-purple-dark transition-colors"
                >
                  {isSubmitted ? "Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>
          </ScrollElement>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                Email
              </p>
              <a
                href="mailto:contact@betaai.ai"
                className="text-gray-900 hover:text-brand-purple transition-colors"
              >
                contact@betaai.ai
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                Phone
              </p>
              <a
                href="tel:+919000129292"
                className="text-gray-900 hover:text-brand-purple transition-colors"
              >
                +91 90001 29292
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                Headquarters
              </p>
              <p className="text-gray-900">Hyderabad, Telangana</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                Working Hours
              </p>
              <p className="text-gray-900">Mon - Sat, 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Beta Education. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with purpose in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
