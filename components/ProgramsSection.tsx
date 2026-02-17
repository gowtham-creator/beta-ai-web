"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BgDecorations from "./BgDecorations";
import ScrollElement from "./ui/scroll-animation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const programs = [
  {
    id: "foundations",
    title: "AI Foundations",
    audience: "For Schools",
    description:
      "Building curiosity and foundational AI literacy through age-appropriate, hands-on learning experiences.",
    features: [
      "Interactive AI concepts for K-12",
      "Gamified learning modules",
      "Project-based curriculum",
    ],
    color: "brand-purple",
    size: "large",
  },
  {
    id: "applied",
    title: "Applied AI",
    audience: "For Colleges",
    description:
      "Industry-ready skills with real-world projects and career pathways.",
    features: [
      "ML & Deep Learning tracks",
      "Industry certifications",
      "Internship pathways",
    ],
    color: "white",
    size: "medium",
  },
  {
    id: "teachers",
    title: "Teacher Enablement",
    audience: "For Educators",
    description:
      "Empowering teachers to integrate AI into their classrooms effectively.",
    features: [
      "Pedagogy workshops",
      "Resource toolkits",
      "Ongoing support",
    ],
    color: "white",
    size: "medium",
  },
  {
    id: "workshops",
    title: "Advanced Workshops",
    audience: "For Professionals",
    description:
      "Intensive, specialized workshops for those looking to deepen their AI expertise and stay ahead of the curve.",
    features: [
      "Generative AI & LLMs",
      "Computer Vision",
      "AI Ethics & Governance",
      "Custom corporate training",
    ],
    color: "purple",
    size: "full",
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Staggered entrance animation
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            y: 60,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1,
          }
        );
      });

      // Floating animation for icons
      const icons = sectionRef.current?.querySelectorAll(".floating-icon");
      icons?.forEach((icon, index) => {
        gsap.to(icon, {
          y: -8,
          duration: 2 + index * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D Tilt effect handler - reduced for full-width cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Much gentler effect for the workshops card (full-width)
    const intensity = cardId === "workshops" ? 80 : 20;
    const scale = cardId === "workshops" ? 1.005 : 1.02;

    const rotateX = (y - centerY) / intensity;
    const rotateY = (centerX - x) / intensity;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    setHoveredCard(null);
  };

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background Assets */}
      <BgDecorations
        items={[
          { asset: 1, className: "-left-16 top-20 w-60 sm:w-80", color: "purple", opacity: 0.05, rotate: -20 },
          { asset: 2, className: "-right-12 top-1/3 w-44 sm:w-56", color: "purple", opacity: 0.04, rotate: 35, flipX: true },
          { asset: 3, className: "left-1/3 -bottom-12 w-72 sm:w-[420px]", color: "purple", opacity: 0.03, rotate: 5 },
        ]}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <ScrollElement direction="up" delay={0} viewport={{ amount: 0.3, once: true }}>
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-3">
              What We Offer
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 italic mb-6">
              Programs & Offerings
            </h2>
            <div className="flex justify-center mb-6">
              <Image
                src="/assets/vector-line.svg"
                alt=""
                width={320}
                height={12}
                className="w-64 sm:w-80 h-auto"
              />
            </div>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Tailored AI education programs for every learner—from curious students
              to seasoned professionals
            </p>
          </div>
        </ScrollElement>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {/* AI Foundations - Large Card */}
          <div
            ref={(el) => { cardsRef.current[0] = el; }}
            className="md:col-span-1 lg:col-span-2 lg:row-span-2 group"
            onMouseMove={(e) => handleMouseMove(e, "foundations")}
            onMouseEnter={() => setHoveredCard("foundations")}
            onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.15s ease-out" }}
          >
            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-3xl bg-brand-purple p-8 lg:p-10 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-[40px] border-white" />
                <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border-[20px] border-white" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold">
                    {programs[0].audience}
                  </span>
                  <div className="floating-icon w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/15 flex items-center justify-center">
                    <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
                  {programs[0].title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-lg lg:text-xl mb-8 max-w-lg">
                  {programs[0].description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {programs[0].features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-white"
                    >
                      <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-brand-purple"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-purple font-semibold rounded-full hover:gap-4 transition-all duration-300">
                    <span>Explore Program</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Applied AI - Medium Card */}
          <div
            ref={(el) => { cardsRef.current[1] = el; }}
            className="group"
            onMouseMove={(e) => handleMouseMove(e, "applied")}
            onMouseEnter={() => setHoveredCard("applied")}
            onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.15s ease-out" }}
          >
            <div className="relative h-full min-h-[280px] rounded-3xl bg-white border border-slate-200 shadow-sm p-6 lg:p-8 overflow-hidden hover:shadow-md transition-shadow duration-300">
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-gray-600 text-xs font-semibold">
                    {programs[1].audience}
                  </span>
                  <div className="floating-icon w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {programs[1].title}
                </h3>

                <p className="text-gray-500 text-sm mb-4 flex-grow">
                  {programs[1].description}
                </p>

                {/* Features - compact */}
                <ul className="space-y-2 mb-4">
                  {programs[1].features.slice(0, 2).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow link */}
                <div className="flex items-center gap-2 text-brand-purple text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Enablement - Medium Card */}
          <div
            ref={(el) => { cardsRef.current[2] = el; }}
            className="group"
            onMouseMove={(e) => handleMouseMove(e, "teachers")}
            onMouseEnter={() => setHoveredCard("teachers")}
            onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.15s ease-out" }}
          >
            <div className="relative h-full min-h-[280px] rounded-3xl bg-white border border-slate-200 shadow-sm p-6 lg:p-8 overflow-hidden hover:shadow-md transition-shadow duration-300">
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-gray-600 text-xs font-semibold">
                    {programs[2].audience}
                  </span>
                  <div className="floating-icon w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {programs[2].title}
                </h3>

                <p className="text-gray-500 text-sm mb-4 flex-grow">
                  {programs[2].description}
                </p>

                {/* Features - compact */}
                <ul className="space-y-2 mb-4">
                  {programs[2].features.slice(0, 2).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Arrow link */}
                <div className="flex items-center gap-2 text-brand-purple text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Workshops - Full Width Card */}
          <div
            ref={(el) => { cardsRef.current[3] = el; }}
            className="md:col-span-2 lg:col-span-3 group"
            onMouseMove={(e) => handleMouseMove(e, "workshops")}
            onMouseEnter={() => setHoveredCard("workshops")}
            onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.15s ease-out" }}
          >
            <div className="relative h-full min-h-[200px] rounded-3xl bg-brand-purple border border-brand-purple-light/30 p-6 lg:p-8 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-brand-purple/5" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-brand-purple/5" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="floating-icon w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purple text-xs font-semibold">
                      {programs[3].audience}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    {programs[3].title}
                  </h3>

                  <p className="text-white/60 max-w-xl mb-4 lg:mb-0">
                    {programs[3].description}
                  </p>
                </div>

                {/* Features as tags */}
                <div className="flex flex-wrap gap-2 lg:max-w-md">
                  {programs[3].features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all duration-300 cursor-pointer"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex-shrink-0 px-6 py-3 bg-brand-purple text-white font-semibold rounded-full hover:bg-brand-purple-dark transition-colors flex items-center gap-2">
                  <span>View Workshops</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { value: "4+", label: "Programs" },
            { value: "50+", label: "Workshops conducted" },
            { value: "200+", label: "Teachers trained" },
            { value: "95%", label: "Satisfaction rate" },
          ].map((stat, index) => (
            <ScrollElement
              key={index}
              direction="up"
              delay={index * 0.1}
              viewport={{ amount: 0.3, once: true }}
            >
              <div className="text-center p-6 rounded-2xl bg-white border border-slate-200">
                <div className="text-3xl lg:text-4xl font-bold text-brand-purple mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            </ScrollElement>
          ))}
        </div>
      </div>
    </section>
  );
}
