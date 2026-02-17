"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BgDecorations from "./BgDecorations";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: "For Schools (Grades 6-10)",
      description: "Learn by building. Students go from using AI tools to creating science projects powered by real AI.",
      link: "/schools",
      linkText: "Learn More →",
      gradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-200",
    },
    {
      title: "For Colleges",
      description: "Career-focused AI training. Generative AI to Agentic AI, with projects that get you hired.",
      link: "/colleges",
      linkText: "Learn More →",
      gradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-200",
    },
    {
      title: "Real Skills, Real Results",
      description: "Not just theory. Our students build portfolios, land internships, and enter the AI workforce ready.",
      link: "/ai-education",
      linkText: "",
      gradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-200",
    },
  ];

  useGSAP(() => {
    // Animate section title
    gsap.from(".section-title", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%",
        once: true,
      },
    });

    // Animate cards with stagger using ScrollTrigger.batch
    if (cardsRef.current) {
      const cardElements = cardsRef.current.querySelectorAll(".card-item");

      ScrollTrigger.batch(cardElements, {
        onEnter: (batch) => {
          gsap.from(batch, {
            opacity: 0,
            y: 60,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          });
        },
        start: "top 85%",
        once: true,
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background Assets */}
      <BgDecorations
        items={[
          { asset: 1, className: "-left-16 top-20 w-64 sm:w-80", color: "purple", opacity: 0.04, rotate: 15 },
          { asset: 3, className: "-right-20 bottom-20 w-72 sm:w-96", color: "purple", opacity: 0.03, rotate: -10 },
        ]}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="section-title text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic">
            What We Do
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

        {/* 3-Column Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card-item"
            >
              <div
                className={`relative bg-gradient-to-br ${card.gradient} backdrop-blur-sm rounded-3xl p-8 sm:p-10 border ${card.borderColor} h-full flex flex-col`}
              >
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 flex-grow">
                  {card.description}
                </p>

                {/* Link */}
                {card.linkText && (
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-2 text-brand-purple font-semibold text-lg transition-all"
                  >
                    {card.linkText}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
