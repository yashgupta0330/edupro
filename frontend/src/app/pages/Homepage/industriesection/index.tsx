"use client";
import Image from "next/image";

export default function IndustriesSection() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div>
        <div className="relative w-full  rounded-3xl overflow-hidden shadow-2xl border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <Image
            src="/ERP/schoolerp.png"
            alt="EduPro School ERP"
            width={1400}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}