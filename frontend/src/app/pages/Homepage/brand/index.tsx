"use client";
import Image from "next/image";

export default function BrandPage() {
  const brands = [
    { name: "USHA", logo: "/brand/usha.png" },
    { name: "Sujata", logo: "/brand/sujata.png" },
    { name: "Sharp", logo: "/brand/sharp.png" },
    { name: "Fujita", logo: "/brand/fujita.png" },
    { name: "Faber", logo: "/brand/faber.png" },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div >
        {/* Heading */}
        <p className="text-center text-[#535862] font-medium text-[15px] md:text-base mb-12">
          Trusted by 500+ Institutions Across India
        </p>

        {/* Brand Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 md:gap-x-12 lg:gap-x-16">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={160}
                height={60}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}