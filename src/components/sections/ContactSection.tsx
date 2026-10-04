import { Link } from 'react-router-dom';
import { portfolioData } from '@/lib/portfolio-data';

export const ContactSection = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="section-padding min-h-screen flex items-center justify-center">
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

        {/* Quiet link to the archived kid blog */}
        <p className="mt-16 text-sm font-mono text-muted-foreground fade-in-up" style={{ animationDelay: '0.4s' }}>
          Psst: I've been blogging since 2014.{' '}
          <Link to="/old" className="text-primary hover:underline">
            Read the old blog &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
};