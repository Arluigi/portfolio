import { useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { ExternalLink } from 'lucide-react';

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
                <button
                  key={job.company}
                  onClick={() => setActiveTab(index)}
                  className={`flex-shrink-0 px-3 py-2 lg:px-4 lg:py-3 text-left border-b-2 lg:border-b-0 lg:border-l-2 transition-all duration-300 whitespace-nowrap lg:whitespace-normal ${
                    activeTab === index
                      ? 'border-primary text-primary bg-primary/5'
                      : 'border-muted text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className="text-xs lg:text-sm font-medium">{job.company}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="lg:col-span-3">
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
                  <div className="space-y-6">
                    {/* Job Title & Company */}
                    <div>
                      <h3 className="text-heading-sm mb-1 break-words">
                        <span className="block sm:inline">{job.position}</span>
                        {job.url && (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-1 sm:mt-0 sm:ml-2 text-primary hover:text-primary-glow transition-colors"
                          >
                            @ {job.company}
                            <ExternalLink size={16} className="ml-1 flex-shrink-0" />
                          </a>
                        )}
                        {!job.url && (
                          <span className="text-primary block sm:inline"> @ {job.company}</span>
                        )}
                      </h3>
                      <p className="text-body-sm break-words">{job.duration}</p>
                      <p className="text-body-sm text-muted-foreground break-words">{job.location}</p>
                    </div>
                    
                    {/* Job Description */}
                    <ul className="space-y-4">
                      {job.description.map((item, descIndex) => (
                        <li key={descIndex} className="flex items-start space-x-3">
                          <span className="text-primary mt-2 text-sm flex-shrink-0">▹</span>
                          <span className="text-body break-words" dangerouslySetInnerHTML={{ 
                            __html: item.replace(
                              /uiuc\.chat/g, 
                              '<a href="https://uiuc.chat" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-primary-glow transition-colors break-all">uiuc.chat</a>'
                            )
                          }} />
                        </li>
                      ))}
                    </ul>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="tech-badge">
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