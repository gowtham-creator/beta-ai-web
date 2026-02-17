"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BgDecorations from "@/components/BgDecorations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Centre Data
const featuredCentres = [
  {
    city: "Chennai",
    state: "Tamil Nadu",
    address: "No. 45, Anna Salai, Teynampet, Chennai - 600018",
    phone: "+91 44 2345 6789",
    students: 120,
    established: "2021",
    features: ["AI Research Lab", "Robotics Zone", "Innovation Hub"],
  },
  {
    city: "Bangalore",
    state: "Karnataka",
    address: "2nd Floor, Tech Park, Koramangala, Bangalore - 560034",
    phone: "+91 80 4567 8901",
    students: 95,
    established: "2022",
    features: ["Startup Incubator", "AI Lab", "Maker Space"],
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    address: "Plot 23, HITEC City, Madhapur, Hyderabad - 500081",
    phone: "+91 40 6789 0123",
    students: 85,
    established: "2022",
    features: ["Research Pod", "VR Lab", "Project Studio"],
  },
  {
    city: "Mumbai",
    state: "Maharashtra",
    address: "7th Floor, BKC Complex, Bandra Kurla, Mumbai - 400051",
    phone: "+91 22 7890 1234",
    students: 110,
    established: "2023",
    features: ["Corporate Hub", "AI Lab", "Conference Centre"],
  },
  {
    city: "Delhi NCR",
    state: "New Delhi",
    address: "A-Block, Cyber City, Gurugram - 122002",
    phone: "+91 11 8901 2345",
    students: 130,
    established: "2023",
    features: ["Multi-Purpose Lab", "Seminar Hall", "Innovation Zone"],
  },
  {
    city: "Pune",
    state: "Maharashtra",
    address: "5th Floor, IT Park, Hinjewadi, Pune - 411057",
    phone: "+91 20 9012 3456",
    students: 75,
    established: "2024",
    features: ["Automation Lab", "AI Studio", "Workshop Space"],
  },
];

const allCities = [
  "Chennai", "Bangalore", "Hyderabad", "Mumbai", "Delhi NCR", "Pune",
  "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Kochi",
  "Coimbatore", "Vizag", "Indore", "Bhopal", "Nagpur", "Surat",
  "Vadodara", "Mysore", "Mangalore", "Trivandrum", "Madurai", "Trichy",
];

