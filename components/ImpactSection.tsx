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

          <div className="relative z-20 p-6 sm:p-10 lg:p-14">
            {/* Section Heading */}
            <ScrollElement direction="up" delay={0} viewport={{ amount: 0.3, once: true }}>
              <div className="text-center mb-10 sm:mb-12 lg:mb-14">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 italic text-orange-600">
                  Transforming
                  <br />
                  AI Education
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

            {/* Points Grid */}
            <div className="relative max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    num: "01",
                    text: "Industry-Ready Curriculum",
                    accent: "#7C3AED",
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2M12 20l-9-5" />
                      </svg>
                    ),
                    delay: 0.05,
                  },
                  {
                    num: "02",
                    text: "Hands-On AI Learning Experience",
                    accent: "#0EA5E9",
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ),
                    delay: 0.1,
                  },
                  {
                    num: "03",
                    text: "Built for Institutions to be AI Ready.",
                    accent: "#059669",
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                    delay: 0.15,
                  },
                  {
                    num: "04",
                    text: "Scalable AI Programs",
                    accent: "#EA580C",
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    ),
                    delay: 0.2,
                  },
                ].map((item) => (
                  <ScrollElement key={item.num} direction="up" delay={item.delay} viewport={{ amount: 0.2, once: true }}>
                    <div className="group relative overflow-hidden rounded-3xl bg-white/50 backdrop-blur-md border border-white/70 p-6 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" style={{ background: item.accent }} />

                      {/* Ghost number */}
                      <span className="absolute -right-3 -bottom-4 text-[5rem] font-black leading-none select-none pointer-events-none" style={{ color: `${item.accent}12` }}>
                        {item.num}
                      </span>

                      {/* Icon badge */}
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300" style={{ background: item.accent }}>
                        {item.icon}
                      </div>

                      {/* Text */}
                      <p className="text-xl sm:text-2xl font-black text-gray-900 leading-tight relative z-10">
                        {item.text}
                      </p>
                    </div>
                  </ScrollElement>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
