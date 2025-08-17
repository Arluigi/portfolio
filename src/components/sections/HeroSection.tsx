import { portfolioData } from '@/lib/portfolio-data';

export const HeroSection = () => {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="section-padding min-h-screen flex items-center pt-24 lg:pt-16 px-8 sm:px-6">
      <div className="max-w-4xl">
        {/* Greeting */}
        <p className="text-primary font-mono text-base md:text-lg mb-4 fade-in-up">
          {hero.greeting}
        </p>
        
        {/* Name */}
        <h1 className="text-heading-xl mb-4 fade-in-up" style={{ animationDelay: '0.1s' }}>
          {hero.name}
        </h1>
        
        {/* Tagline */}
        <h2 className="text-heading-lg text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
          {hero.tagline}
        </h2>
        
        {/* Description */}
        <p className="text-body-lg max-w-2xl mb-12 fade-in-up" style={{ animationDelay: '0.3s' }}>
          {hero.description}
        </p>
        
        {/* CTA Button */}
        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#contact"
            className="btn-primary glow-on-hover"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};