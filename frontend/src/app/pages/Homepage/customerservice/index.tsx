"use client";

import Image from "next/image";

const roles = [
  {
    title: "Students",
    description:
      "Elevate learning with access to study materials, effortless progress tracking and constant academic engagement.",
    image: "/management/students.png",
    // Cyan/Blue theme
    gradient: "linear-gradient(135deg, #A5F3FC 0%, #06B6D4 100%)",
    badgeBg: "bg-cyan-50",
    badgeText: "text-cyan-700",
  },
  {
    title: "Teachers",
    description:
      "Simplify classroom workflows with powerful digital tools, seamless content access and smarter teaching support.",
    image: "/management/teachers.png",
    // Yellow/Orange theme
    gradient: "linear-gradient(135deg, #FEF3C7 0%, #F59E0B 100%)",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-700",
  },
  {
    title: "Parents",
    description:
      "Stay informed with real-time updates and notifications, track progress and stay connected with your child.",
    image: "/management/parents.png",
    // Green/Yellow theme
    gradient: "linear-gradient(135deg, #ECFCCB 0%, #84CC16 100%)",
    badgeBg: "bg-lime-50",
    badgeText: "text-lime-700",
  },
  {
    title: "Management",
    description:
      "Streamline operations, manage resources and improve overall efficiency with a centralized platform.",
    image: "/management/management.png",
    // Purple/Pink theme
    gradient: "linear-gradient(135deg, #F5F3FF 0%, #8B5CF6 100%)",
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-700",
  },
];

export default function RoleBasedDivision() {
  return (
    <section>
      <div className="container-fluid">
        <div className="mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-cyan-100 bg-cyan-50/50 mb-2">
            <span className="text-[12px] md:text-sm font-semibold text-gray-600">
              Role based division
            </span>
          </div>

          {/* Main Title */}
          <h2 className="heading-2 mb-12">
            Smarter School Management for Better Outcomes
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mt-12">
            {roles.map((role, index) => (
              <div key={role.title} className="flex flex-col items-center">
                {/* Original Image Container with size constraints */}
                <div className="relative mb-6 h-[220px] md:h-[260px] w-full max-w-[200px] md:max-w-[240px] flex items-center justify-center">
                  <Image
                    src={role.image}
                    alt={role.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 200px, 240px"
                    priority={index < 2}
                  />
                </div>

                {/* Text Content */}
                <div className="text-center px-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[#18191D] mb-4">
                    {role.title}
                  </h3>
                  <p className="text-[15px] md:text-base text-gray-500 leading-relaxed max-w-[280px] mx-auto">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

