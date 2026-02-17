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

export default function AIEducationPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero animations
    gsap.from(".hero-badge", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero-badge",
        start: "top 80%",
        once: true,
      },
    });

    gsap.from(".hero-title", {
      opacity: 0,
      y: 40,
      duration: 0.9,
      delay: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero-title",
        start: "top 80%",
        once: true,
      },
    });

    gsap.from(".hero-intro", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".hero-intro",
        start: "top 80%",
        once: true,
      },
    });

    // Curriculum cards animation
    const curriculumCards = document.querySelectorAll(".curriculum-card");
    gsap.from(curriculumCards, {
      opacity: 0,
      x: (index) => (index === 0 ? -80 : 80),
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".curriculum-section",
        start: "top 70%",
        once: true,
      },
    });

    // Comparison table rows animation
    const comparisonRows = document.querySelectorAll(".comparison-row");
    ScrollTrigger.batch(comparisonRows, {
      onEnter: (batch) => {
        gsap.from(batch, {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        });
      },
      start: "top 85%",
      once: true,
    });

    // Pathway blocks animation
    const pathwayBlocks = document.querySelectorAll(".pathway-block");
    gsap.from(pathwayBlocks, {
      opacity: 0,
      y: 60,
      duration: 0.9,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".pathways-section",
        start: "top 70%",
        once: true,
      },
    });
  }, { scope: pageRef });

  return (
    <div ref={pageRef} className="bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
                Complete AI Curriculum
              </span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-gray-900">From </span>
              <span className="text-brand-purple italic">AI Literacy</span>
              <span className="text-gray-900"> to </span>
              <span className="text-brand-purple italic">AI Engineering</span>
            </h1>

            <div className="flex justify-center mb-8">
              <Image
                src="/assets/vector-line.svg"
                alt=""
                width={320}
                height={12}
                className="w-64 sm:w-80 h-auto"
              />
            </div>

            <p className="hero-intro text-gray-700 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Here's what most AI education gets wrong: it's either too basic (just using ChatGPT) or too advanced (PhD-level math).
              We built something in between—<span className="font-semibold text-gray-900">practical AI education that grows with your students</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Curriculum Spectrum Section */}
      <section className="curriculum-section relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <BgDecorations
          items={[
            { asset: 2, className: "-right-16 top-10 w-72", color: "purple", opacity: 0.04, rotate: 20 },
            { asset: 1, className: "-left-20 bottom-20 w-80", color: "purple", opacity: 0.03, rotate: -10 },
          ]}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              Our Curriculum Spectrum
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

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* For Schools Card */}
            <div className="curriculum-card">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 border border-blue-700/50 h-full shadow-xl shadow-blue-900/20">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  For Schools
                </h3>
                <p className="text-lg text-blue-200 mb-6 font-medium">
                  AI Foundations + Building
                </p>
                <ul className="space-y-4">
                  {[
                    "Understanding AI tools (not just prompting ChatGPT)",
                    "Generative AI basics",
                    "Building science projects with AI",
                    "Critical thinking about AI ethics and limitations",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-blue-100">
                      <span className="text-cyan-400 text-xl flex-shrink-0 mt-0.5">•</span>
                      <span className="text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* For Colleges Card */}
            <div className="curriculum-card">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-purple-900 via-purple-800 to-fuchsia-900 border border-purple-700/50 h-full shadow-xl shadow-purple-900/20">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  For Colleges
                </h3>
                <p className="text-lg text-purple-200 mb-6 font-medium">
                  Professional AI Engineering
                </p>
                <ul className="space-y-4">
                  {[
                    "Full Generative AI stack",
                    "Agentic AI development",
                    "Deep learning fundamentals",
                    "Production-ready AI projects",
                    "Portfolio building for job placement",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-purple-100">
                      <span className="text-pink-400 text-xl flex-shrink-0 mt-0.5">•</span>
                      <span className="text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference - Comparison Table */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        <BgDecorations
          items={[
            { asset: 3, className: "-left-24 top-20 w-96", color: "purple", opacity: 0.03, rotate: -20 },
            { asset: 2, className: "-right-16 bottom-20 w-80", color: "purple", opacity: 0.04, rotate: 15 },
          ]}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              The Difference
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

          <div className="max-w-5xl mx-auto">
            {/* Header Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-emerald-700 rounded-2xl p-6 text-center shadow-lg">
                <h3 className="text-2xl font-bold text-white">With Beta AI</h3>
              </div>
              <div className="bg-rose-700 rounded-2xl p-6 text-center shadow-lg">
                <h3 className="text-2xl font-bold text-white">Without Structured AI Education</h3>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="space-y-6">
              {[
                { left: "Students build actual AI projects", right: "Students watch YouTube tutorials randomly", leftBg: "bg-emerald-50", leftBorder: "border-emerald-400", leftAccent: "text-emerald-800", rightBg: "bg-rose-50", rightBorder: "border-rose-400", rightAccent: "text-rose-700" },
                { left: "Structured path from tools to engineering", right: "Fragmented knowledge, no clear progression", leftBg: "bg-teal-50", leftBorder: "border-teal-400", leftAccent: "text-teal-800", rightBg: "bg-orange-50", rightBorder: "border-orange-400", rightAccent: "text-orange-700" },
                { left: "Portfolio ready for internships/jobs", right: "No proof of practical skills", leftBg: "bg-blue-50", leftBorder: "border-blue-400", leftAccent: "text-blue-800", rightBg: "bg-amber-50", rightBorder: "border-amber-400", rightAccent: "text-amber-700" },
                { left: "Understanding of AI ethics & limitations", right: "Just following trends without critical thinking", leftBg: "bg-violet-50", leftBorder: "border-violet-400", leftAccent: "text-violet-800", rightBg: "bg-pink-50", rightBorder: "border-pink-400", rightAccent: "text-pink-700" },
                { left: "Mentorship from AI practitioners", right: "Learning in isolation", leftBg: "bg-indigo-50", leftBorder: "border-indigo-400", leftAccent: "text-indigo-800", rightBg: "bg-red-50", rightBorder: "border-red-400", rightAccent: "text-red-700" },
              ].map((row, index) => (
                <div key={index} className="comparison-row grid md:grid-cols-2 gap-6">
                  <div className={`${row.leftBg} rounded-2xl p-6 border-2 ${row.leftBorder} shadow-sm`}>
                    <p className={`${row.leftAccent} text-base sm:text-lg font-medium`}>{row.left}</p>
                  </div>
                  <div className={`${row.rightBg} rounded-2xl p-6 border-2 ${row.rightBorder} shadow-sm`}>
                    <p className={`${row.rightAccent} text-base sm:text-lg`}>{row.right}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Pathways Section */}
      <section className="pathways-section relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              Two Pathways
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

          <div className="space-y-8 lg:space-y-12">
            {/* For Schools Pathway */}
            <div className="pathway-block">
              <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
                <div className="mb-6">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    For Schools
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  AI That Makes Sense in Middle & High School
                </h3>

                <p className="text-gray-700 text-lg sm:text-xl mb-8 leading-relaxed">
                  <span className="font-semibold">Starting point:</span> Students already use AI. Let's teach them to use it right and build with it.
                </p>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">What we cover:</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      "AI tool literacy (knowing when and how to use different AI tools)",
                      "Generative AI concepts without the math overload",
                      "Science project integration (physics simulations, biology data analysis, etc.)",
                      "Building something real they can show off",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-800">
                        <span className="text-blue-600 text-xl flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-base sm:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/schools"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors hover:bg-blue-700"
                >
                  Learn More About School Programs →
                </Link>
              </div>
            </div>

            {/* For Colleges Pathway */}
            <div className="pathway-block">
              <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                <div className="mb-6">
                  <span className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    For Colleges
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Career-Track AI Engineering
                </h3>

                <p className="text-gray-700 text-lg sm:text-xl mb-8 leading-relaxed">
                  <span className="font-semibold">Starting point:</span> The gap between college CS curriculum and what AI companies need is massive. We bridge it.
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">What we cover:</h4>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                      "Generative AI: LLMs, fine-tuning, RAG systems",
                      "Agentic AI: Building autonomous AI systems",
                      "Deep Learning: Neural networks, computer vision, NLP",
                      "AI Tools Engineering: LangChain, vector databases, API integration",
                      "Real client projects for portfolio",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-800">
                        <span className="text-purple-600 text-xl flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-base sm:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/60 rounded-2xl p-6 mb-8 border border-purple-200">
                  <p className="text-gray-800 text-lg font-semibold">
                    <span className="text-purple-600">Outcome:</span> Students graduate with internship experience, a portfolio, and job-ready skills.
                  </p>
                </div>

                <Link
                  href="/colleges"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors hover:bg-purple-700"
                >
                  Learn More About College Programs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-500 via-brand-purple to-red-500">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-red-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Curriculum?
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
            Join leading institutions already preparing their students for the AI-powered future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-purple font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 inline-block"
            >
              Talk to Us
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300 inline-block"
            >
              Download Curriculum Overview
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
