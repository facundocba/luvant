import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar locale="en" />
      <main id="main-content">
        <Hero locale="en" />
        <Products locale="en" />
        <Features locale="en" />
        <HowItWorks locale="en" />
        <CTA locale="en" />
      </main>
      <Footer locale="en" />
    </>
  );
}
