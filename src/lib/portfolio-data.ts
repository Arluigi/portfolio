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
  highlight?: {
    label: string;
    title: string;
    description: string;
    url?: string;
  };
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
  title: "Molecular Biology Researcher · Pre-med · AI for Healthcare",
  email: "aryanss2@illinois.edu",
  location: "Champaign, IL",
  
  // Hero Section
  hero: {
    greeting: "Hi, my name is",
    name: "Aryan Sachdev.",
    tagline: "I study how breast cancer cells survive low oxygen, and I build AI tools for healthcare.",
    description: "I'm a Molecular and Cellular Biology junior at UIUC, heading toward medicine. In the Prasanth Lab I build the RNA-seq pipeline that picks our candidate genes, then test them at the bench. Outside the lab I build software with physicians.",
    resumeUrl: "/resume.pdf"
  },

  // About Section
  about: {
    description: [
      "Hello! I'm Aryan, a Molecular & Cellular Biology student at the University of Illinois, heading toward medicine. I started building early: in 2018 I co-founded CodifyKids, running coding camps for kids and donating the proceeds to charity.",
      "Most of my time now goes to the K.V. Prasanth Lab, where I study how breast cancer cells adapt to low oxygen. I built the RNA-seq pipeline that nominates our candidate genes and I run the RT-qPCR that tests them. Our corrected CRISPRi library went to collaborators at the National Cancer Institute. This past summer I was one of five Villa Cisse Scholars, and I co-authored a meta-analysis on preventing radiation dermatitis in breast cancer patients (in revision).",
      "I also volunteer at The EYE Center in Champaign, running patient pre-exams on equipment like OCT and retinal imaging. It's my first regular, hands-on work with patients.",
      "On the building side, I've built AI tools at NCSA and Discovery Partners Institute, co-founded Athen.ai with an Emory physician, and I'm now building ClearAF, a dermatology telehealth platform, with a practicing dermatologist. When I'm not doing any of that, I captain UIUC's club tennis team, which finished fifth at nationals.",
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
      company: "K.V. Prasanth Lab",
      position: "Research Assistant",
      duration: "Oct 2025 — Present",
      location: "University of Illinois",
      description: [
        "Conduct wet lab validation of computational candidates via RNA extraction, RT-qPCR, and downstream analysis on hypoxia- and chemotherapy-treated cell panels, owning plate setup, quality control, and troubleshooting",
        "Curate candidate gene lists from RNA-seq datasets in breast cancer cell line and patient-derived models, validating transcript isoforms and identifying alternative promoter usage under cellular stress",
        "Contribute deliverables to ongoing collaborations, including with the National Cancer Institute"
      ],
      technologies: ["RNA extraction", "RT-qPCR", "RNA-seq", "Genotyping", "Gel electrophoresis"],
      url: "https://mcb.illinois.edu/",
      highlight: {
        label: "Villa Cisse Scholarship · Summer 2026",
        title: "Villa Cisse Scholar",
        description: "One of five Villa Cisse Scholars selected for a competitive, NSF-funded 10-week program in quantitative biophysics, which funded a full-time summer of research in the lab.",
        url: "https://qcb.illinois.edu/"
      }
    },
    {
      company: "The EYE Center",
      position: "Clinical Technician Volunteer",
      duration: "Aug 2026 — Present",
      location: "Champaign, IL",
      description: [
        "Run patient pre-exams before physician visits at an ophthalmology practice treating cataracts, diabetic eye disease and retinal conditions",
        "Take patient histories and operate OCT, retinal imaging, refraction and keratometry, and IOLMaster and ultrasound biometry"
      ],
      technologies: ["OCT", "Retinal imaging", "Biometry", "Patient care"],
      url: "https://www.2020eyecenter.com/"
    },
    {
      company: "IronStreet Advisors",
      position: "Consultant",
      duration: "Sep 2026 — Present",
      location: "Remote",
      description: [
        "Build web and social media presence for a healthtech advisory firm serving digital health, MedTech and AI-enabled care companies"
      ],
      technologies: ["Healthtech", "Web", "Social media"],
      url: "https://ironstreetadvisors.com/"
    },
    {
      company: "Center for AI Innovation (NCSA)",
      position: "AI Development Intern",
      duration: "May 2025 — Oct 2025",
      location: "University of Illinois",
      description: [
        "Built the Canvas course assistant for Illinois Chat (uiuc.chat), the campus AI assistant that won first place for innovative tools at Instructure's Academic Excellence Awards",
        "Designed and optimized NLP tools to improve user interaction and knowledge retrieval",
        "Built scalable solutions to enhance educational experiences across the university"
      ],
      technologies: ["Python", "NLP", "LLM Development", "Canvas API", "React"],
      url: "https://www.ncsa.illinois.edu/"
    },
    {
      company: "Cannabis Research Institute",
      position: "Research Assistant",
      duration: "Jun 2025 — Aug 2025",
      location: "Chicago, IL",
      description: [
        "Performed molecular biology techniques including DNA/RNA precipitation, RT-qPCR viral detection and genotyping",
        "Detected Hop Latent Viroid, an RNA pathogen that cuts crop yield, across extraction, reverse transcription and RT-qPCR",
        "Conducted protein structure prediction and functional analysis of terpene synthase enzymes using AlphaFold, Rosetta, and PyMol"
      ],
      technologies: ["RT-qPCR", "AlphaFold", "PyMol", "Rosetta", "RNA extraction"],
      url: "https://illinois.edu/"
    },
    {
      company: "Discovery Partners Institute",
      position: "Research Intern, then AI Engineer",
      duration: "Jun 2024 — Oct 2024",
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
      position: "AI Model Trainer",
      duration: "Mar 2024 — May 2025",
      location: "Remote",
      description: [
        "Graded and rewrote model answers to biology, chemistry and math problems for RLHF training",
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
        "Automated and managed Instagram/Twitter content with AI-driven campaigns"
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
        "Donated all profits to Feeding Our Kids, a local charity"
      ],
      technologies: ["Python", "JavaScript", "Scratch", "Education"],
      url: ""
    }
  ],

  // Featured Projects
  projects: [
    {
      title: "Athen.ai",
      description: "Healthcare-focused platform that helps clinics discover the right AI tools for their workflows, with step-by-step setup guides and custom assistants trained on their own documents. Features an AI chat consultant that recommends tools inline, plus a PHI de-identification pipeline (Azure Health Data Services) that strips patient identifiers before any document reaches the vector store.",
      technologies: ["React", "TypeScript", "Node.js", "OpenAI API", "Azure Health Data Services", "Vercel"],
      github: "",
      external: "https://athen-ai-orcin.vercel.app/",
      image: "/projects/athena.png",
      featured: true
    },
    {
      title: "ClearAF",
      description: "Telehealth platform I'm building with a practicing dermatologist. Patients photograph their skin, and the platform pairs AI skin analysis with their treatment history so the dermatologist can write a personalized prescription plan. After testing showed weaker performance on darker skin, we expanded testing and training data so every skin tone is represented.",
      technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Stripe API"],
      github: "",
      external: "",
      image: "/projects/clearaf.png",
      featured: true
    },
    {
      title: "IMPACT Tool",
      description: "LLM-powered platform that intelligently matches researchers with relevant grants and collaborators based on their expertise and interests. Analyzes research papers, grant proposals, and researcher profiles to create intelligent recommendations, streamlining the research funding process for academic institutions.",
      technologies: ["Python", "LangChain", "Vector DB", "FastAPI", "React", "PostgreSQL"],
      github: "",
      external: "https://dpi.uillinois.edu/",
      image: "/projects/impact.png",
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
