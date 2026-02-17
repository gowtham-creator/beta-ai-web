"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BgDecorations from "@/components/BgDecorations";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero animations
    gsap.from(".hero-badge", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".hero-title", {
      opacity: 0,
      y: 40,
      duration: 0.9,
      delay: 0.1,
      ease: "power3.out",
    });

    // Story section animations
    gsap.from(".story-text", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".story-section",
        start: "top 75%",
        once: true,
      },
    });

    // Who we are section
    gsap.from(".who-we-are", {
      opacity: 0,
      y: 50,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".who-we-are",
        start: "top 75%",
        once: true,
      },
    });

    // Mission section
    gsap.from(".mission-box", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".mission-box",
        start: "top 75%",
        once: true,
      },
    });
  }, { scope: pageRef });

  const beliefs = [
    {
      title: "AI literacy is not optional",
      description: "Every student needs to understand AI—not to become an engineer, but to navigate a world where AI is everywhere.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Building beats watching",
      description: "You don't learn to code by reading about code. You don't learn AI by watching demos. You learn by building, breaking, and building again.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "The gap is the opportunity",
      description: "India needs hundreds of thousands of AI engineers. That demand isn't going away. We're preparing students to fill it.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const approaches = [
    {
      label: "For Schools",
      description: "Age-appropriate, project-based, integrated with existing curriculum. We train teachers, provide resources, and support implementation.",
      gradient: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
    },
    {
      label: "For Colleges",
      description: "Industry-aligned, job-focused, portfolio-driven. We teach what companies are hiring for right now, not what was relevant five years ago.",
      gradient: "from-purple-50 to-pink-50",
      border: "border-purple-200",
    },
    {
      label: "For Students",
      description: "Hands-on, mentored, community-driven. You're not learning alone. You're part of a cohort pushing each other forward.",
      gradient: "from-orange-50 to-red-50",
      border: "border-orange-200",
    },
  ];

  return (
    <div ref={pageRef} className="bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <BgDecorations
          items={[
            { asset: 1, className: "-left-20 top-20 w-96", color: "purple", opacity: 0.04, rotate: -15 },
            { asset: 3, className: "-right-16 top-1/3 w-[500px]", color: "purple", opacity: 0.03, rotate: 10 },
            { asset: 2, className: "left-1/3 bottom-10 w-48", color: "purple", opacity: 0.03, rotate: 25 },
          ]}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="hero-badge">
              <span className="bg-brand-purple-light/10 text-brand-purple px-6 py-2.5 rounded-full text-sm font-medium border border-purple-200 inline-block mb-6">
                About Beta AI
              </span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Making India's Next Generation </span>
              <span className="text-brand-purple italic">AI-Ready</span>
            </h1>

            <div className="flex justify-center">
              <Image
                src="/assets/vector-line.svg"
                alt=""
                width={320}
                height={12}
                className="w-64 sm:w-80 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <BgDecorations
          items={[
            { asset: 2, className: "-right-16 top-10 w-72", color: "purple", opacity: 0.04, rotate: 20 },
            { asset: 1, className: "-left-20 bottom-20 w-80", color: "purple", opacity: 0.03, rotate: -10 },
          ]}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              Our Story
            </h2>
            <div className="flex justify-center">
              <Image
                src="/assets/vector-line.svg"
                alt=""
                width={320}
                height={12}
                className="w-64 h-auto"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg sm:text-xl leading-relaxed">
            <p className="story-text">
              We started with a simple observation: <span className="font-semibold text-gray-900">Indian students are brilliant</span>, but they're learning AI from scattered YouTube videos and outdated college syllabi.
            </p>
            <p className="story-text">
              Schools want to teach AI but don't know where to start. Colleges are producing graduates who can't build what companies need. Students are frustrated, stuck between theory and practice.
            </p>
            <p className="story-text text-2xl font-bold text-brand-purple italic text-center py-6">
              Beta AI exists to fix this.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              Our Approach
            </h2>
            <div className="flex justify-center">
              <Image
                src="/assets/vector-line.svg"
                alt=""
                width={320}
                height={12}
                className="w-64 h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="approach-block">
                <div className={`rounded-3xl p-8 bg-gradient-to-br ${approach.gradient} border ${approach.border} h-full`}>
                  <div className="mb-4">
                    <span className="bg-white px-5 py-2 rounded-full text-sm font-bold text-gray-900">
                      {approach.label}
                    </span>
                  </div>
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        <BgDecorations
          items={[
            { asset: 1, className: "-right-20 top-20 w-96", color: "purple", opacity: 0.04, rotate: 15 },
            { asset: 3, className: "-left-16 bottom-20 w-80", color: "purple", opacity: 0.03, rotate: -10 },
          ]}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              Who We Are
            </h2>
            <div className="flex justify-center">
              <Image
                src="/assets/vector-line.svg"
                alt=""
                width={320}
                height={12}
                className="w-64 h-auto"
              />
            </div>
          </div>

          <div className="who-we-are max-w-4xl mx-auto">
            <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-white border-2 border-purple-200">
              <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl leading-relaxed text-center">
                A team of <span className="font-bold text-brand-purple">AI engineers, educators, and technologists</span> who've worked in the industry and seen what works. We've trained at top tech companies, built AI products, and now we're bringing that experience to Indian education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              Our Mission
            </h2>
            <div className="flex justify-center">
              <Image
                src="/assets/vector-line.svg"
                alt=""
                width={320}
                height={12}
                className="w-64 h-auto"
              />
            </div>
          </div>

          <div className="mission-box max-w-5xl mx-auto">
            <div className="rounded-3xl p-10 sm:p-12 lg:p-16 bg-gradient-to-br from-orange-500 via-brand-purple to-red-500 relative overflow-hidden">
              {/* Animated blobs */}
              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
              </div>

              <div className="relative z-10 text-center">
                <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Make India's next generation AI-ready.
                </p>
                <p className="text-white/90 text-xl sm:text-2xl leading-relaxed mb-4">
                  Not just the top 1%—<span className="font-bold">everyone</span>.
                </p>
                <p className="text-white/90 text-lg sm:text-xl leading-relaxed italic">
                  Because AI is not a luxury skill. It's a baseline for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Join Us?
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
            Be part of transforming AI education in India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-purple font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 inline-block"
            >
              Join Our Team
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300 inline-block"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
