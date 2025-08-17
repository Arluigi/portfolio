import { portfolioData } from '@/lib/portfolio-data';

interface LeftNavigationProps {
  activeSection: string;
}

export const LeftNavigation = ({ activeSection }: LeftNavigationProps) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex flex-col items-center justify-center h-full">
      <div className="space-y-8">
        {portfolioData.navigation.map((item, index) => {
          const sectionId = item.href.substring(1); // Remove the #
          const isActive = activeSection === sectionId;
          
          return (
            <div key={item.name} className="flex flex-col items-center">
              {/* Section Number */}
              <span className={`font-mono text-xs mb-2 transition-colors duration-300 ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {String(index + 1).padStart(2, '0')}
              </span>
              
              {/* Navigation Link */}
              <button
                onClick={() => scrollToSection(item.href)}
                className="group relative"
                aria-label={`Navigate to ${item.name} section`}
              >
                {/* Vertical Line */}
                <div className={`w-px h-16 transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary' 
                    : 'bg-muted-foreground group-hover:bg-primary'
                }`} />
                
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                )}
              </button>
              
              {/* Section Name - Vertical Text */}
              <div className="mt-4 -rotate-90 origin-center">
                <span className={`text-xs font-medium tracking-wider uppercase transition-colors duration-300 whitespace-nowrap ${
                  isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                }`}>
                  {item.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};