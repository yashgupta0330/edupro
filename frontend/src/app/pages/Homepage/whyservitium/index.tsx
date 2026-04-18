"use client";
import Image from "next/image";

export default function WhyServitium() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#D5F5F6] bg-[#E1F9FA] text-[#26C1C9] text-sm font-semibold mb-4 shadow-sm">
              Metric
            </span>
            <h2 className="heading-2 mb-6 text-left ">
              Trusted by Institutions. Proven by Results. 
              
            </h2>
            <p className="sub-description text-left max-w-xl text-[#535862]">
              We deliver real impact with reliable performance, scalable 
              systems and consistent results for modern educational 
              institutions.
            </p>
          </div>

          {/* Right Content - The Metric Grid Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/metric/right.png"
              alt="Metrics showing years of excellence, uptime guarantee, trusted institutions, and core modules"
              width={800}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}