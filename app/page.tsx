import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Faqs from "@/components/Faqs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Faqs />
    </>
  );
}