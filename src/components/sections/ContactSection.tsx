import { portfolioData } from '@/lib/portfolio-data';

export const ContactSection = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section Number */}
        <p className="text-primary font-mono text-lg mb-4 fade-in-up">
          04. {contact.title}
        </p>
        
        {/* Main Heading */}
        <h2 className="text-heading-lg mb-8 fade-in-up" style={{ animationDelay: '0.1s' }}>
          {contact.heading}
        </h2>
        
        {/* Description */}
        <p className="text-body-lg mb-12 fade-in-up" style={{ animationDelay: '0.2s' }}>
          {contact.description}
        </p>
        
        {/* Contact Button */}
        <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href={`mailto:${portfolioData.email}`}
            className="btn-primary glow-on-hover text-lg px-12 py-6"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};