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
      <div className="flex flex-col items-center space-y-6">
        {portfolioData.navigation.map((item, index) => {
          const sectionId = item.href.substring(1); // Remove the #
          const isActive = activeSection === sectionId;

          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="group flex flex-col items-center"
              aria-label={`Navigate to ${item.name} section`}
            >
              {/* Section Number */}
              <span className={`font-mono text-xs mb-3 transition-colors duration-300 ${
                isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
              }`}>
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Vertical Line */}
              <div className="relative">
                <div className={`w-px h-12 transition-all duration-300 ${
                  isActive
                    ? 'bg-primary'
                    : 'bg-muted-foreground group-hover:bg-primary'
                }`} />

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                )}
              </div>

              {/* Section Name - Vertical Text.
                  writing-mode reserves real vertical space (unlike rotate, which
                  keeps the horizontal box in flow and overlaps neighbors).
                  rotate-180 makes it read bottom-to-top. */}
              <span className={`mt-3 text-xs font-medium tracking-wider uppercase transition-colors duration-300 [writing-mode:vertical-rl] rotate-180 ${
                isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
              }`}>
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};