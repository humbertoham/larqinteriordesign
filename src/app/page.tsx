import AboutSnapshot from "@/components/aboutsnap";
import CTA from "@/components/calltoaction";
import Hero from "@/components/hero";
import PortfolioTeaser from "@/components/portfoliot";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Hero/>
    <AboutSnapshot/>
    <PortfolioTeaser/>
    <Testimonials/>
    <CTA/>
   </>
  );
}
