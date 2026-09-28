import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AboutTeaser from "@/components/AboutTeaser";
import ServicesGrid from "@/components/ServicesGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import Industries from "@/components/Industries";
import WhySolved from "@/components/WhySolved";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Clients />
      <AboutTeaser />
      <ServicesGrid />
      <FeaturedProjects />
      <Industries />
      <WhySolved />
      <TechStack />
      <Process />
      <Testimonials />
    </div>
  );
}