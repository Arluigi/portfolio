import { portfolioData } from '@/lib/portfolio-data';
import { X } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileNavigation = ({ isOpen, onClose, activeSection }: MobileNavigationProps) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-lg"
        onClick={onClose}
      />
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors z-10"
        aria-label="Close menu"
      >
        <X size={24} />
      </button>
      
      {/* Menu Content */}
      <div className="relative h-full flex flex-col items-center justify-center">
        <nav className="space-y-8 text-center">
          {portfolioData.navigation.map((item, index) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <div key={item.name} className="text-center">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="group flex flex-col items-center space-y-2"
                >
                  <span className="font-mono text-primary text-sm">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span className={`text-2xl font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-foreground group-hover:text-primary'
                  }`}>
                    {item.name}
                  </span>
                </button>
              </div>
            );
          })}
        </nav>
        
        {/* Resume Button */}
        <div className="mt-12 text-center">
          <a
            href={portfolioData.hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={onClose}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};