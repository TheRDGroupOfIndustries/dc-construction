import AboutSection from "@/components/about";
import BniBadge from "@/components/BniBadge";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import PortfolioSection from "@/components/portfolio";
import ServicesSection from "@/components/services";
import TalkButton from "@/components/Talkbutton";
import TestimonialsSection from "@/components/testimonial";
import WhyChooseUsSection from "@/components/whyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
   <Navbar/>
   <BniBadge/>
   {/* <TalkButton/> */}
   <HeroSection/>
   <AboutSection/>
   <ServicesSection/>
   <PortfolioSection/>
   <WhyChooseUsSection/>
   <TestimonialsSection/>
   <ContactSection/>
   <Footer/>
  </div>
  );
}
