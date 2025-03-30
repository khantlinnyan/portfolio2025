import { AboutSection } from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import HonorSection from "@/components/sections/honor-section";
import SkillSection from "@/components/sections/skill-section";
import WorkSection from "@/components/sections/work-section";
import { ScrollProvider } from "@/context/scroll-context-provider";

const page = () => {
  return (
    <>
      <ScrollProvider>
        <HeroSection />
      </ScrollProvider>
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <SkillSection />
      <HonorSection />
    </>
  );
};

export default page;
