"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollElement from "./ui/scroll-animation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const centres = [
  {
    id: 1,
    location: "Chennai",
    state: "Tamil Nadu",
    description: "Our flagship centre featuring state-of-the-art AI labs and innovation spaces for hands-on learning.",
    image: "/images/chennai-center.png",
    students: 120,
  },
  {
    id: 2,
    location: "Bangalore",
    state: "Karnataka",
    description: "Tech hub centre partnering with leading startups to bring real-world AI experiences to students.",
    image: "/images/bangalore-center.png",
    students: 95,
  },
  {
    id: 3,
    location: "Hyderabad",
    state: "Telangana",
    description: "Innovation-focused centre with dedicated research pods and industry mentorship programs.",
    image: "/images/hyderabad-center.png",
    students: 85,
  },
  {
    id: 4,
    location: "Mumbai",
    state: "Maharashtra",
    description: "Industry collaboration hub connecting students with Fortune 500 AI initiatives.",
    image: "/images/mumbai-center.png",
    students: 110,
  },
  {
    id: 5,
    location: "Delhi NCR",
    state: "New Delhi",
    description: "North India's largest AI learning facility with multi-disciplinary project spaces.",
    image: "/images/delhi-center.png",
    students: 130,
  },
  {
    id: 6,
    location: "Pune",
    state: "Maharashtra",
    description: "Specialized centre focusing on AI applications in manufacturing and automation.",
    image: "/images/pune-center.png",
    students: 75,
  },
];

