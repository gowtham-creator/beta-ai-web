"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BgDecorations from "./BgDecorations";

gsap.registerPlugin(ScrollTrigger);

export default function WhyBetaAISection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Animate section title
    gsap.from(".why-title", {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".why-title",
        start: "top 80%",
        once: true,
      },
    });

    // Animate problem block from left
    gsap.from(".problem-block", {
      opacity: 0,
      x: -80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".problem-block",
        start: "top 75%",
        once: true,
      },
    });

    // Animate solution block from right
    gsap.from(".solution-block", {
      opacity: 0,
      x: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".solution-block",
        start: "top 75%",
        once: true,
      },
    });

    // Animate connecting arrow (if present)
    gsap.from(".connector-arrow", {
      opacity: 0,
      scale: 0,
      duration: 0.6,
      delay: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".connector-arrow",
        start: "top 75%",
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Background Assets */}
      <BgDecorations
        items={[
          { asset: 2, className: "-left-20 top-1/4 w-72 sm:w-96", color: "purple", opacity: 0.04, rotate: -20 },
          { asset: 1, className: "-right-24 bottom-1/4 w-80 sm:w-[500px]", color: "purple", opacity: 0.03, rotate: 15 },
        ]}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="why-title text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
            Why Beta AI?
          </h2>
          <div className="flex justify-center mt-4">
            <Image
              src="/assets/vector-line.svg"
              alt=""
              width={320}
              height={12}
              className="w-64 sm:w-80 h-auto"
            />
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
          {/* Problem Block */}
          <div className="problem-block">
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-red-200">
              {/* Label */}
              <div className="inline-block mb-6">
                <span className="bg-red-100 text-red-700 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide">
                  The Problem
                </span>
              </div>

              {/* Content */}
              <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium">
                India's education system teaches technology as{" "}
                <span className="text-red-600 font-bold">textbook knowledge</span>.
                Students graduate without knowing how to actually{" "}
                <span className="text-red-600 font-bold">use or build with AI</span>.
              </p>
            </div>
          </div>

          {/* Connector Arrow - Desktop Only */}
          <div className="connector-arrow hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-brand-purple text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold">
              →
            </div>
          </div>

          {/* Solution Block */}
          <div className="solution-block">
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-green-200">
              {/* Label */}
              <div className="inline-block mb-6">
                <span className="bg-green-100 text-green-700 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide">
                  Our Solution
                </span>
              </div>

              {/* Content */}
              <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium">
                <span className="text-green-600 font-bold">Hands-on AI literacy</span>{" "}
                that starts early and builds deep. We teach the{" "}
                <span className="text-green-600 font-bold">tools, frameworks, and thinking</span>{" "}
                that companies actually need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
