"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const features = [
  {
    title: "Age-Appropriate AI Learning",
    description: "Curriculum designed specifically for each age group, ensuring concepts are neither too simple nor too complex. Our expert educators craft learning paths that match developmental stages, making AI accessible and engaging for every learner.",
    icon: "🎯",
    gradient: "from-blue-500 to-cyan-500",
    mediaType: "video",
    mediaUrl: "https://videos.pexels.com/video-files/8463622/8463622-uhd_3840_2160_25fps.mp4",
    color: "#1D4ED8",
  },
  {
    title: "Industry-Aligned Curriculum",
    description: "Content co-created with AI industry experts, keeping pace with the latest developments in artificial intelligence. Students learn what matters in the real world, with frameworks and tools used by professionals today.",
    icon: "🏢",
    gradient: "from-purple-500 to-pink-500",
    mediaType: "video",
    mediaUrl: "https://videos.pexels.com/video-files/8465952/8465952-uhd_3840_2160_25fps.mp4",
    color: "#7E22CE",
  },
  {
    title: "Hands-On Projects",
    description: "Learn by doing with real-world projects that build practical skills and confidence in AI technologies. From building chatbots to training image classifiers, students create portfolio-worthy work that demonstrates mastery.",
    icon: "🛠️",
    gradient: "from-orange-500 to-red-500",
    mediaType: "video",
    mediaUrl: "https://videos.pexels.com/video-files/1422633/1422633-hd_1920_810_24fps.mp4",
    color: "#C2410C",
  },
  {
    title: "Real AI Exposure",
    description: "Work with actual AI tools and platforms used by professionals, not just theoretical concepts. Students gain hands-on experience with TensorFlow, PyTorch, and other industry-standard technologies that prepare them for real careers.",
    icon: "🚀",
    gradient: "from-green-500 to-emerald-500",
    mediaType: "image",
    mediaUrl: "https://images.pexels.com/photos/7743255/pexels-photo-7743255.jpeg",
    color: "#047857",
  },
];

export default function WhyChooseUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Create transforms for each feature
  const feature0Progress = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const feature1Progress = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const feature2Progress = useTransform(scrollYProgress, [0.5, 0.75], [0, 1]);
  const feature3Progress = useTransform(scrollYProgress, [0.75, 1], [0, 1]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.25) setActiveIndex(0);
      else if (latest < 0.5) setActiveIndex(1);
      else if (latest < 0.75) setActiveIndex(2);
      else setActiveIndex(3);
    });

    return () => {
      unsubscribe();
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative bg-purple-50">
      {/* Section Header - Fixed at top */}
      <div className="sticky top-0 z-10 bg-purple-50/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 italic">
              Why Choose Us?
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
          </motion.div>
        </div>
      </div>

      {/* Scroll Content */}
      <div className="relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Scrolling Content - Desktop Only */}
            <div className="hidden lg:block lg:py-32">
              {features.map((feature, index) => {
                const featureProgress =
                  index === 0 ? feature0Progress :
                    index === 1 ? feature1Progress :
                      index === 2 ? feature2Progress :
                        feature3Progress;

                const opacityTransform = useTransform(
                  featureProgress,
                  [0, 0.3, 0.7, 1],
                  [0.3, 1, 1, 0.3]
                );

                const titleColor = useTransform(
                  featureProgress,
                  [0, 0.15, 0.35, 0.65, 0.85, 1],
                  ["#111827", "#111827", feature.color, feature.color, "#111827", "#111827"]
                );

                return (
                  <motion.div
                    key={index}
                    className="lg:min-h-[100vh] flex flex-col justify-center py-8 lg:py-20"
                    style={isLargeScreen ? { opacity: opacityTransform } : {}}
                  >

                    {/* Number Indicator */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ duration: 0.4, delay: 0 }}
                      className="mb-4"
                    >
                      <span className="text-brand-purple/40 text-lg font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                      style={isLargeScreen ? { color: titleColor } : {}}
                    >
                      {feature.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                      className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl"
                    >
                      {feature.description}
                    </motion.p>

                    {/* Decorative Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="mt-8 h-1 w-24 origin-left"
                      style={{ background: `linear-gradient(to right, ${feature.color}, transparent)` }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Sticky Image Container */}
            <div className="hidden lg:block lg:sticky lg:top-32 lg:h-screen lg:flex lg:items-center">
              <div className="relative w-full h-[600px]">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: index === 0 ? 1 : 0, scale: index === 0 ? 1 : 0.95, y: index === 0 ? 0 : 20 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      scale: activeIndex === index ? 1 : 0.95,
                      y: activeIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {/* Media Container - Video or Image */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden">
                      <div className="w-full h-full">
                        {feature.mediaType === "video" ? (
                          feature.mediaUrl.startsWith("PASTE_") ? (
                            <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                              <p className="text-white/60 text-sm px-4 text-center">Video placeholder - Add Pexels URL</p>
                            </div>
                          ) : (
                            <video
                              src={feature.mediaUrl}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          )
                        ) : (
                          feature.mediaUrl.startsWith("PASTE_") ? (
                            <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                              <p className="text-white/60 text-sm px-4 text-center">Image placeholder - Add Pexels URL</p>
                            </div>
                          ) : (
                            <Image
                              src={feature.mediaUrl}
                              alt={feature.title}
                              width={2600}
                              height={2600}
                              className="object-cover"
                            />
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Progress Indicator */}
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:block">
                  <div className="space-y-4">
                    {features.map((_, index) => (
                      <motion.div
                        key={index}
                        className="relative"
                        animate={{
                          scale: activeIndex === index ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${activeIndex === index
                            ? "border-brand-purple bg-brand-purple scale-110"
                            : "border-slate-300 bg-transparent"
                            }`}
                        />
                        {activeIndex === index && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute inset-0 w-3 h-3 rounded-full bg-brand-purple"
                            initial={false}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Alternating Images and Text */}
            <div className="lg:hidden space-y-8 pb-12">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4">
                  {/* Media - Video or Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="relative h-[280px] rounded-2xl overflow-hidden shadow-lg"
                  >
                    {feature.mediaType === "video" ? (
                      feature.mediaUrl.startsWith("PASTE_") ? (
                        <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                          <p className="text-white/70 text-xs px-4 text-center">Video placeholder - Add Pexels URL</p>
                        </div>
                      ) : (
                        <video
                          src={feature.mediaUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        />
                      )
                    ) : (
                      feature.mediaUrl.startsWith("PASTE_") ? (
                        <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                          <p className="text-white/70 text-xs px-4 text-center">Image placeholder - Add Pexels URL</p>
                        </div>
                      ) : (
                        <Image
                          src={feature.mediaUrl}
                          alt={feature.title}
                          width={800}
                          height={600}
                          className="object-cover w-full h-full"
                        />
                      )
                    )}
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-3"
                  >
                    {/* Number Indicator */}
                    <span className="text-brand-purple text-base font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <motion.h3
                      initial={{ color: "#111827" }}
                      whileInView={{ color: feature.color }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-2xl sm:text-3xl font-bold leading-tight"
                    >
                      {feature.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="h-1 w-20" style={{ background: `linear-gradient(to right, ${feature.color}, transparent)` }} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 bg-purple-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-600 text-lg mb-6">
              Experience the difference in AI education
            </p>
            <button className="bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 ">
              Explore Our Programs
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
