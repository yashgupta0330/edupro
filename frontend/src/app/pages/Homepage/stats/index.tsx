"use client";

import Image from "next/image";
import { PiInfinity } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineHeart } from "react-icons/hi2";
import { IoPeopleOutline, IoLinkOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import "./stat.css";

const features = [
  {
    title: "Student Lifecycle",
    description: "Plan, manage and track academic activities with a centralized and structured learning system.",
    image: "/feature/Lattice UI of Performance.png",
    icon: <PiInfinity className="text-gray-700" size={26} />,
    span: "lg:col-span-3",
  },
  {
    title: "Academic Management",
    description: "Easily plan, organize and manage your curriculum, classes and daily activities from one place with a simple and structured system.",
    image: "/feature/Lattice UI of Goals.png",
    icon: <TbTargetArrow className="text-gray-700" size={26} />,
    span: "lg:col-span-3",
  },
  {
    title: "Fees Management",
    description: "Plan, manage and track examinations efficiently with a centralized and structured system.",
    image: "/feature/Lattice UI of Engagement.png",
    icon: <HiOutlineHeart className="text-gray-700" size={26} />,
    span: "lg:col-span-2",
  },
  {
    title: "Parent Engagement",
    description: "Stay connected with real-time updates, effortless communication and clear visibility into progress.",
    image: "/feature/Lattice UI of Grow.png",
    icon: <IoPeopleOutline className="text-gray-700" size={26} />,
    span: "lg:col-span-2",
  },
  {
    title: "Security Management",
    description: "Manage, track and control financial operations efficiently with a centralized and structured system.",
    image: "/feature/Lattice UI of Compensation.png",
    icon: <IoLinkOutline className="text-gray-700" size={26} />,
    span: "lg:col-span-2",
  },
];

const FeatureCard = ({ title, description, image, icon, span }: any) => {
  return (
    <div className={`col-span-1 ${span} bg-white rounded-[2rem] border border-gray-100 p-6 lg:p-10 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group feature-card-hover`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="shrink-0 scale-110">
            {icon}
          </div>
          <h3 className="text-xl lg:text-[1.75rem] font-bold text-[#111827] leading-tight transition-colors duration-300 group-hover:text-[#003B73]">{title}</h3>
        </div>
        <div className="shrink-0 w-10 h-10 rounded-full bg-[#001D3D] flex items-center justify-center text-white transition-all duration-500 group-hover:bg-[#0D9488] group-hover:shadow-[0_0_20px_rgba(13,148,136,0.3)]">
          <FaArrowRight size={16} className="transition-transform duration-500 group-hover:rotate-[-45deg]" />
        </div>
      </div>
      <p className="text-gray-500 text-[1.05rem] leading-relaxed mb-10 max-w-[95%]">
        {description}
      </p>
      <div className="mt-auto relative w-full aspect-[16/10] bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[inset_0_2px_10px_rgba(0,0,0,0.03)]">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-contain object-center transition-transform duration-1000 ease-out feature-img p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="features-section ">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 space-y-5">
          <span className="inline-flex items-center px-6 py-2 rounded-full bg-[#E6F7F9] text-[#0D9488] text-sm font-bold tracking-[0.05em] uppercase border border-[#0D9488]/10 shadow-sm transition-all duration-300 hover:scale-105">
            Best ERP Features
          </span>
          <h2 className="heading-2">
            Smart Features, Better Outcomes.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#001D3D] text-white px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-500 hover:bg-[#003B73] hover:shadow-[0_15px_30px_rgba(0,29,61,0.25)] hover:scale-105 active:scale-95 custom-button-shimmer">
            View More <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
