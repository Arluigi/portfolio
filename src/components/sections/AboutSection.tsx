import { portfolioData } from '@/lib/portfolio-data';
import { Check } from 'lucide-react';

export const AboutSection = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl">
        {/* Section Header */}
        <div className="section-heading fade-in-up">
          <span className="section-number">01.</span>
          <h2 className="text-heading-md">About Me</h2>
          <div className="section-line" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* About Text */}
          <div className="lg:col-span-2 space-y-6">
            {about.description.map((paragraph, index) => {
              // Add hyperlinks to specific terms
              const linkedParagraph = paragraph
                .replace(/CodifyKids/g, '<a href="https://github.com/aryansachdev" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-glow transition-colors">CodifyKids</a>')
                .replace(/Cannabis Research Institute/g, '<a href="https://illinois.edu/" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-glow transition-colors">Cannabis Research Institute</a>')
                .replace(/NCSA's Center for AI Innovation/g, '<a href="https://www.ncsa.illinois.edu/" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-glow transition-colors">NCSA\'s Center for AI Innovation</a>')
                .replace(/ClearAF/g, '<a href="#projects" class="text-primary hover:text-primary-glow transition-colors">ClearAF</a>')
                .replace(/terpene synthase enzymes/g, '<a href="https://en.wikipedia.org/wiki/Terpene_synthase" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-glow transition-colors">terpene synthase enzymes</a>');
              
              return (
                <p 
                  key={index} 
                  className="text-body fade-in-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  dangerouslySetInnerHTML={{ __html: linkedParagraph }}
                />
              );
            })}
          </div>
          
          {/* Technologies */}
          <div className="fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-heading-sm mb-6">Technologies I work with:</h3>
            <div className="space-y-6">
              {/* Tech Skills */}
              <div>
                <h4 className="text-primary font-mono text-sm mb-3">Tech & AI</h4>
                <div className="space-y-2">
                  {about.technologies.tech.map((tech, index) => (
                    <div 
                      key={tech}
                      className="flex items-center space-x-3 group"
                      style={{ animationDelay: `${0.1 * (index + 6)}s` }}
                    >
                      <Check 
                        size={16} 
                        className="text-primary group-hover:text-primary-glow transition-colors duration-300" 
                      />
                      <span className="text-body-sm font-medium group-hover:text-primary transition-colors duration-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bio Skills */}
              <div>
                <h4 className="text-primary font-mono text-sm mb-3">Biology & Research</h4>
                <div className="space-y-2">
                  {about.technologies.bio.map((tech, index) => (
                    <div 
                      key={tech}
                      className="flex items-center space-x-3 group"
                      style={{ animationDelay: `${0.1 * (index + 12)}s` }}
                    >
                      <Check 
                        size={16} 
                        className="text-primary group-hover:text-primary-glow transition-colors duration-300" 
                      />
                      <span className="text-body-sm font-medium group-hover:text-primary transition-colors duration-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};