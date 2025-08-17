import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';
import { LeftNavigation } from './LeftNavigation';
import { RightSocials } from './RightSocials';
import { MobileNavigation } from './MobileNavigation';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px 0px -50px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Ambient background glow */}
      <div className="fixed inset-0 bg-gradient-glow pointer-events-none" />
      
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted">
        <div className="flex items-center justify-between px-6 py-4">
          <a href="#hero" className="text-heading-sm text-primary font-mono">
            AS
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />

      {/* Desktop Layout */}
      <div className="lg:flex lg:min-h-screen">
        {/* Left Navigation - Desktop Only */}
        <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-20 z-40">
          <LeftNavigation activeSection={activeSection} />
        </div>

        {/* Main Content */}
        <main className="lg:ml-20 lg:mr-20 flex-1 relative z-10">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* Right Socials - Desktop Only */}
        <div className="hidden lg:block fixed right-0 top-0 bottom-0 w-20 z-40">
          <RightSocials />
        </div>
      </div>
    </div>
  );
};