"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BgDecorations from "./BgDecorations";
import ScrollElement from "./ui/scroll-animation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tabs = [
  { id: "students", label: "Students" },
  { id: "parents", label: "Parents" },
  { id: "schools", label: "Schools" },
  { id: "colleges", label: "Colleges" },
];

const testimonials = {
  students: [
    {
      id: 1,
      quote: "The AI program opened my eyes to possibilities I never knew existed. I built my first chatbot in just three weeks!",
      name: "Arjun Mehta",
      role: "Class 10, Chennai",
      image: "/images/testimonial-student-1.jpg",
    },
    {
      id: 2,
      quote: "Learning AI felt like a superpower. The hands-on projects made complex concepts easy to understand.",
      name: "Priya Sharma",
      role: "Class 12, Bangalore",
      image: "/images/testimonial-student-2.jpg",
    },
    {
      id: 3,
      quote: "I went from knowing nothing about AI to presenting my project at a national competition. Best decision ever.",
      name: "Rahul Verma",
      role: "Class 11, Delhi",
      image: "/images/testimonial-student-3.jpg",
    },
  ],
  parents: [
    {
      id: 1,
      quote: "My daughter now explains AI concepts to me! The program made learning fun and age-appropriate.",
      name: "Sunita Patel",
      role: "Parent of Class 7 Student",
      image: "/images/testimonial-parent-1.jpg",
    },
    {
      id: 2,
      quote: "Finally, an educational program that prepares kids for the future, not the past. Worth every rupee.",
      name: "Vikram Reddy",
      role: "Parent of Class 9 Student",
      image: "/images/testimonial-parent-2.jpg",
    },
    {
      id: 3,
      quote: "The change in my son's confidence and problem-solving abilities has been remarkable.",
      name: "Anjali Krishnan",
      role: "Parent of Class 8 Student",
      image: "/images/testimonial-parent-3.jpg",
    },
  ],
  schools: [
    {
      id: 1,
      quote: "Our 12th graders built an AI-powered crop disease detector. They didn't just learn about AI—they solved a real problem with it.",
      name: "Dr. Priya Malhotra",
      role: "Principal, Modern High School",
      image: "/images/testimonial-school-1.jpg",
    },
    {
      id: 2,
      quote: "Beta Education transformed our computer lab into an AI innovation hub. Students are more engaged than ever.",
      name: "Dr. Ramesh Kumar",
      role: "Principal, DPS Chennai",
      image: "/images/testimonial-school-2.jpg",
    },
    {
      id: 3,
      quote: "The curriculum seamlessly integrates with our existing syllabus. Teacher training was exceptional.",
      name: "Mrs. Lakshmi Iyer",
      role: "Academic Director, Kendriya Vidyalaya",
      image: "/images/testimonial-school-3.jpg",
    },
  ],
  colleges: [
    {
      id: 1,
      quote: "Our placement statistics improved significantly after introducing the Applied AI program.",
      name: "Prof. Anand Rao",
      role: "HOD Computer Science, VIT",
      image: "/images/testimonial-college-1.jpg",
    },
    {
      id: 2,
      quote: "Industry-aligned curriculum that actually prepares students for real AI roles. Highly recommended.",
      name: "Dr. Meera Nair",
      role: "Dean, SRM University",
      image: "/images/testimonial-college-2.jpg",
    },
    {
      id: 3,
      quote: "The workshop series brought cutting-edge AI knowledge to our campus. Students loved it.",
      name: "Prof. Karthik Subramanian",
      role: "Director, IIT Madras Research Park",
      image: "/images/testimonial-college-3.jpg",
    },
  ],
};

