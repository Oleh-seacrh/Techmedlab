"use client";

import { motion } from "framer-motion";

const sections: Array<{
  title: string;
  desc: string;
  gradient: string;
  bgTint: string;
  brands: string[];
  image?: string;
  showPlaceholder?: boolean;
}> = [
  {
    title: "Radiology Equipment & Consumables",
    desc: "X-ray consumables and equipment from trusted manufacturers for diagnostic imaging.",
    gradient: "from-blue-500 to-cyan-500",
    bgTint: "bg-blue-500/5",
    brands: ["Fujifilm", "Agfa", "Carestream", "Konica Minolta", "Sony", "Canon", "Kodak"],
    image: "/radiology.png",
  },
  {
    title: "Lab Equipment & Consumables",
    desc: "General lab equipment, instrumentation, and reagents for research and diagnostics.",
    gradient: "from-emerald-500 to-teal-500",
    bgTint: "bg-emerald-500/5",
    brands: ["Thermo Fisher", "Merck", "Abbott", "Roche", "Siemens", "Beckman Coulter", "Eppendorf"],
    image: "/laboratory.png",
  },
  {
    title: "Nephrology",
    desc: "Dialysis equipment, dialyzers, and dry bicarbonate mixes for kidney treatment.",
    gradient: "from-amber-500 to-orange-500",
    bgTint: "bg-amber-500/5",
    brands: ["Fresenius", "Baxter", "Nipro", "B. Braun", "Toray"],
    image: "/nephrology.png",
  },
  {
    title: "Pharmacology",
    desc: "Trusted pharmacology brands and supplies for laboratories and medical facilities.",
    gradient: "from-purple-500 to-indigo-500",
    bgTint: "bg-purple-500/5",
    brands: [
      "Pfizer",
      "Johnson & Johnson",
      "AbbVie",
      "Merck & Co. (MSD)",
      "Novartis",
    ],
    image: "/pharmacology.png",
    showPlaceholder: false,
  },
] as const;

function SectionImage({
  gradient,
  alt,
  src,
  showPlaceholder = true,
}: {
  gradient: string;
  alt: string;
  src?: string;
  showPlaceholder?: boolean;
}) {
  return (
    <div className="relative aspect-[4/3] min-h-[320px] md:min-h-[420px] rounded-2xl overflow-hidden">
      {src ? (
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain"
          />
        </div>
      ) : showPlaceholder ? (
        <div className={`absolute inset-4 rounded-xl bg-gradient-to-br ${gradient}`} />
      ) : null}
    </div>
  );
}

export default function ProductCategories() {
  return (
    <section id="fields" className="py-24 md:py-32 bg-slate-50/80 scroll-mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-slate-900 mb-3 tracking-tight">
            Fields of Work
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From radiology to nephrology — a comprehensive selection of medical
            equipment and consumables for your facility.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {sections.map((section, i) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <SectionImage
                  gradient={section.gradient}
                  alt={section.title}
                  src={section.image}
                  showPlaceholder={section.showPlaceholder ?? true}
                />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className={`relative rounded-2xl ${section.bgTint} py-12 md:py-16 px-8 md:px-12 border border-slate-200/60 bg-white/70 backdrop-blur-[1px]`}>
                  <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b ${section.gradient}`} />
                  <div className="pl-7">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-5 tracking-tight">
                      {section.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] md:text-base leading-[1.65] mb-10">
                      {section.desc}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-4">
                      Brands we work with
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {section.brands.map((brand) => (
                        <li
                          key={brand}
                          className="px-3 py-1.5 rounded-md bg-white/90 text-slate-600 text-sm font-medium border border-slate-200/80 shadow-sm"
                        >
                          {brand}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
