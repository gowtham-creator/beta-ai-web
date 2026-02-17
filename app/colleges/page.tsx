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

export default function CollegesPage() {
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

    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
    });

    // Gap section animations
    gsap.from(".gap-block", {
      opacity: 0,
      x: (index) => (index === 0 ? -60 : 60),
      duration: 0.9,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".gap-section",
        start: "top 75%",
        once: true,
      },
    });

    // Program tracks animation
    const trackCards = document.querySelectorAll(".track-card");
    ScrollTrigger.batch(trackCards, {
      onEnter: (batch) => {
        gsap.from(batch, {
          opacity: 0,
          y: 60,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      start: "top 80%",
      once: true,
    });

    // Build projects animation
    const buildCards = document.querySelectorAll(".build-card");
    gsap.from(buildCards, {
      opacity: 0,
      scale: 0.95,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".build-section",
        start: "top 75%",
        once: true,
      },
    });

    // Outcomes animation
    const outcomeItems = document.querySelectorAll(".outcome-item");
    gsap.from(outcomeItems, {
      opacity: 0,
      x: -40,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".outcomes-section",
        start: "top 75%",
        once: true,
      },
    });

    // Who/Time sections
    gsap.from(".info-block", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".info-sections",
        start: "top 75%",
        once: true,
      },
    });
  }, { scope: pageRef });

  const programTracks = [
    {
      label: "Foundation",
      title: "Generative AI",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      points: [
        "Large Language Models (understanding, fine-tuning, deployment)",
        "Prompt engineering and chain-of-thought",
        "RAG (Retrieval-Augmented Generation) systems",
        "Vector databases and embeddings",
        "API integration and cost optimization",
      ],
    },
    {
      label: "Advanced",
      title: "Agentic AI",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      points: [
        "Multi-agent systems",
        "LangChain and LangGraph",
        "Tool use and function calling",
        "Memory and state management",
        "Real-time AI applications",
      ],
    },
    {
      label: "Practical",
      title: "Deep Learning & Computer Vision",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      points: [
        "Neural networks from scratch (and with frameworks)",
        "CNN architectures for vision tasks",
        "Transfer learning and model optimization",
        "Deployment pipelines",
        "Production monitoring",
      ],
    },
    {
      label: "Professional",
      title: "AI Tools Engineering",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50",
      borderColor: "border-green-200",
      points: [
        "Building AI-powered products",
        "System design for AI applications",
        "MLOps basics",
        "Version control for ML",
        "Documentation and testing",
      ],
    },
  ];

  const projects = [
    "Production RAG system for document Q&A",
    "AI agent that automates workflows",
    "Computer vision app for real use case",
    "LLM-powered SaaS product",
    "Fine-tuned model for specific domain",
  ];

  const outcomes = [
    "Internship placement support (we connect you with hiring partners)",
    "Portfolio on GitHub that proves you can ship",
    "Interview prep for AI engineering roles",
    "Industry mentorship from working AI engineers",
    "Capstone project with real clients",
  ];

  const whoFor = [
    "CS/IT students looking to specialize in AI",
    "Engineering students wanting to break into AI",
    "Recent graduates upskilling for AI roles",
    "Career switchers from other tech fields",
  ];

  const timeCommitment = [
    "6-month intensive program",
    "15-20 hours per week",
    "Mix of live sessions, self-paced learning, and project work",
    "Cohort-based with peer learning",
  ];

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
                AI for Colleges
              </span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Train for the Jobs That </span>
              <span className="text-brand-purple italic">Actually Exist</span>
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

            <p className="hero-subtitle text-gray-700 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Companies need AI engineers yesterday. Your CS degree doesn't cover what they're hiring for. <span className="font-bold text-gray-900">We do.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Gap We Fill Section */}
      <section className="gap-section relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <BgDecorations
          items={[
            { asset: 2, className: "-right-16 top-10 w-72", color: "purple", opacity: 0.04, rotate: 20 },
            { asset: 1, className: "-left-20 bottom-20 w-80", color: "purple", opacity: 0.03, rotate: -10 },
          ]}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              The Gap We Fill
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

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="gap-block">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 h-full">
                <h3 className="text-2xl font-bold text-red-900 mb-6">
                  Standard CS Curriculum
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Data structures, algorithms, maybe some outdated ML course.
                </p>
              </div>
            </div>

            <div className="gap-block">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 h-full">
                <h3 className="text-2xl font-bold text-green-900 mb-6">
                  What Companies Need
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Engineers who can build with LLMs, deploy AI systems, and ship products.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-gray-800 text-xl sm:text-2xl leading-relaxed">
              That gap? That's where students get stuck between graduation and getting hired. <span className="font-bold text-brand-purple">We fix that.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Program - 4 Tracks */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              Our Program
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

          <div className="grid md:grid-cols-2 gap-8">
            {programTracks.map((track, index) => (
              <div key={index} className="track-card">
                <div className={`rounded-3xl p-8 sm:p-10 bg-gradient-to-br ${track.bgColor} border ${track.borderColor} h-full`}>
                  <div className="mb-6">
                    <span className={`bg-gradient-to-br ${track.color} text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide`}>
                      {track.label}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    {track.title}
                  </h3>
                  <ul className="space-y-3">
                    {track.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-800">
                        <span className="text-brand-purple text-xl flex-shrink-0 mt-0.5">•</span>
                        <span className="text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Actually Build */}
      <section className="build-section relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              What You Actually Build
            </h2>
            <div className="flex justify-center mb-6">
              <Image
                src="/assets/vector-line.svg"
                alt=""
                width={320}
                height={12}
                className="w-64 h-auto"
              />
            </div>
            <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
              Not toy projects. <span className="font-bold text-gray-900">Real applications you can show employers</span>:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {projects.map((project, index) => (
              <div key={index} className="build-card">
                <div className="rounded-2xl p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                  <p className="text-gray-800 text-base sm:text-lg font-medium">
                    {project}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-8 text-center">
            <p className="text-gray-600 text-base sm:text-lg italic">
              Every project includes: code, documentation, deployment, and presentation.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="outcomes-section relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              Outcomes
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

          <div className="max-w-4xl mx-auto space-y-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="outcome-item">
                <div className="rounded-2xl p-6 bg-white border border-gray-200 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-pink-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 text-base sm:text-lg font-medium">
                    {outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For & Time Commitment */}
      <section className="info-sections relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Who This Is For */}
            <div className="info-block">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 h-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Who This Is For
                </h2>
                <ul className="space-y-3">
                  {whoFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-800">
                      <span className="text-blue-600 text-xl flex-shrink-0 mt-0.5">•</span>
                      <span className="text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Time Commitment */}
            <div className="info-block">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 h-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Time Commitment
                </h2>
                <ul className="space-y-3">
                  {timeCommitment.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-800">
                      <span className="text-orange-600 text-xl flex-shrink-0 mt-0.5">•</span>
                      <span className="text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-orange-500 via-brand-purple to-red-500">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Launch Your AI Career?
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
            Join the next cohort and build the skills companies are hiring for.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-purple font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 inline-block"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300 inline-block"
            >
              View Curriculum
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300 inline-block"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
