"use client";

import { motion } from "framer-motion";

const brands = [
  "Fujifilm",
  "Agfa",
  "Carestream",
  "Konica Minolta",
  "Sony",
  "Siemens",
  "GE Healthcare",
  "Philips",
  "Canon",
  "Kodak",
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 md:py-32 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Brands We Supply
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Authentic equipment and consumables from globally trusted manufacturers. 
            Direct supply, zero counterfeit risk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 items-center"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-500 font-semibold text-lg hover:text-primary-600 hover:border-primary-200 hover:shadow-md transition-all duration-300"
            >
              {brand}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 mt-12 text-sm"
        >
          + more trusted brands
        </motion.p>
      </div>
    </section>
  );
}
