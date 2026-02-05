"use client";

import { motion } from "framer-motion";

const regions = [
  { name: "Middle East", countries: "UAE, Saudi Arabia, Jordan, Kuwait" },
  { name: "Asia", countries: "India, Philippines, Vietnam, Malaysia" },
  { name: "Latin America", countries: "Mexico, Brazil, Argentina, Colombia" },
  { name: "Africa", countries: "Nigeria, Kenya, Ghana, Egypt, South Africa" },
];

export default function GlobalReach() {
  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_0.5px,transparent_0.5px),linear-gradient(to_bottom,#334155_0.5px,transparent_0.5px)] bg-[size:3rem_3rem] opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            We Ship Worldwide
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Shipping to Africa, Latin America, Middle East, and Asia — 
            safely and reliably.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-accent-500/50 transition-colors"
            >
              <h3 className="font-display text-lg font-semibold text-accent-400 mb-2">
                {region.name}
              </h3>
              <p className="text-slate-400 text-sm">{region.countries}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