export default function AICentresSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const horizontal = horizontalRef.current;
    const trigger = triggerRef.current;

    if (!horizontal || !trigger) return;

    // Calculate the scroll width
    const getScrollAmount = () => {
      return -(horizontal.scrollWidth - window.innerWidth);
    };

    // Create the horizontal scroll animation
    const tween = gsap.to(horizontal, {
      x: getScrollAmount,
      ease: "none",
    });

    // Create ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: trigger,
      start: "top top",
      end: () => `+=${horizontal.scrollWidth - window.innerWidth}`,
      pin: true,
      scrub: 1,
      animation: tween,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        setProgress(self.progress);
        const newIndex = Math.min(
          Math.floor(self.progress * centres.length),
          centres.length - 1
        );
        setActiveIndex(newIndex);
      },
    });

    // Parallax effect for images
    const cards = horizontal.querySelectorAll(".centre-card");
    cards.forEach((card) => {
      const img = card.querySelector(".parallax-img");
      if (img) {
        gsap.to(img, {
          x: -50,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: tween,
            start: "left right",
            end: "right left",
            scrub: true,
          },
        });
      }
    });

    // Stagger animation for card content
    cards.forEach((card, index) => {
      const content = card.querySelector(".card-content");
      if (content) {
        gsap.fromTo(
          content,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: "left 80%",
              end: "left 50%",
              scrub: 1,
            },
          }
        );
      }
    });

    return () => {
      scrollTrigger.kill();
      tween.kill();
    };
  }, []);

  return (
    <>
      {/* Desktop: Horizontal Scroll */}
      <section ref={sectionRef} className="hidden lg:block">
        <div ref={triggerRef} className="relative overflow-hidden">
          {/* Fixed Header */}
          <div className="absolute top-8 left-0 right-0 z-10 px-12">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
              {/* Title */}
              <ScrollElement direction="left" delay={0.2} viewport={{ amount: 0.5, once: true }}>
                <div>
                  <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-2">
                    Beta Education Network
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 italic">
                    Inside Our AI Centres
                  </h2>
                </div>
              </ScrollElement>

              {/* Counter & Progress */}
              <div className="flex items-center gap-8">
                {/* Active Counter */}
                <div className="text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-brand-purple">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-gray-400 text-xl">/</span>
                    <span className="text-gray-400 text-xl">
                      {String(centres.length).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    {centres[activeIndex]?.location}
                  </p>
                </div>

                {/* Progress Ring */}
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#F43F5E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={`${progress * 100} 100`}
                      className="transition-all duration-100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-700 text-xs font-semibold">
                      {Math.round(progress * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Scroll Container */}
          <div
            ref={horizontalRef}
            className="flex items-center h-screen pl-12 pt-32"
            style={{ width: `${centres.length * 45 + 20}vw` }}
          >
            {centres.map((centre, index) => (
              <div
                key={centre.id}
                className="centre-card flex-shrink-0 w-[42vw] h-[65vh] mr-8 relative group"
              >
                {/* Card */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg">
                  {/* Image with Parallax */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="parallax-img absolute inset-0 w-[120%] h-full">
                      <Image
                        src={centre.image}
                        alt={centre.location}
                        fill
                        className="object-cover"
                        sizes="50vw"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                    <span className="text-white text-sm font-medium">
                      {centre.state}
                    </span>
                  </div>

                  {/* Students Badge */}
                  <div className="absolute top-6 right-6 bg-brand-purple text-white px-4 py-2 rounded-full">
                    <span className="font-bold">{centre.students}+</span>
                    <span className="text-sm ml-1">students</span>
                  </div>

                  {/* Content */}
                  <div className="card-content absolute bottom-0 left-0 right-0 p-8">
                    {/* Index */}
                    <span className="text-brand-purple/50 text-sm font-mono mb-2 block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Location Name */}
                    <h3 className="text-4xl font-bold text-white mb-3">
                      {centre.location}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-base leading-relaxed max-w-md">
                      {centre.description}
                    </p>

                    {/* Divider */}
                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-brand-purple"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <span className="text-white/50 text-sm">
                          View on map
                        </span>
                      </div>

                      {/* Arrow */}
                      <div className="w-12 h-12 rounded-full border border-slate-300 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                        <svg
                          className="w-5 h-5 text-white group-hover:text-white transition-colors"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* End Card - CTA */}
            <div className="centre-card flex-shrink-0 w-[35vw] h-[65vh] mr-12">
              <div className="w-full h-full rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-12">
                <div className="w-20 h-20 rounded-full bg-brand-purple/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-brand-purple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  52+ Centres
                  <br />
                  <span className="text-brand-purple">Across India</span>
                </h3>
                <p className="text-gray-500 text-center mb-8 max-w-sm">
                  We're rapidly expanding to bring AI education closer to every student.
                </p>
                <button className="px-8 py-4 bg-brand-purple text-white font-semibold rounded-full hover:bg-brand-purple-dark transition-colors">
                  Find Nearest Centre
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="absolute bottom-8 left-12 right-12">
            <div className="max-w-[1400px] mx-auto">
              <div className="h-0.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-purple rounded-full transition-all duration-100"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              {/* Location Markers */}
              <div className="flex justify-between mt-4">
                {centres.map((centre, index) => (
                  <div
                    key={centre.id}
                    className={`text-xs transition-colors duration-300 ${index <= activeIndex ? "text-brand-purple" : "text-gray-400"
                      }`}
                  >
                    {centre.location}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: Vertical Scroll Cards */}
      <section className="lg:hidden py-16 px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-2">
            Beta Education Network
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 italic mb-4">
            Inside Our AI Centres
          </h2>
          <p className="text-gray-500 max-w-md">
            Explore our state-of-the-art facilities designed for hands-on AI learning
          </p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-6">
          {centres.map((centre, index) => (
            <div
              key={centre.id}
              className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56">
                <Image
                  src={centre.image}
                  alt={centre.location}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                  <span className="text-white text-xs">{centre.state}</span>
                </div>
                <div className="absolute top-4 right-4 bg-brand-purple text-white px-3 py-1.5 rounded-full text-xs font-bold">
                  {centre.students}+ students
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-brand-purple/50 text-xs font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                  {centre.location}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {centre.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-4">
            52+ centres across India
          </p>
          <button className="px-6 py-3 bg-brand-purple text-white font-semibold rounded-full">
            Find Nearest Centre
          </button>
        </div>
      </section>
    </>
  );
}
