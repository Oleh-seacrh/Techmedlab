import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import ProductCategories from "@/components/ProductCategories";
import Brands from "@/components/Brands";
import GlobalReach from "@/components/GlobalReach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <ProductCategories />
        <Brands />
        <GlobalReach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
