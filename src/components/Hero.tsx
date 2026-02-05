"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh grain">
      {/* Lab background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/lab-background.png)" }}
      />
      <div className="absolute inset-0 bg-white/70" />
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b8_0.5px,transparent_0.5px),linear-gradient(to_bottom,#94a3b8_0.5px,transparent_0.5px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent-600 font-medium tracking-widest uppercase text-sm mb-6"
        >
          Chemicals Trading
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]"
        >
          Quality Medical Supplies{" "}
          <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            Delivered
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-800 font-medium max-w-2xl mx-auto mb-12 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
        >
          Trusted chemicals and consumables for labs and medical facilities. 
          Premium brands. Transparent deals. Global reach.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
