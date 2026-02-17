import Image from "next/image";
import BgDecorations from "./BgDecorations";
import ScrollElement from "./ui/scroll-animation";

export default function ImpactSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Assets */}
      <BgDecorations
        items={[
          { asset: 2, className: "-right-10 -top-10 w-48 sm:w-64", color: "purple", opacity: 0.05, rotate: 20 },
          { asset: 3, className: "-left-24 bottom-10 w-72 sm:w-96", color: "purple", opacity: 0.04, rotate: -8 },
          { asset: 1, className: "right-1/4 bottom-0 w-40 sm:w-56", color: "purple", opacity: 0.03, rotate: 45, scale: 0.7 },
        ]}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Rounded Container */}
        <div
          className="relative rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] shadow-2xl border border-green-200/30 overflow-hidden"
          style={{ background: 'linear-gradient(90deg, #95ECB0, #F3F98A)' }}
        >
          {/* Animated Mesh Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-lime-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-20 p-8 sm:p-12 lg:p-20">
            {/* Section Heading */}
            <ScrollElement direction="up" delay={0} viewport={{ amount: 0.3, once: true }}>
              <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic text-orange-600">
                  Impact That
                  <br />
                  Speaks for Itself
                </h2>
                {/* Decorative Underline */}
                <div className="flex justify-center mt-4">
                  <Image
                    src="/assets/vector-line.svg"
                    alt=""
                    width={320}
                    height={12}
                    className="w-64 sm:w-80 h-auto text-orange-600"
                  />
                </div>
              </div>
            </ScrollElement>

            {/* Stats Grid with SVG Connectors */}
            <div className="relative max-w-6xl mx-auto mb-20 sm:mb-24 lg:mb-32">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0 gap-x-8 lg:gap-x-4">
                {/* Stat 1 - Top Left */}
                <ScrollElement direction="up" delay={0.1} viewport={{ amount: 0.3, once: true }}>
                  <div className="text-center space-y-3 relative">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-purple">
                      590<span className="text-brand-purple">+</span>
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-gray-900">
                      Students trained
                    </div>
                    {/* Connector to Stat 2 - Desktop only */}
                    <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2">
                      <Image
                        src="/assets/stats-left.svg"
                        alt=""
                        width={100}
                        height={80}
                        className="w-20 xl:w-24 h-auto"
                      />
                    </div>
                  </div>
                </ScrollElement>

                {/* Stat 2 - Bottom (mobile) / Top (desktop) */}
                <ScrollElement direction="up" delay={0.2} viewport={{ amount: 0.3, once: true }}>
                  <div className="text-center space-y-3 relative lg:pt-20">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-purple">
                      20<span className="text-brand-purple">+</span>
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-gray-900">
                      Schools partnered
                    </div>
                    {/* Connector to Stat 3 - Desktop only */}
                    <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2">
                      <Image
                        src="/assets/stats-right.svg"
                        alt=""
                        width={100}
                        height={80}
                        className="w-20 xl:w-24 h-auto"
                      />
                    </div>
                  </div>
                </ScrollElement>

                {/* Stat 3 - Top Right */}
                <ScrollElement direction="up" delay={0.3} viewport={{ amount: 0.3, once: true }}>
                  <div className="text-center space-y-3 relative">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-purple">
                      10<span className="text-brand-purple">+</span>
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-gray-900">
                      Colleges onboarded
                    </div>
                    {/* Connector to Stat 4 - Desktop only */}
                    <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2">
                      <Image
                        src="/assets/stats-left.svg"
                        alt=""
                        width={100}
                        height={80}
                        className="w-20 xl:w-24 h-auto"
                      />
                    </div>
                  </div>
                </ScrollElement>

                {/* Stat 4 - Bottom Right (mobile) / Top (desktop) */}
                <ScrollElement direction="up" delay={0.4} viewport={{ amount: 0.3, once: true }}>
                  <div className="text-center space-y-3 relative lg:pt-20">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-purple">
                      52<span className="text-brand-purple">+</span>
                    </div>
                    <div className="text-base sm:text-lg font-semibold text-gray-900">
                      AI Centres active
                    </div>
                  </div>
                </ScrollElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
