import { useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { ExternalLink, Award } from 'lucide-react';

export const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl">
        {/* Section Header */}
        <div className="section-heading fade-in-up">
          <span className="section-number">02.</span>
          <h2 className="text-heading-md">Where I've Worked</h2>
          <div className="section-line" />
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-1">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible scrollbar-hide lg:mx-0 lg:px-0">
              {experience.map((job, index) => (
                <div key={job.company} className="flex-shrink-0 flex lg:flex-col">
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`flex-shrink-0 px-3 py-2 lg:px-4 lg:py-3 text-left border-b-2 lg:border-b-0 lg:border-l-2 transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                      activeTab === index
                        ? 'border-primary text-primary bg-primary/5'
                        : 'border-muted text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    <span className="text-xs lg:text-sm font-medium">{job.company}</span>
                  </button>

                  {/* Sub-tab: nested award / scholarship under this role */}
                  {job.highlight && (
                    <button
                      onClick={() => setActiveTab(index)}
                      className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 lg:pl-7 lg:pr-4 lg:py-2 text-left border-b-2 lg:border-b-0 lg:border-l-2 transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                        activeTab === index
                          ? 'border-primary/60 text-primary bg-primary/5'
                          : 'border-muted text-muted-foreground/80 hover:border-primary/60 hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      <Award size={12} className="flex-shrink-0" />
                      <span className="text-xs font-medium">Villa Cisse Scholar</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="lg:col-span-3 overflow-hidden">
            {experience.map((job, index) => (
              <div
                key={job.company}
                className={`transition-all duration-500 ${
                  activeTab === index 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-4 absolute pointer-events-none'
                }`}
              >
                {activeTab === index && (
                  <div className="space-y-4 px-2 sm:px-0">
                    {/* Job Title & Company */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-1 break-words leading-tight">
                        <span className="block sm:inline">{job.position}</span>
                        {job.url && (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-1 sm:mt-0 sm:ml-2 text-primary hover:text-primary-glow transition-colors"
                          >
                            @ {job.company}
                            <ExternalLink size={14} className="ml-1 flex-shrink-0" />
                          </a>
                        )}
                        {!job.url && (
                          <span className="text-primary block sm:inline"> @ {job.company}</span>
                        )}
                      </h3>
                      <p className="text-sm break-words">{job.duration}</p>
                      <p className="text-sm text-muted-foreground break-words">{job.location}</p>
                    </div>
                    
                    {/* Job Description */}
                    <ul className="space-y-2">
                      {job.description.map((item, descIndex) => (
                        <li key={descIndex} className="flex items-start space-x-2">
                          <span className="text-primary mt-1 text-xs flex-shrink-0">▹</span>
                          <span className="text-sm leading-relaxed break-words" dangerouslySetInnerHTML={{ 
                            __html: item.replace(
                              /uiuc\.chat/g, 
                              '<a href="https://uiuc.chat" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-glow transition-colors break-all">uiuc.chat</a>'
                            )
                          }} />
                        </li>
                      ))}
                    </ul>
                    
                    {/* Highlighted Award / Scholarship */}
                    {job.highlight && (
                      <div className="relative overflow-hidden rounded-lg border border-primary/40 bg-primary/5 p-4 shadow-[0_0_0_1px_hsl(var(--primary)/0.1)]">
                        <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                        <div className="flex items-center gap-2 mb-2">
                          <Award size={16} className="text-primary flex-shrink-0" />
                          <span className="text-primary text-xs font-mono font-semibold uppercase tracking-wider">
                            {job.highlight.label}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm mb-1 break-words">
                          {job.highlight.url ? (
                            <a
                              href={job.highlight.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-foreground hover:text-primary transition-colors"
                            >
                              {job.highlight.title}
                              <ExternalLink size={12} className="ml-1 flex-shrink-0" />
                            </a>
                          ) : (
                            job.highlight.title
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed break-words">
                          {job.highlight.description}
                        </p>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};