"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="inline-flex items-center" aria-label="Techmed Lab home">
          <img
            src="/Logo.png"
            alt="Techmed Lab"
            className="h-14 w-auto object-contain -my-0.5"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <a href="#fields" className="text-slate-600 hover:text-primary-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">
            Fields of Work
          </a>
          <a href="#brands" className="text-slate-600 hover:text-primary-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">
            Brands
          </a>
          <a href="#contact" className="text-slate-600 hover:text-primary-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">
            Contact
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Request Quote
          </a>
        </nav>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-4"
        >
          <a href="#fields" className="font-medium" onClick={() => setOpen(false)}>Fields of Work</a>
          <a href="#brands" className="font-medium" onClick={() => setOpen(false)}>Brands</a>
          <a href="#contact" className="font-medium" onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact" className="font-medium text-primary-600" onClick={() => setOpen(false)}>Request Quote</a>
        </motion.nav>
      )}
    </header>
  );
}
