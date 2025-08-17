// Portfolio Data - Easily customizable content
// Update this file to change all portfolio content

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  url?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  external?: string;
  image: string;
  featured: boolean;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export const portfolioData = {
  // Personal Information
  name: "Brittany Chiang",
  title: "Front End Engineer",
  email: "brittany.chiang@gmail.com",
  location: "Boston, MA",
  
  // Hero Section
  hero: {
    greeting: "Hi, my name is",
    name: "Brittany Chiang.",
    tagline: "I build things for the web.",
    description: "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.",
    resumeUrl: "/resume.pdf"
  },

  // About Section
  about: {
    description: [
      "Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
      "Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.",
      "I also recently launched a course that covers everything you need to build a web app with the Spotify Web API using Node & React.",
      "Here are a few technologies I've been working with recently:"
    ],
    technologies: [
      "JavaScript (ES6+)",
      "TypeScript", 
      "React",
      "Node.js",
      "WordPress",
      "Figma"
    ]
  },

  // Experience Section
  experience: [
    {
      company: "Klaviyo",
      position: "Senior Frontend Engineer, Accessibility",
      duration: "2024 — Present",
      location: "Boston, MA",
      description: [
        "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
        "Contribute to the creation and maintenance of UI components that power Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience."
      ],
      technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
      url: "https://www.klaviyo.com/"
    },
    {
      company: "Upstatement",
      position: "Lead Engineer",
      duration: "2018 — 2024",
      location: "Boston, MA",
      description: [
        "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools."
      ],
      technologies: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native", "WordPress", "Contentful", "Node.js", "PHP"],
      url: "https://upstatement.com/"
    },
    {
      company: "Apple",
      position: "UI Engineer Co-op",
      duration: "July — Dec 2017",
      location: "Cupertino, CA",
      description: [
        "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
        "Built and shipped the Apple Music Extension within MusicKit on the web, empowering web developers to authorize users and access their personal music library."
      ],
      technologies: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
      url: "https://www.apple.com/"
    }
  ],

  // Featured Projects
  projects: [
    {
      title: "Build a Spotify Connected App",
      description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      technologies: ["React", "Express", "Spotify API", "Heroku"],
      github: "",
      external: "https://www.newline.co/courses/build-a-spotify-connected-app",
      image: "/projects/spotify-course.jpg",
      featured: true
    },
    {
      title: "Spotify Profile",
      description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      technologies: ["React", "Express", "Spotify API", "Heroku"],
      github: "https://github.com/bchiang7/spotify-profile",
      external: "https://spotify-profile.herokuapp.com/",
      image: "/projects/spotify-profile.jpg",
      featured: true
    },
    {
      title: "Halcyon Theme",
      description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      github: "https://github.com/bchiang7/halcyon-theme",
      external: "https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode",
      image: "/projects/halcyon-theme.jpg",
      featured: true
    }
  ],

  // Contact Section
  contact: {
    title: "What's Next?",
    heading: "Get In Touch",
    description: "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
  },

  // Social Links
  social: [
    {
      name: "GitHub",
      url: "https://github.com/bchiang7",
      icon: "github"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/bchiang7",
      icon: "linkedin"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bchiang7",
      icon: "instagram"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/bchiang7",
      icon: "twitter"
    },
    {
      name: "Goodreads",
      url: "https://www.goodreads.com/user/show/59861288-brittany-chiang",
      icon: "book-open"
    }
  ],

  // Navigation
  navigation: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]
};