const caseStudies = {
  students: {
    title: "From Zero to AI Champion",
    subtitle: "How a Class 9 student won a national AI competition",
    problem: "Ravi, a Class 9 student from a small town, had no exposure to programming or AI. His school lacked resources, and he felt left behind compared to students from metro cities.",
    approach: "Through our online AI Foundations program, Ravi started with visual programming, gradually moving to Python. Weekly mentorship sessions and peer collaboration helped him build confidence.",
    outcome: "Within 8 months, Ravi built an AI-powered crop disease detection app that won first place at the National Young Innovators Competition. He's now mentoring other students.",
    stats: [
      { value: "8", label: "months" },
      { value: "1st", label: "place" },
      { value: "50+", label: "students mentored" },
    ],
  },
  parents: {
    title: "A Parent's Perspective on Future-Ready Education",
    subtitle: "Investing in skills that matter",
    problem: "The Sharma family was concerned their children were spending too much unproductive time on devices. Traditional tuitions weren't sparking any real interest in learning.",
    approach: "Both children enrolled in age-appropriate AI programs. The gamified curriculum turned screen time into productive learning. Parents received progress reports and could track milestones.",
    outcome: "Within 6 months, both children showed improved analytical thinking. The elder child decided to pursue computer science, while the younger one developed a passion for robotics.",
    stats: [
      { value: "6", label: "months" },
      { value: "2x", label: "engagement" },
      { value: "100%", label: "satisfaction" },
    ],
  },
  schools: {
    title: "12th Graders Building Real AI Solutions",
    subtitle: "From textbook learning to solving real-world problems",
    problem: "Students at Modern High School were learning about AI from theory but had no hands-on experience building actual AI applications. Science projects were traditional and didn't leverage modern technology.",
    approach: "We introduced project-based AI curriculum where students learned by building. Teams worked on real-world problems, with mentorship from AI practitioners. Focus on combining AI with practical applications.",
    outcome: "Grade 12 students built an AI-powered crop disease detector that identifies plant diseases from photos. The project won recognition at national science fairs and is now being piloted with local farmers.",
    stats: [
      { value: "95%", label: "project completion" },
      { value: "8+", label: "AI projects built" },
      { value: "1st", label: "national award" },
    ],
  },
  colleges: {
    title: "Boosting Placement Rates with Applied AI",
    subtitle: "Industry partnerships that deliver results",
    problem: "A tier-2 engineering college struggled with placement rates. Students had theoretical knowledge but lacked practical AI/ML skills that companies demanded.",
    approach: "We implemented a 6-month Applied AI program with industry projects, hackathons, and mock interviews. Direct mentorship from professionals at partner companies.",
    outcome: "Placement rates jumped from 65% to 89%. Average package increased by 40%. Three students received offers from top tech companies including Google and Microsoft.",
    stats: [
      { value: "89%", label: "placement rate" },
      { value: "40%", label: "package increase" },
      { value: "3", label: "FAANG offers" },
    ],
  },
};

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState("students");
  const sectionRef = useRef<HTMLDivElement>(null);
  const caseStudyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate case study sections on scroll
      const sections = caseStudyRef.current?.querySelectorAll(".case-section");
      sections?.forEach((section, index) => {
        gsap.fromTo(
          section,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.15,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  const currentTestimonials = testimonials[activeTab as keyof typeof testimonials];
  const currentCaseStudy = caseStudies[activeTab as keyof typeof caseStudies];

  return (
    <section ref={sectionRef} className="relative py-10 lg:py-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Assets */}
      <BgDecorations
        items={[
          { asset: 3, className: "-left-20 top-10 w-80 sm:w-[480px]", color: "purple", opacity: 0.04, rotate: -12 },
          { asset: 1, className: "-right-16 bottom-20 w-60 sm:w-80", color: "purple", opacity: 0.05, rotate: 30, flipX: true },
          { asset: 2, className: "left-2/3 top-1/4 w-36 sm:w-48", color: "purple", opacity: 0.03, rotate: -45, scale: 0.9 },
        ]}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <ScrollElement direction="up" delay={0} viewport={{ amount: 0.3, once: true }}>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-3">
              Real Stories, Real Impact
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 italic mb-6">
              Testimonials & Case Studies
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
          </div>
        </ScrollElement>

        {/* Tabs */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="inline-flex bg-slate-100 rounded-full p-1.5 border border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 ${activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-purple rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12 lg:mb-16">
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-white border border-slate-200 shadow-sm rounded-2xl p-6 lg:p-8 hover:shadow-md transition-shadow duration-300"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-3 left-6 w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6 pt-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                      <span className="text-gray-500 text-sm font-semibold">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Case Study Card */}
            <div
              ref={caseStudyRef}
              className="bg-white rounded-3xl lg:rounded-[40px] overflow-hidden border border-slate-200"
            >
              {/* Case Study Header */}
              <div className="bg-brand-purple p-6 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purple text-xs font-semibold uppercase tracking-wider">
                    Case Study
                  </span>
                  <span className="text-white/40 text-sm">
                    {tabs.find(t => t.id === activeTab)?.label}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {currentCaseStudy.title}
                </h3>
                <p className="text-white/60">{currentCaseStudy.subtitle}</p>
              </div>

              {/* Case Study Content */}
              <div className="p-6 lg:p-10">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Problem */}
                  <motion.div
                    className="case-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">The Problem</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {currentCaseStudy.problem}
                    </p>
                  </motion.div>

                  {/* Approach */}
                  <motion.div
                    className="case-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">Our Approach</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {currentCaseStudy.approach}
                    </p>
                  </motion.div>

                  {/* Outcome */}
                  <motion.div
                    className="case-section"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">The Outcome</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {currentCaseStudy.outcome}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 lg:mt-10 text-center"
        >
          <p className="text-gray-500 mb-6">
            Ready to write your own success story?
          </p>
          <button className="px-8 py-4 bg-brand-purple text-white font-semibold rounded-full hover:bg-brand-purple-dark transition-colors inline-flex items-center gap-2">
            <span>Start Your Journey</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
