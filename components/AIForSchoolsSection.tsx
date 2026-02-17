"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import DotPattern from "./ui/dot-pattern";

const schoolSteps = [
  {
    number: "01",
    title: "What is AI?",
    description:
      "Students discover AI through fun, relatable examples—from voice assistants to recommendation systems they use every day.",
    mediaType: "video",
    mediaUrl: "https://videos.pexels.com/video-files/3209828/3209828-uhd_3840_2160_25fps.mp4",
  },
  {
    number: "02",
    title: "How AI Works in Schools",
    description:
      "Interactive sessions introduce machine learning concepts through games, storytelling, and hands-on activities tailored for young minds.",
    mediaType: "video",
    mediaUrl: "https://videos.pexels.com/video-files/4497323/4497323-uhd_3840_2160_25fps.mp4",
  },
  {
    number: "03",
    title: "Skills Students Gain",
    description:
      "Critical thinking, problem-solving, creativity, and computational thinking—skills essential for the AI-powered future.",
    mediaType: "video",
    mediaUrl: "https://videos.pexels.com/video-files/6985314/6985314-uhd_3840_2160_25fps.mp4",
  },
  {
    number: "04",
    title: "Why Early Exposure Matters",
    description:
      "Starting early builds confidence and curiosity, preparing students to be creators, not just consumers, of AI technology.",
    mediaType: "image",
    mediaUrl: "https://images.pexels.com/photos/5530483/pexels-photo-5530483.jpeg",
  },
];

const collegeSteps = [
  {
    number: "01",
    title: "Industry-Aligned Programs",
    description:
      "Curriculum designed in collaboration with tech leaders, ensuring students learn skills that employers actively seek.",
    mediaType: "video",
    mediaUrl: "https://videos.pexels.com/video-files/8439484/8439484-uhd_3840_2160_25fps.mp4",
  },
  {
    number: "02",
    title: "Practical AI Applications",
    description:
      "Hands-on projects using real datasets and industry tools—from machine learning pipelines to AI-powered solutions.",
    mediaType: "video",
    mediaUrl: "https://videos.pexels.com/video-files/34013005/14428070_1920_1080_24fps.mp4",
  },
  {
    number: "03",
    title: "Career Readiness",
    description:
      "Interview preparation, portfolio building, and direct pathways to internships and placements with our partner companies.",
    mediaType: "image",
    mediaUrl: "https://images.pexels.com/photos/8457428/pexels-photo-8457428.jpeg",
  },
];

