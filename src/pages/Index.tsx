import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PortfolioLayout } from '@/components/PortfolioLayout';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  useScrollAnimation();

  return (
    <PortfolioLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </PortfolioLayout>
  );
};

export default Index;
