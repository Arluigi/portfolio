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
  name: "Aryan Sachdev",
  title: "AI Engineer & Molecular Biology Researcher",
  email: "aryanss2@illinois.edu",
  location: "Champaign, IL",
  
  // Hero Section
  hero: {
    greeting: "Hi, my name is",
    name: "Aryan Sachdev.",
    tagline: "I build AI solutions at the intersection of biology and technology.",
    description: "I'm a molecular biology student and AI engineer passionate about leveraging cutting-edge technology to solve complex problems in healthcare and research. Currently pursuing my BS at UIUC while developing AI-powered tools for biotech and education.",
    resumeUrl: "/resume.pdf"
  },

  // About Section
  about: {
    description: [
      "Hello! I'm Aryan, and I enjoy building innovative solutions at the intersection of AI, biology, and technology. My journey started with co-founding CodifyKids in 2018, where I taught coding to middle and high school students while raising funds for charity.",
      "Fast-forward to today, and I've had the privilege of working on cutting-edge projects at the Cannabis Research Institute, NCSA's Center for AI Innovation, and various startups. My main focus these days is developing AI-powered tools for research and healthcare applications.",
      "Currently, I'm working on ClearAF, a comprehensive telehealth platform that leverages AI for personalized dermatological care, while conducting molecular biology research on terpene synthase enzymes.",
      "Here are a few technologies I've been working with recently:"
    ],
    technologies: {
      tech: [
        "Python",
        "React/Next.js",
        "LLM Development",
        "Node.js",
        "TypeScript",
        "FastAPI"
      ],
      bio: [
        "RT-qPCR",
        "AlphaFold",
        "RNA Extraction",
        "Genotyping",
        "PyMol",
        "Rosetta"
      ]
    }
  },

  // Experience Section
  experience: [
    {
      company: "Cannabis Research Institute",
      position: "Molecular Biology Research Intern",
      duration: "Jun 2025 — Present",
      location: "University of Illinois",
      description: [
        "Perform molecular biology techniques including DNA/RNA precipitation, RT-qPCR viral detection and genotyping",
        "Analyze experimental data and contribute to protocol optimization for cutting-edge cannabis research",
        "Conduct protein structure prediction and functional analysis of terpene synthase enzymes using AlphaFold, Rosetta, and PyMol"
      ],
      technologies: ["RT-qPCR", "AlphaFold", "PyMol", "Rosetta", "RNA extraction"],
      url: "https://illinois.edu/"
    },
    {
      company: "Center for AI Innovation (NCSA)",
      position: "AI Development Intern",
      duration: "May 2025 — Present",
      location: "University of Illinois",
      description: [
        "Developing uiuc.chat, an AI-powered course assistant integrated with Canvas LMS for real-time, course-specific support",
        "Designing and optimizing NLP tools to improve user interaction and knowledge retrieval",
        "Building scalable solutions to enhance educational experiences across the university"
      ],
      technologies: ["Python", "NLP", "LLM Development", "Canvas API", "React"],
      url: "https://www.ncsa.illinois.edu/"
    },
    {
      company: "Discovery Partners Institute",
      position: "AI Engineer",
      duration: "May 2024 — Oct 2024",
      location: "Chicago, IL",
      description: [
        "Built an LLM-powered tool for researcher and grant discovery by topic area",
        "Supported deployment across internal research teams, improving research collaboration efficiency",
        "Developed data pipelines for processing and analyzing research papers and grant proposals"
      ],
      technologies: ["Python", "LangChain", "Vector Databases", "FastAPI", "PostgreSQL"],
      url: "https://dpi.uillinois.edu/"
    },
    {
      company: "Outlier.ai",
      position: "AI Prompt Engineer",
      duration: "Apr 2024 — May 2025",
      location: "Remote",
      description: [
        "Enhanced LLM performance through advanced prompt engineering and quality control",
        "Generated and evaluated training data to fine-tune model responses across various domains",
        "Contributed to improving AI model accuracy and reliability through systematic testing and feedback"
      ],
      technologies: ["Prompt Engineering", "LLM Fine-tuning", "Python", "Quality Assurance"],
      url: "https://outlier.ai/"
    },
    {
      company: "EQUII",
      position: "App Development Intern",
      duration: "Jul 2023 — Dec 2023",
      location: "Remote",
      description: [
        "Built an AI chatbot to engage visitors and promote complete protein innovations",
        "Automated and managed Instagram/Twitter content with AI-driven campaigns",
        "Increased social media engagement by 40% through intelligent content optimization"
      ],
      technologies: ["React", "Node.js", "OpenAI API", "Social Media APIs", "MongoDB"],
      url: "https://equii.com/"
    },
    {
      company: "CodifyKids",
      position: "Co-Founder",
      duration: "May 2018 — Aug 2022",
      location: "Champaign, IL",
      description: [
        "Organized and taught coding camps for middle and high school students",
        "Developed curriculum covering Python, JavaScript, and web development fundamentals",
        "Donated all profits to local charities, raising over $10,000 for community organizations"
      ],
      technologies: ["Python", "JavaScript", "HTML/CSS", "Scratch", "Education"],
      url: ""
    }
  ],

  // Featured Projects
  projects: [
    {
      title: "ClearAF",
      description: "Comprehensive telehealth platform connecting patients and dermatologists, centered around AI-powered skin analysis. Features personalized prescription plans based on individual skin conditions and treatment history, leveraging computer vision and LLMs for accurate diagnosis support.",
      technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Stripe API"],
      github: "",
      external: "",
      image: "/projects/spotify-course.jpg",
      featured: true
    },
    {
      title: "uiuc.jobs",
      description: "Real-time dashboard for UIUC students that scrapes the OSFA job board to surface the latest positions. Features built-in email alerts, live monitoring, and intelligent job matching based on student profiles and preferences.",
      technologies: ["React", "Node.js", "Web Scraping", "PostgreSQL", "SendGrid"],
      github: "https://github.com/arluigi/",
      external: "https://uiuc.jobs",
      image: "/projects/spotify-profile.jpg",
      featured: true
    },
    {
      title: "IMPACT Tool",
      description: "LLM-powered platform that intelligently matches researchers with relevant grants and collaborators based on their expertise and interests. Analyzes research papers, grant proposals, and researcher profiles to create intelligent recommendations, streamlining the research funding process for academic institutions.",
      technologies: ["Python", "LangChain", "Vector DB", "FastAPI", "React", "PostgreSQL"],
      github: "",
      external: "https://dpi.uillinois.edu/",
      image: "/projects/halcyon-theme.jpg",
      featured: true
    }
  ],

  // Contact Section
  contact: {
    title: "What's Next?",
    heading: "Get In Touch",
    description: "I'm always interested in connecting with fellow researchers, developers, and innovators. Whether you want to discuss AI applications in biology, collaborate on a project, or just say hi, I'd love to hear from you!"
  },

  // Social Links
  social: [
    {
      name: "GitHub",
      url: "https://github.com/arluigi",
      icon: "github"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/aryansachdev",
      icon: "linkedin"
    },
    {
      name: "Email",
      url: "mailto:aryanss2@illinois.edu",
      icon: "mail"
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