export default function AIForSchoolsSection() {
  const schoolsRef = useRef<HTMLDivElement>(null);
  const collegesRef = useRef<HTMLDivElement>(null);
  const [activeSchoolIndex, setActiveSchoolIndex] = useState(0);
  const [activeCollegeIndex, setActiveCollegeIndex] = useState(0);

  // Schools section scroll
  const { scrollYProgress: schoolsProgress } = useScroll({
    target: schoolsRef,
    offset: ["start start", "end end"],
  });

  // Colleges section scroll
  const { scrollYProgress: collegesProgress } = useScroll({
    target: collegesRef,
    offset: ["start start", "end end"],
  });

  // Parallax effect - schools card moves up slightly as you scroll
  const schoolsY = useTransform(schoolsProgress, [0.8, 1], [0, -50]);
  const schoolsScale = useTransform(schoolsProgress, [0.8, 1], [1, 0.95]);
  const schoolsOpacity = useTransform(schoolsProgress, [0.85, 1], [1, 0.6]);

  // Schools step opacities
  const schoolStep0Opacity = useTransform(schoolsProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const schoolStep1Opacity = useTransform(schoolsProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
  const schoolStep2Opacity = useTransform(schoolsProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const schoolStep3Opacity = useTransform(schoolsProgress, [0.7, 0.75, 0.95, 1], [0, 1, 1, 0.8]);

  // Colleges step opacities
  const collegeStep0Opacity = useTransform(collegesProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const collegeStep1Opacity = useTransform(collegesProgress, [0.25, 0.35, 0.6, 0.7], [0, 1, 1, 0]);
  const collegeStep2Opacity = useTransform(collegesProgress, [0.65, 0.75, 1], [0, 1, 1]);

  const getSchoolStepOpacity = (index: number) => {
    switch (index) {
      case 0: return schoolStep0Opacity;
      case 1: return schoolStep1Opacity;
      case 2: return schoolStep2Opacity;
      case 3: return schoolStep3Opacity;
      default: return schoolStep0Opacity;
    }
  };

  const getCollegeStepOpacity = (index: number) => {
    switch (index) {
      case 0: return collegeStep0Opacity;
      case 1: return collegeStep1Opacity;
      case 2: return collegeStep2Opacity;
      default: return collegeStep0Opacity;
    }
  };

  useEffect(() => {
    const unsubscribeSchools = schoolsProgress.on("change", (latest) => {
      if (latest < 0.25) setActiveSchoolIndex(0);
      else if (latest < 0.5) setActiveSchoolIndex(1);
      else if (latest < 0.75) setActiveSchoolIndex(2);
      else setActiveSchoolIndex(3);
    });

    const unsubscribeColleges = collegesProgress.on("change", (latest) => {
      if (latest < 0.33) setActiveCollegeIndex(0);
      else if (latest < 0.66) setActiveCollegeIndex(1);
      else setActiveCollegeIndex(2);
    });

    return () => {
      unsubscribeSchools();
      unsubscribeColleges();
    };
  }, [schoolsProgress, collegesProgress]);

  return (
    <>
      {/* ==================== DESKTOP VERSION ==================== */}
      <div className="hidden lg:block">
        {/* AI FOR SCHOOLS - Pinned section */}
        <section
          ref={schoolsRef}
          className="relative"
          style={{ height: "400vh" }}
        >
          <div className="sticky top-0 h-screen flex items-center justify-center py-12 overflow-hidden">
            <motion.div
              className="max-w-[1400px] w-full mx-auto px-6"
              style={{ y: schoolsY, scale: schoolsScale, opacity: schoolsOpacity }}
            >
              <div className="relative bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-[80px] shadow-2xl border border-cyan-300/30 p-16 overflow-hidden">
                {/* Animated gradient mesh */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
                  <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                  <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-teal-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>

                <DotPattern
                  width={24}
                  height={24}
                  cx={1.5}
                  cy={1.5}
                  cr={1.5}
                  className="fill-brand-purple/15"
                />

                {/* Header */}
                <div className="relative z-10 text-center mb-12">
                  <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4 italic drop-shadow-lg">
                    AI for Schools
                  </h2>
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/assets/vector-line.svg"
                      alt=""
                      width={320}
                      height={12}
                      className="w-72 h-auto opacity-80 brightness-0 invert"
                    />
                  </div>
                  <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">
                    Empowering young minds with AI literacy through engaging,
                    age-appropriate learning experiences
                  </p>
                </div>

                {/* Content Grid */}
                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left: Image */}
                  <div className="relative">
                    <div className="relative h-[380px] rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30">
                      {schoolSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          className="absolute inset-0"
                          animate={{
                            opacity: activeSchoolIndex === index ? 1 : 0,
                            scale: activeSchoolIndex === index ? 1 : 1.05,
                          }}
                          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        >
                          {step.mediaType === "video" ? (
                            step.mediaUrl.startsWith("PASTE_") ? (
                              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                                <p className="text-white/60 text-sm px-4 text-center">Video placeholder - Add Pexels URL</p>
                              </div>
                            ) : (
                              <video
                                src={step.mediaUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                              />
                            )
                          ) : (
                            step.mediaUrl.startsWith("PASTE_") ? (
                              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                                <p className="text-white/60 text-sm px-4 text-center">Image placeholder - Add Pexels URL</p>
                              </div>
                            ) : (
                              <Image
                                src={step.mediaUrl}
                                alt={step.title}
                                width={600}
                                height={500}
                                className="w-full h-full object-cover"
                              />
                            )
                          )}
                        </motion.div>
                      ))}
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                        590+ Students
                      </div>
                    </div>

                    {/* Progress dots */}
                    <div className="flex justify-center gap-2 mt-6">
                      {schoolSteps.map((_, index) => (
                        <motion.div
                          key={index}
                          className="h-1.5 rounded-full"
                          animate={{
                            width: index === activeSchoolIndex ? 28 : 6,
                            backgroundColor: index === activeSchoolIndex ? "#7C3AED" : "#d1d5db",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="relative h-[300px]">
                    {schoolSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0 flex flex-col justify-center"
                        style={{ opacity: getSchoolStepOpacity(index) }}
                      >
                        <span className="text-white/60 text-sm font-bold mb-2">
                          {step.number}
                        </span>
                        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                          {step.title}
                        </h3>
                        <p className="text-white/90 text-lg leading-relaxed max-w-md drop-shadow">
                          {step.description}
                        </p>
                        <div className="mt-6 h-0.5 w-16 bg-white/50 rounded-full" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI FOR COLLEGES - Slides up over Schools */}
        <section
          ref={collegesRef}
          className="relative -mt-[100vh]"
          style={{ height: "350vh" }}
        >
          <div className="sticky top-0 h-screen flex items-center justify-center py-12 overflow-hidden">
            <div className="max-w-[1400px] w-full mx-auto px-6">
              <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-[80px] shadow-2xl p-16 overflow-hidden">
                {/* Animated gradient mesh */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
                  <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                  <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
                </div>
                {/* Header */}
                <div className="relative z-10 text-center mb-12">
                  <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4 italic drop-shadow-lg">
                    AI for Colleges
                  </h2>
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/assets/vector-line.svg"
                      alt=""
                      width={320}
                      height={12}
                      className="w-72 h-auto brightness-0 invert opacity-80"
                    />
                  </div>
                  <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">
                    Preparing graduates for AI-driven careers with industry-ready
                    skills and real-world experience
                  </p>
                </div>

                {/* Content Grid */}
                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left: Image */}
                  <div className="relative">
                    <div className="relative h-[380px] rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                      {collegeSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          className="absolute inset-0"
                          animate={{
                            opacity: activeCollegeIndex === index ? 1 : 0,
                            scale: activeCollegeIndex === index ? 1 : 1.05,
                          }}
                          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        >
                          {step.mediaType === "video" ? (
                            step.mediaUrl.startsWith("PASTE_") ? (
                              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                <p className="text-white/60 text-sm px-4 text-center">Video placeholder - Add Pexels URL</p>
                              </div>
                            ) : (
                              <video
                                src={step.mediaUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                              />
                            )
                          ) : (
                            step.mediaUrl.startsWith("PASTE_") ? (
                              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                                <p className="text-white/60 text-sm px-4 text-center">Image placeholder - Add Pexels URL</p>
                              </div>
                            ) : (
                              <Image
                                src={step.mediaUrl}
                                alt={step.title}
                                width={600}
                                height={500}
                                className="w-full h-full object-cover"
                              />
                            )
                          )}
                        </motion.div>
                      ))}
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-purple-600 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                        10+ Colleges
                      </div>
                    </div>

                    {/* Progress dots */}
                    <div className="flex justify-center gap-2 mt-6">
                      {collegeSteps.map((_, index) => (
                        <motion.div
                          key={index}
                          className="h-1.5 rounded-full"
                          animate={{
                            width: index === activeCollegeIndex ? 28 : 6,
                            backgroundColor: index === activeCollegeIndex ? "#F43F5E" : "rgba(255,255,255,0.3)",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="relative h-[300px]">
                    {collegeSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0 flex flex-col justify-center"
                        style={{ opacity: getCollegeStepOpacity(index) }}
                      >
                        <span className="text-white/60 text-sm font-bold mb-2">
                          {step.number}
                        </span>
                        <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                          {step.title}
                        </h3>
                        <p className="text-white/90 text-lg leading-relaxed max-w-md drop-shadow">
                          {step.description}
                        </p>
                        <div className="mt-6 h-0.5 w-16 bg-white/50 rounded-full" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ==================== MOBILE VERSION ==================== */}
      <div className="lg:hidden">
        {/* AI for Schools - Mobile */}
        <section className="relative py-12 sm:py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="relative bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400 rounded-[40px] sm:rounded-[60px] shadow-2xl border border-cyan-300/30 p-6 sm:p-10 overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
              </div>
              <div className="relative z-10 text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic drop-shadow-lg">
                  AI for Schools
                </h2>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/assets/vector-line.svg"
                    alt=""
                    width={240}
                    height={10}
                    className="w-48 sm:w-56 h-auto brightness-0 invert opacity-80"
                  />
                </div>
                <p className="text-white/90 text-base max-w-xl mx-auto drop-shadow">
                  Empowering young minds with AI literacy
                </p>
              </div>

              <div className="relative z-10 space-y-6">
                {schoolSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
                  >
                    {/* Media - Video or Image */}
                    <div className="relative h-[200px] sm:h-[240px] w-full overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                      {step.mediaType === "video" ? (
                        step.mediaUrl.startsWith("PASTE_") ? (
                          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                            <p className="text-white/70 text-xs px-4 text-center">Video placeholder - Add Pexels URL</p>
                          </div>
                        ) : (
                          <video
                            src={step.mediaUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        )
                      ) : (
                        step.mediaUrl.startsWith("PASTE_") ? (
                          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                            <p className="text-white/70 text-xs px-4 text-center">Image placeholder - Add Pexels URL</p>
                          </div>
                        ) : (
                          <Image
                            src={step.mediaUrl}
                            alt={step.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        )
                      )}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md">
                        <span className="text-blue-600 text-xs font-bold">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-5">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI for Colleges - Mobile */}
        <section className="relative py-12 sm:py-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-[40px] sm:rounded-[60px] shadow-2xl p-6 sm:p-10 overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>
              </div>
              <div className="relative z-10 text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic drop-shadow-lg">
                  AI for Colleges
                </h2>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/assets/vector-line.svg"
                    alt=""
                    width={240}
                    height={10}
                    className="w-48 sm:w-56 h-auto brightness-0 invert opacity-80"
                  />
                </div>
                <p className="text-white/90 text-base max-w-xl mx-auto drop-shadow">
                  Preparing graduates for AI-driven careers
                </p>
              </div>

              <div className="relative z-10 space-y-6">
                {collegeSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white/15 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/20"
                  >
                    {/* Media - Video or Image */}
                    <div className="relative h-[200px] sm:h-[240px] w-full overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                      {step.mediaType === "video" ? (
                        step.mediaUrl.startsWith("PASTE_") ? (
                          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                            <p className="text-white/70 text-xs px-4 text-center">Video placeholder - Add Pexels URL</p>
                          </div>
                        ) : (
                          <video
                            src={step.mediaUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        )
                      ) : (
                        step.mediaUrl.startsWith("PASTE_") ? (
                          <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                            <p className="text-white/70 text-xs px-4 text-center">Image placeholder - Add Pexels URL</p>
                          </div>
                        ) : (
                          <Image
                            src={step.mediaUrl}
                            alt={step.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        )
                      )}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md">
                        <span className="text-purple-600 text-xs font-bold">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-5">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2 drop-shadow">
                        {step.title}
                      </h4>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
