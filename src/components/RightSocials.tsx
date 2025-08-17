import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  BookOpen, 
  Mail,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  'book-open': BookOpen,
  mail: Mail,
  external: ExternalLink
};

export const RightSocials = () => {
  return (
    <div className="flex flex-col items-center justify-end h-full pb-8">
      <div className="flex flex-col items-center space-y-6">
        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          {portfolioData.social.map((social) => {
            const IconComponent = iconMap[social.icon as keyof typeof iconMap];
            
            if (!IconComponent) return null;
            
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 group"
                aria-label={social.name}
              >
                <IconComponent 
                  size={20} 
                  className="group-hover:drop-shadow-glow transition-all duration-300" 
                />
              </a>
            );
          })}
        </div>
        
        {/* Vertical Divider */}
        <div className="w-px h-24 bg-muted-foreground/30" />
        
        {/* Email Address - Vertical */}
        <div className="flex flex-col items-center">
          <a
            href={`mailto:${portfolioData.email}`}
            className="group text-muted-foreground hover:text-primary transition-colors duration-300"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            <span className="text-sm font-mono tracking-widest group-hover:drop-shadow-glow transition-all duration-300">
              {portfolioData.email}
            </span>
          </a>
        </div>
        
        {/* Bottom Vertical Line */}
        <div className="w-px h-24 bg-muted-foreground/30" />
      </div>
    </div>
  );
};