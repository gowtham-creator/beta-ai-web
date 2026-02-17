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

export default function SchoolsPage() {
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

    // Reality section
    gsap.from(".reality-text", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".reality-section",
        start: "top 75%",
        once: true,
      },
    });

    // Phase cards animation
    const phaseCards = document.querySelectorAll(".phase-card");
    ScrollTrigger.batch(phaseCards, {
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

    // Project cards animation
    const projectCards = document.querySelectorAll(".project-card");
    ScrollTrigger.batch(projectCards, {
      onEnter: (batch) => {
        gsap.from(batch, {
          opacity: 0,
          scale: 0.9,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.7)",
        });
      },
      start: "top 85%",
      once: true,
    });

    // Why matters blocks
    const matterBlocks = document.querySelectorAll(".matters-block");
    gsap.from(matterBlocks, {
      opacity: 0,
      x: (index) => (index === 0 ? -60 : index === 1 ? 0 : 60),
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".matters-section",
        start: "top 70%",
        once: true,
      },
    });

    // Program structure items
    const programItems = document.querySelectorAll(".program-item");
    gsap.from(programItems, {
      opacity: 0,
      x: -40,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".program-section",
        start: "top 75%",
        once: true,
      },
    });
  }, { scope: pageRef });

  const phases = [
    {
      number: "1",
      title: "AI Tool Literacy",
      grades: "Grades 6-8",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      points: [
        "What AI can and cannot do",
        "When to use AI vs when not to",
        "Prompt engineering basics",
        "Recognizing AI-generated content",
        "Ethics: plagiarism, misinformation, bias",
      ],
    },
    {
      number: "2",
      title: "Building with AI",
      grades: "Grades 9-10",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      points: [
        "Integrating AI into science projects",
        "Data collection and AI analysis",
        "Simple ML models (no-code/low-code)",
        "Documentation and presentation skills",
      ],
    },
    {
      number: "3",
      title: "Creating AI Projects",
      grades: "Grades 11-12",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      points: [
        "Building functional AI applications",
        "Combining AI with Arduino/Raspberry Pi",
        "Real-world problem solving",
        "Competition-ready projects (science fairs, hackathons)",
      ],
    },
  ];

  const projects = [
    "Plant disease detection using computer vision",
    "Chatbot for local language learning",
    "Traffic pattern analysis for school zones",
    "Weather prediction models",
    "Smart home automation with AI",
  ];

  const whyMatters = [
    {
      title: "For Students",
      description: "They're not just consumers of AI—they're creators. This builds confidence, critical thinking, and a head start for college.",
      gradient: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
    },
    {
      title: "For Teachers",
      description: "We provide curriculum, training, and ongoing support. You don't need to be an AI expert to teach this.",
      gradient: "from-purple-50 to-pink-50",
      border: "border-purple-200",
    },
    {
      title: "For Parents",
      description: "Your child develops skills that will matter in every future career, not just tech.",
      gradient: "from-orange-50 to-red-50",
      border: "border-orange-200",
    },
  ];

  const programStructure = [
    "Weekly hands-on sessions",
    "Project-based learning (no boring lectures)",
    "Teacher training and resources",
    "Student showcase events",
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
                AI for Schools
              </span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Science Projects Just Got </span>
              <span className="text-brand-purple italic">Smarter</span>
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
              Your students are already using AI. Let's teach them to build with it.
            </p>
          </div>
        </div>
      </section>

      {/* The Reality Section */}
      <section className="reality-section relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <BgDecorations
          items={[
            { asset: 2, className: "-right-16 top-10 w-72", color: "purple", opacity: 0.04, rotate: 20 },
            { asset: 1, className: "-left-20 bottom-20 w-80", color: "purple", opacity: 0.03, rotate: -10 },
          ]}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              The Reality
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

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="reality-text text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed text-center">
              Kids are using ChatGPT for homework. That's not going away.
            </p>
            <p className="reality-text text-gray-700 text-lg sm:text-xl lg:text-2xl leading-relaxed text-center">
              The question is: do they just copy-paste, or do they actually understand what's happening?
            </p>
            <p className="reality-text text-2xl sm:text-3xl font-bold text-brand-purple italic text-center py-4">
              We choose the second option.
            </p>
          </div>
        </div>
      </section>

      {/* What Students Learn - 3 Phases */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              What Students Learn
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

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="phase-card">
                <div className={`rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br ${phase.bgColor} border-2 ${phase.borderColor}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white text-2xl font-bold`}>
                      {phase.number}
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base font-medium">
                        {phase.grades}
                      </p>
                    </div>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {phase.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-800">
                        <span className="text-brand-purple text-xl flex-shrink-0 mt-0.5">•</span>
                        <span className="text-base sm:text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Projects Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              Example Projects Students Build
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="rounded-2xl p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 h-full">
                  <p className="text-gray-800 text-base sm:text-lg font-medium">
                    {project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="matters-section relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              Why This Matters
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
            {whyMatters.map((matter, index) => (
              <div key={index} className="matters-block">
                <div className={`rounded-3xl p-8 bg-gradient-to-br ${matter.gradient} border ${matter.border} h-full`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {matter.title}
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {matter.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="program-section relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
              Program Structure
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

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {programStructure.map((item, index) => (
                <div key={index} className="program-item">
                  <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg font-medium">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
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
            Ready to Transform Your School?
          </h2>

          <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
            Get your students building with AI, not just using it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-purple font-semibold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 inline-block"
            >
              Get School Curriculum
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all duration-300 inline-block"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
