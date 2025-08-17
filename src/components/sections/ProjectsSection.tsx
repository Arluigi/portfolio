import { portfolioData } from '@/lib/portfolio-data';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectsSection = () => {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl">
        {/* Section Header */}
        <div className="section-heading fade-in-up">
          <span className="section-number">03.</span>
          <h2 className="text-heading-md">Some Things I've Built</h2>
          <div className="section-line" />
        </div>
        
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-12 gap-8 items-center fade-in-up ${
                index % 2 === 1 ? 'lg:text-right' : ''
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Project Image */}
              <div className={`lg:col-span-7 relative group ${
                index % 2 === 1 ? 'lg:col-start-6' : ''
              }`}>
                <div className="relative overflow-hidden rounded-lg bg-navy-medium aspect-video">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 bg-gradient-dark opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-primary font-mono text-lg">
                      {project.title}
                    </span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              {/* Project Details */}
              <div className={`lg:col-span-5 space-y-6 relative z-10 ${
                index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
              }`}>
                {/* Project Type */}
                <p className="text-primary font-mono text-sm">Featured Project</p>
                
                {/* Project Title */}
                <h3 className="text-heading-sm group">
                  {project.external ? (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-primary"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                
                {/* Project Description */}
                <div className="card-portfolio">
                  <p className="text-body">{project.description}</p>
                </div>
                
                {/* Technologies */}
                <div className={`flex flex-wrap gap-3 ${
                  index % 2 === 1 ? 'lg:justify-end' : ''
                }`}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className={`flex items-center space-x-4 ${
                  index % 2 === 1 ? 'lg:justify-end' : ''
                }`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
                      aria-label="Live Project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};