const facilities = [
  {
    title: "AI Research Labs",
    description: "Fully equipped labs with high-performance computing systems for hands-on AI experimentation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Robotics Zone",
    description: "Dedicated spaces for building and programming robots with industry-standard equipment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "Innovation Hub",
    description: "Collaborative spaces where students work on real-world projects with industry mentors.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Seminar Halls",
    description: "Modern auditoriums for workshops, guest lectures, and certification ceremonies.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Resource Library",
    description: "Digital and physical resources including AI journals, research papers, and reference materials.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Student Lounge",
    description: "Comfortable spaces for students to relax, collaborate, and network with peers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function CentresPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All States");
  const heroRef = useRef<HTMLDivElement>(null);
  const centresRef = useRef<HTMLDivElement>(null);
  const facilitiesRef = useRef<HTMLDivElement>(null);

  const states = ["All States", "Tamil Nadu", "Karnataka", "Telangana", "Maharashtra", "New Delhi", "Kerala", "Gujarat", "Rajasthan"];

  const filteredCities = allCities.filter((city) =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll(".hero-animate"),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out" }
        );
      }

      // Centres cards animation
      if (centresRef.current) {
        gsap.fromTo(
          centresRef.current.querySelectorAll(".centre-card"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: centresRef.current, start: "top 75%" },
          }
        );
      }

      // Facilities animation
      if (facilitiesRef.current) {
        gsap.fromTo(
          facilitiesRef.current.querySelectorAll(".facility-card"),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: facilitiesRef.current, start: "top 75%" },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-brand-purple to-red-500">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-orange-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-red-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <Navbar />

        <div ref={heroRef} className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="hero-animate text-white/90 text-sm font-semibold tracking-wider uppercase mb-4 drop-shadow">
              52+ Centres Across India
            </p>
            <h1 className="hero-animate text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Find a Centre <span className="italic">Near You</span>
            </h1>
            <p className="hero-animate text-white/90 text-lg lg:text-xl mb-10 drop-shadow">
              Experience hands-on AI learning at our state-of-the-art facilities designed for the next generation of innovators.
            </p>

            {/* Search and Filter */}
            <div className="hero-animate flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/95 backdrop-blur-sm border border-white/30 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:bg-white focus:border-white shadow-lg transition-colors"
                />
              </div>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="px-4 py-4 rounded-xl bg-white/95 backdrop-blur-sm border border-white/30 text-gray-900 focus:outline-none focus:bg-white focus:border-white shadow-lg transition-colors cursor-pointer"
              >
                {states.map((state) => (
                  <option key={state} value={state} className="bg-white">
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* All Cities Grid */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">All Locations</h2>
          <div className="flex flex-wrap gap-3">
            {filteredCities.map((city) => (
              <button
                key={city}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-gray-600 text-sm hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all"
              >
                {city}
              </button>
            ))}
          </div>
          {filteredCities.length === 0 && (
            <p className="text-gray-400 text-center py-8">No centres found matching your search.</p>
          )}
        </div>
      </section>

      {/* Why Visit Our Centres */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
        <BgDecorations items={[
          { asset: 3, className: "absolute -left-20 top-10", color: "purple", opacity: 0.04, rotate: -12 },
          { asset: 2, className: "absolute -right-16 bottom-10", color: "coral", opacity: 0.03, rotate: 18 },
        ]} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4">
              Experience Excellence
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 italic">
              Why Visit Our Centres?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              More than just classrooms—immersive learning environments designed for innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hands-On Learning",
                desc: "Touch, build, and experiment with real AI hardware and software",
                icon: "🛠️",
                gradient: "from-orange-500 to-red-500",
              },
              {
                title: "Expert Mentors",
                desc: "Learn from industry professionals with real-world AI experience",
                icon: "👨‍🏫",
                gradient: "from-brand-purple to-orange-500",
              },
              {
                title: "Collaborative Spaces",
                desc: "Work with peers on exciting projects in modern environments",
                icon: "🤝",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                title: "Career Support",
                desc: "Get guidance on internships, certifications, and job placements",
                icon: "🚀",
                gradient: "from-red-500 to-pink-500",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>

                {/* Decorative gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Centres */}
      <section ref={centresRef} className="relative py-16 lg:py-24 overflow-hidden">
        <BgDecorations items={[
          { asset: 2, className: "absolute -left-28 top-1/4", color: "coral", opacity: 0.04, rotate: 16 },
        ]} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4">
              Major Hubs
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Featured Centres
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCentres.map((centre, index) => {
              const accentColors = [
                "from-orange-500 to-red-500",
                "from-brand-purple to-orange-500",
                "from-yellow-500 to-orange-500",
                "from-red-500 to-pink-500",
                "from-orange-600 to-red-600",
                "from-amber-500 to-orange-500"
              ];
              return (
                <div
                  key={index}
                  className="centre-card bg-white border border-slate-200 shadow-sm rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{centre.city}</h3>
                    <p className="text-gray-600 text-sm">{centre.state}</p>
                  </div>
                  <span className={`bg-gradient-to-r ${accentColors[index % 6]} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}>
                    Est. {centre.established}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{centre.students}+ students</span>
                  </div>
                </div>

                {/* Address */}
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{centre.address}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {centre.features.map((feature, fIndex) => (
                    <span key={fIndex} className="text-xs text-gray-500 bg-slate-100 px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Phone */}
                <a
                  href={`tel:${centre.phone}`}
                  className="flex items-center gap-2 text-brand-purple hover:text-brand-purple-dark transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm font-medium">{centre.phone}</span>
                </a>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section ref={facilitiesRef} className="relative py-16 lg:py-24 overflow-hidden">
        <BgDecorations items={[
          { asset: 1, className: "absolute -right-24 top-0", color: "purple", opacity: 0.03, rotate: -14, flipX: true },
        ]} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-brand-purple text-sm font-semibold tracking-wider uppercase mb-4">
              World-Class Infrastructure
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              What You&apos;ll Find at Our Centres
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const iconGradients = [
                "from-orange-500 to-red-500",
                "from-brand-purple to-pink-500",
                "from-yellow-500 to-orange-500",
                "from-red-500 to-pink-500",
                "from-amber-500 to-orange-600",
                "from-orange-600 to-red-600"
              ];
              return (
                <div
                  key={index}
                  className="facility-card bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${iconGradients[index % 6]} flex items-center justify-center text-white mb-4 shadow-md`}>
                    {facility.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #95ECB0, #F3F98A)' }}
      >
        {/* Animated gradient mesh */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-green-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-lime-300 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            Can&apos;t Find a Centre <span className="italic">Near You?</span>
          </h2>
          <p className="text-gray-800 text-lg mb-10 drop-shadow-sm">
            We&apos;re expanding rapidly. Register your interest and we&apos;ll notify you when we launch in your city.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-purple text-white font-semibold rounded-full hover:bg-brand-purple-dark transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Enquire Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
