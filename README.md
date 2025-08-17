# Portfolio Template

A beautiful, responsive portfolio website inspired by [Brittany Chiang's design](https://brittanychiang.com), built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Dark theme with vibrant green accents
- **Responsive Layout**: Three-column desktop layout that adapts to mobile
- **Smooth Animations**: Scroll-triggered animations and hover effects  
- **Scroll Spy Navigation**: Highlights current section in navigation
- **Easy Customization**: Update content through a single data file
- **Accessible**: Built with web accessibility best practices
- **Performance Optimized**: Smooth scrolling and optimized animations

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit `http://localhost:8080` to see your portfolio

## 📝 Customization Guide

### Update Your Content

All portfolio content is stored in `src/lib/portfolio-data.ts`. Simply edit this file to update:

- **Personal Information**: Name, title, email, location
- **Hero Section**: Greeting, tagline, description, resume link
- **About Section**: Biography paragraphs and skills list
- **Experience**: Job history with descriptions and technologies
- **Projects**: Featured projects with descriptions and links
- **Contact**: Contact section text and messaging
- **Social Links**: Social media profiles and links
- **Navigation**: Menu items and sections

### Example Data Structure

```typescript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  
  hero: {
    greeting: "Hi, my name is",
    name: "Your Name.",
    tagline: "I build things for the web.",
    description: "Your personal mission statement...",
    resumeUrl: "/your-resume.pdf"
  },
  
  // ... more sections
};
```

### Add Your Projects

Update the `projects` array in the data file:

```typescript
projects: [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/username/repo",
    external: "https://your-project.com",
    image: "/projects/project-image.jpg",
    featured: true
  }
]
```

### Add Your Work Experience

Update the `experience` array:

```typescript
experience: [
  {
    company: "Company Name",
    position: "Your Position",
    duration: "2020 — Present", 
    location: "City, State",
    description: [
      "Key responsibility or achievement...",
      "Another important contribution..."
    ],
    technologies: ["JavaScript", "React", "Node.js"],
    url: "https://company-website.com"
  }
]
```

### Update Images

1. **Project Images**: Add images to `public/projects/`
2. **Resume**: Add your resume PDF to `public/resume.pdf`
3. **Favicon**: Replace `public/favicon.ico` with your own

### Customize Colors & Styling

The design system is defined in `src/index.css`. Key variables you can customize:

```css
:root {
  /* Main Colors */
  --navy-darkest: 220 23% 8%;    /* Background */
  --green-bright: 152 76% 62%;   /* Accent color */
  --slate-lightest: 220 13% 94%; /* Text color */
  
  /* Add your own color variations */
}
```

## 🎨 Design System

The portfolio uses a comprehensive design system with:

- **Colors**: Dark navy background with bright green accents
- **Typography**: Clean Inter font with clear hierarchy
- **Components**: Reusable button variants and card styles
- **Animations**: Smooth fade-ins and hover effects
- **Responsive**: Mobile-first responsive design

## 📱 Responsive Behavior

- **Desktop (≥1024px)**: Three-column layout with fixed navigation
- **Tablet (768px-1023px)**: Two-column layout with adapted navigation  
- **Mobile (<768px)**: Single column with hamburger menu

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Animations**: CSS transitions and transforms
- **Deployment**: Ready for Vercel, Netlify, or any static host

## 📦 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── sections/        # Page sections (Hero, About, etc.)
│   ├── PortfolioLayout.tsx
│   ├── LeftNavigation.tsx
│   └── ...
├── lib/
│   └── portfolio-data.ts # Main content configuration
├── hooks/
│   └── useScrollAnimation.ts
├── pages/
│   └── Index.tsx        # Main page
└── index.css            # Design system & global styles
```

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended)
   ```bash
   npm i -g vercel
   vercel
   ```

3. **Or deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

## 🔧 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

Design inspired by [Brittany Chiang](https://brittanychiang.com) - an amazing frontend engineer with exceptional design sense.

---

**Happy coding!** 🎉 If you have any questions or need help customizing your portfolio, feel free to reach out.