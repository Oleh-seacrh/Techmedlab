"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="h-20 overflow-hidden mb-1">
              <img
                src="/Logo.png"
                alt="Techmed Lab"
                className="h-28 w-auto object-contain object-left"
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Quality medical chemicals and supplies for laboratories and medical facilities.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              <span className="font-semibold">Address:</span>
              <br />
              IFZA Properties DSO-IFZA, Building A1
              <br />
              Dubai Digital Park, Dubai Silicon Oasis
              <br />
              Sheikh Zayed Street
              <br />
              Dubai, UAE
              <br />
              <br />
              <span className="font-semibold">Phone:</span>{" "}
              <a
                className="text-primary-700 hover:text-primary-800 transition-colors"
                href="tel:+971588661973"
              >
                +971 588 66 1973
              </a>
              <br />
              <span className="font-semibold">Email:</span>{" "}
              <a
                className="text-primary-700 hover:text-primary-800 transition-colors"
                href="mailto:info@techmedlab.com"
              >
                info@techmedlab.com
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#fields"
                  className="text-slate-600 hover:text-primary-600 transition-colors"
                >
                  Fields of Work
                </a>
              </li>
              <li>
                <a
                  href="#brands"
                  className="text-slate-600 hover:text-primary-600 transition-colors"
                >
                  Brands
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-600 hover:text-primary-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200/70 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Techmed Lab Chemicals Trading — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
