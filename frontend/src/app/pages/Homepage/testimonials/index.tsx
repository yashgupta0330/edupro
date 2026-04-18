import { getStrapiMedia, getStrapiURL } from "@/lib/strapi-helper";
import Image from "next/image";
import Link from "next/link";


async function getTestimonials() {
  const url = getStrapiURL('/testimonials?populate=*&sort[0]=id:asc');
  
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    return [];
  }
}

export default async function TestimonialsSection() {
  const strapiTestimonials = await getTestimonials();

  // Map Strapi data to the local format and FILTER out featured cards for now
  const homepageTestimonials = strapiTestimonials
    .map((item: any) => {
      const attrs = item.attributes || item;
      return {
        id: item.id,
        type: attrs.type || "standard",
        logo: getStrapiMedia(attrs.logo?.url || attrs.logo?.data?.attributes?.url),
        logoText: attrs.logoText,
        bgImage: getStrapiMedia(attrs.bgImage?.url || attrs.bgImage?.data?.attributes?.url),
        content: attrs.content,
        authorName: attrs.authorName,
        authorRole: attrs.authorRole,
        authorImage: getStrapiMedia(attrs.authorImage?.url || attrs.authorImage?.data?.attributes?.url),
        stats: attrs.stats || [],
        cta: attrs.storyLink ? "View customer story ->" : null,
        storyLink: attrs.storyLink || "/"
      };
    })
    .filter((card: any) => card.type === "standard"); // Remove featured card as requested

  if (homepageTestimonials.length === 0) return null;

  return (
    <section className="py-10 md:py-14">
      <div className="container-fluid">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="heading-2">What Our Clients Say About Us</h2>
            <p className="sub-description mt-4 mx-auto max-w-3xl text-sm md:text-base">
              Hear directly from customers who have improved service efficiency and achieved
              measurable business outcomes with ServitiumCRM.
            </p>
          </div>

          <div className="grid justify-center gap-6 md:grid-cols-2 xl:grid-cols-2">
            {homepageTestimonials.map((card: any) => (
              <article
                key={card.id}
                className="flex h-[450px] w-full max-w-[500px] flex-col rounded-3xl bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-gray-50"
              >
                <div className="min-h-[48px] pt-2">
                  {card.logo ? (
                    <Image
                      src={card.logo}
                      alt={card.authorName || "Company Logo"}
                      width={116}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  ) : (
                    <p className="text-2xl leading-none font-bold text-[#0EA5E9]">{card.logoText}</p>
                  )}
                </div>

                {/* Scrollable Content Container */}
                <div className="mt-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <p className="text-sm md:text-base leading-[1.6] text-[#5F6577] whitespace-pre-line">
                    {card.content}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-4 pt-4 border-t border-gray-100">
                  {card.authorImage && (
                    <Image
                      src={card.authorImage}
                      alt={card.authorName}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover shadow-sm"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="text-base font-bold text-[#18191D] truncate">
                      {card.authorName}
                    </p>
                    <p className="text-xs md:text-sm leading-tight text-[#5F6577] truncate">
                      {card.authorRole}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}