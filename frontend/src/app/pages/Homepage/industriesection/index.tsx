"use client";
import Image from "next/image";

export default function IndustriesSection() {
  return (
    <section >
      <div>
        <div className="relative w-full  rounded-3xl overflow-hidden ">
          <Image
            src="/ERP/schoolerp.png"
            alt="EduPro School ERP"
            width={1400}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}