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

// Magnetic Button Component
function MagneticButton({
  children,
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const baseStyles =
    "relative px-8 py-4 lg:px-10 lg:py-5 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 overflow-hidden group";
  const variants = {
    primary: "bg-brand-purple text-white hover:bg-brand-purple-dark",
    secondary:
      "bg-transparent text-gray-900 border-2 border-slate-300 hover:border-brand-purple hover:bg-purple-50",
  };

  return (
    <button
      ref={buttonRef}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {variant === "primary" && (
          <span
            className={`inline-block transition-transform duration-300 ${isHovered ? "translate-x-1" : ""
              }`}
          >
            →
          </span>
        )}
      </span>
    </button>
  );
}

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Create timeline for coordinated animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate headline - word by word reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".word");
        tl.fromTo(
          words,
          {
            y: 80,
            opacity: 0,
            rotationX: -40,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
          }
        );
      }

      // Animate subtitle
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      }

      // Animate buttons
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("button");
        tl.fromTo(
          buttons,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );
      }

      // Decorative elements parallax
      if (decorRef.current) {
        const circles = decorRef.current.querySelectorAll(".decor-circle");
        circles.forEach((circle, index) => {
          gsap.to(circle, {
            y: index % 2 === 0 ? -40 : 40,
            x: index % 2 === 0 ? 20 : -20,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split headline into words for animation
  const headline = "Ready to bring AI education to your students?";
  const words = headline.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 lg:pt-40 pb-12 lg:pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Assets */}
      <BgDecorations
        items={[
          { asset: 2, className: "-left-16 top-10 w-56 sm:w-72", color: "purple", opacity: 0.05, rotate: -30 },
          { asset: 1, className: "-right-20 bottom-20 w-64 sm:w-80", color: "purple", opacity: 0.04, rotate: 15, flipX: true },
          { asset: 3, className: "left-1/4 -top-16 w-80 sm:w-[450px]", color: "purple", opacity: 0.03, rotate: 180 },
        ]}
      />

      {/* Background Decorations */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        {/* Large gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-3xl" />

        {/* Decorative circles */}
        <div className="decor-circle absolute top-20 left-[10%] w-64 h-64 border border-purple-100 rounded-full" />
        <div className="decor-circle absolute bottom-20 right-[15%] w-48 h-48 border border-brand-purple/10 rounded-full" />
        <div className="decor-circle absolute top-1/3 right-[10%] w-32 h-32 bg-brand-purple/5 rounded-full" />
        <div className="decor-circle absolute bottom-1/3 left-[20%] w-24 h-24 bg-purple-50 rounded-full" />
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* Content */}
        <div className="text-center">
          {/* Eyebrow */}
          <p className="text-brand-purple text-sm font-medium tracking-wider uppercase mb-6">
            Partner With Us
          </p>

          {/* Headline with word-by-word animation */}
          <h2
            ref={headlineRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            style={{ perspective: "1000px" }}
          >
            {words.map((word, index) => (
              <span
                key={index}
                className="word inline-block mr-[0.25em] last:mr-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                {word === "AI" ? (
                  <span className="text-brand-purple italic">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h2>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-gray-500 text-lg lg:text-xl max-w-2xl mx-auto mb-12"
          >
            Transform your curriculum with hands-on AI education.
            Our team will work with you to create a customized implementation plan.
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <MagneticButton variant="primary">Talk to Us</MagneticButton>
            <MagneticButton variant="secondary">Download Curriculum Overview</MagneticButton>
          </div>

          {/* Quote */}
          <ScrollElement direction="up" delay={0.3} viewport={{ amount: 0.5, once: true }}>
            <div className="mt-16 pt-12 pb-8 border-t border-slate-200 max-w-2xl mx-auto text-center">
              <p className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-4">
                &ldquo;AI won&apos;t replace humans. But humans who use AI will replace those who don&apos;t&rdquo;
              </p>
              <p className="text-brand-purple font-semibold">
                — Sam Altman, <span className="text-gray-500 font-normal">Founder of OpenAI</span>
              </p>
            </div>
          </ScrollElement>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
