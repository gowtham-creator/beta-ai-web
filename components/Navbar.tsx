"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "AI Education", href: "/ai-education" },
    { label: "AI for schools", href: "/schools" },
    { label: "AI for colleges", href: "/colleges" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Spacer to prevent content from going under the fixed header */}
      <div className="h-[88px] sm:h-[104px] w-full" />
      <header className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-transparent backdrop-blur-none" : "bg-white/80 backdrop-blur-md"}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className={`rounded-full px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-white/30 backdrop-blur-md border border-white/40 shadow-lg" : "bg-white border border-slate-200 shadow-sm"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo-horizontal.png"
              alt="Beta AI"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-semibold transition-colors pb-1 ${isActive(link.href)
                  ? "text-black"
                  : "text-gray-800 hover:text-black"
                  }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <Image
                    src="/assets/vector-line.svg"
                    alt=""
                    width={60}
                    height={8}
                    className="absolute -bottom-1 left-0 w-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:block bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Contact us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-900 hover:text-gray-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-in */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <span className="text-xl font-semibold text-gray-900">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-900 hover:text-gray-600"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col p-6 space-y-4 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`relative font-medium text-lg transition-colors py-2 ${isActive(link.href)
                  ? "text-gray-900 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <Image
                    src="/assets/vector-line.svg"
                    alt=""
                    width={80}
                    height={10}
                    className="absolute -bottom-1 left-0"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <div className="p-6 border-t">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 -z-10"
        />
      )}
    </header>
    </>
  );
}
