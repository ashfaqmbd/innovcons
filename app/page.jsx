import react from "react";
import Services from "@/components/Services";
import Whyus from "@/components/Whyus";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Faq from "@/components/Faq";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div id="services">
        <Services />
      </div>
      <Whyus />
      <div id="about">
         <About />
      </div>
     
      <Philosophy />
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </div>
  );
}
