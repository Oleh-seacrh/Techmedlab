import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Techmed Lab | Quality Medical Chemicals & Supplies",
  description:
    "Trusted chemicals trading for medical and laboratory use. Premium brands, transparent deals, global delivery. Fujifilm, Agfa, Carestream & more.",
  keywords: ["medical chemicals", "laboratory supplies", "radiology consumables", "Fujifilm", "Agfa", "Carestream"],
  openGraph: {
    title: "Techmed Lab | Quality Medical Chemicals & Supplies",
    description: "Trusted chemicals and consumables for labs and medical facilities. Premium brands. Transparent deals. Global reach.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Techmed Lab Chemicals Trading",
              description: "Quality medical supplies and chemicals for labs and medical facilities. Premium brands, transparent deals, global reach.",
              url: "https://techmedlab.com",
              areaServed: ["Africa", "Latin America", "Middle East", "Asia"],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#contact"
          className="absolute -left-full top-4 z-[100] px-4 py-2 bg-primary-600 text-white rounded-lg focus:left-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
        >
          Skip to contact
        </a>
        {children}
      </body>
    </html>
  );
}
