import Image from "next/image";
import Navbar from "./Navbar";
import BgDecorations from "./BgDecorations";
import ScrollElement from "./ui/scroll-animation";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Background Assets */}
      <BgDecorations
        items={[
          { asset: 1, className: "-left-20 -top-20 w-72 sm:w-96", color: "purple", opacity: 0.05, rotate: -15 },
          { asset: 3, className: "-right-16 top-1/3 w-80 sm:w-[500px]", color: "purple", opacity: 0.04, rotate: 10, flipX: true },
          { asset: 2, className: "left-1/3 -bottom-10 w-32 sm:w-48", color: "purple", opacity: 0.03, rotate: 25, scale: 0.8 },
        ]}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <ScrollElement direction="left" delay={0} viewport={{ amount: 0.2, once: true }}>
              <div className="inline-block">
                <span className="bg-brand-purple-light/10 text-brand-purple px-6 py-2.5 rounded-full text-sm font-medium border border-purple-200">
                  AI First Learn
                </span>
              </div>
            </ScrollElement>

            {/* Main Heading */}
            <ScrollElement direction="left" delay={0.1} viewport={{ amount: 0.2, once: true }}>
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Building </span>
                <span className="text-brand-purple">India's AI-Ready</span>
                <span className="text-gray-900"> Generation</span>
              </div>
            </ScrollElement>

            {/* Subheading */}
            <ScrollElement direction="left" delay={0.2} viewport={{ amount: 0.2, once: true }}>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-xl">
                We're making AI education accessible for every student in India. From middle schoolers building their first AI project to college students landing AI engineering roles.
              </p>
            </ScrollElement>

            {/* Features */}
            <ScrollElement direction="left" delay={0.3} viewport={{ amount: 0.2, once: true }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/assets/vector-tick.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                  <span className="text-gray-700 font-medium text-base sm:text-lg">Practical</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/assets/vector-tick.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                  <span className="text-gray-700 font-medium text-base sm:text-lg">Age-Appropriate</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/assets/vector-tick.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                  <span className="text-gray-700 font-medium text-base sm:text-lg">Future-Focused</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/assets/vector-tick.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  </div>
                  <span className="text-gray-700 font-medium text-base sm:text-lg">High Quality</span>
                </div>
              </div>
            </ScrollElement>

            {/* CTA Buttons */}
            <ScrollElement direction="left" delay={0.4} viewport={{ amount: 0.2, once: true }}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button className="bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors">
                  Get Started for Schools
                </button>
                <button className="border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors">
                  Explore College Programs
                </button>
              </div>
            </ScrollElement>
          </div>

          {/* Right Content - Video & Stats Card */}
          <ScrollElement direction="right" delay={0.2} viewport={{ amount: 0.2, once: true }}>
            <div className="relative pb-12 lg:pb-0">
              {/* Video Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-sm border border-purple-200">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl"
                >
                  <source src="/media/hero-vid.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>


            </div>
          </ScrollElement>
        </div>
      </div>
    </section>
  );
}
