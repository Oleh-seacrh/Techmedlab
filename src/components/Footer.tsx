"use client";

export default function Footer() {
  return (
    <footer className="py-8 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Techmed Lab Chemicals Trading — All Rights Reserved
        </p>
        <a href="#contact" className="text-slate-600 hover:text-primary-600 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded">
          Contact
        </a>
      </div>
    </footer>
  );
}
