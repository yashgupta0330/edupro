"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HeroPage() {
  const router = useRouter();

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-20 pb-12 px-4 overflow-hidden">
      {/* Background/Lines Image */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "url('/hero/background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#26C1C9] bg-white text-[#26C1C9] text-sm font-medium shadow-sm">
            Run Your Institution on Autopilot
          </span>
        </div>

        {/* Headline */}
        <h1 className="heading-1 mb-5 max-w-4xl mx-auto leading-tight">
          Run Your School Smarter with an <br />
          <span className="text-[#26C1C9]">AI-Powered All-in-One</span> Platform
        </h1>

        {/* Description */}
        <p className="sub-description max-w-[70%] mx-auto mb-5 text-[#535862]">
          All-in-one education ERP designed to simplify admissions, academics, and administration. 
          Manage everything from a single platform with real-time insights and automation.
        </p>

        {/* Email Input & CTA */}
        <div className="w-full max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-0 mb-8 bg-white border border-[#E4E7EC] rounded-full p-2 shadow-sm focus-within:ring-2 focus-within:ring-[#26C1C9]/20 transition-all">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="w-full px-6 py-3 rounded-full text-[#18191D] placeholder:text-[#98A2B3] bg-transparent focus:outline-none"
          />
          <button 
            onClick={() => router.push("/contact-us")}
            className="w-full sm:w-auto bg-[#011857] text-white pl-10 pr-1.5 py-1.5 rounded-full font-bold flex items-center justify-center gap-6 hover:bg-[#011857e6] transition-all whitespace-nowrap"
          >
            Request a Demo 
            <Image 
              src="/hero/arrow.svg" 
              alt="arrow" 
              width={42} 
              height={42} 
              className="shrink-0"
            />
          </button>
        </div>

        {/* Hero Banner Image */}
        <div className="w-full relative max-w-6xl mx-auto">
          <div className="relative rounded-2xl p-1 ">
            <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(38,193,201,0.15)] ">
              <Image
                src="/hero/banner.png"
                alt="EduPro Student Dashboard"
                width={1200}
                height={750}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
