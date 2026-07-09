import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProjectsPreview from "../components/home/ProjectsPreview";
import AboutPreview from "../components/home/AboutPreview";
import CTASection from "../components/home/CTASection";
import BrainBackground from "../components/layout/BrainBg";

export default function Home() {
  return (
    <>
      {/* Introduction banner area */}
      <HeroSection />
      
      {/* What the DSAI club brings to the table */}
      {/* <section className="relative min-h-screen overflow-hidden pt-24 pb-16"> */}
      {/* <BrainBackground/> */}
      <FeaturesSection />
      
      {/* Brief showcase grid of top projects */}
      <ProjectsPreview />
      {/* </section> */}
      {/* Contextual description preview section */}
      <AboutPreview />
      
      {/* Membership/Join-us call to action block */}
      <CTASection />
    </>
  );
}