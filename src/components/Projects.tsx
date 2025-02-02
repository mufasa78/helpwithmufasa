// components/Projects.tsx
import { useEffect, useRef } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Project } from '../types/Project';

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'EV Website',
      description: 'A full-stack electric vehicle website that showcases various EV models, provides detailed information about their features, and includes a charging station locator built with React, Node.js, Vite, and Tailwind CSS.',
      image: 'https://i.postimg.cc/0QGrbG9f/3d-electric-car-with-charged-battery.jpg',
      tags: ['React', 'Node.js', 'Vite', 'Tailwind CSS', 'API Integration', 'Maps API'],
      link: 'https://utucars.netlify.app/',
      github: 'https://github.com/mufasa78/utucars/',
      featured: true
    },
    {
      title: 'Brand Identity System',
      description: 'A comprehensive brand redesign and identity system for a logistics company, including a modern logo, detailed brand guidelines, and a suite of marketing materials to enhance brand recognition and communication.',
      image: 'https://i.postimg.cc/gjc3bgMx/xcold.jpg',
      tags: ['Branding', 'Design', 'Strategy', 'Adobe Illustrator', 'Adobe Photoshop', 'Brand Guidelines'],
      link: 'https://www.behance.net/gallery/210330011/Logistics-Company-Identity-Website',
      featured: true
    },
    {
      title: 'Petcare Website',
      description: 'An interactive web application for pet owners to manage their pet care needs. It includes features such as appointment scheduling, medication reminders, and a pet health tracker, built with React, Django, and Tailwind CSS.',
      image: 'https://i.postimg.cc/W42StDd5/charlesdeluvio-Dzi-ZIYOGAHc-unsplash.jpg',
      tags: ['React', 'Django', 'Tailwind CSS', 'Appointment Scheduling', 'Medication Reminders', 'Pet Health Tracking'],
      link: 'https://andysvet.netlify.app',
      github: 'https://github.com',
      featured: true
    },
    {
      title: 'Medicare Website',
      description: 'A web application designed to support Medicare services, featuring interactive dashboards for real-time data analysis of patient information, claims processing, and insights into healthcare trends.',
      image: 'https://i.postimg.cc/TPmYc7kC/6771605-book-education-genetics-learning-school-icon.png',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Data Visualization', 'Healthcare Services'],
      link: 'https://topherwelsch.netlify.app',
      github: '',
      featured: true
    },
    {
      title: 'Friend Watch Platform',
      description: 'A social platform that allows users to monitor and share updates from their friends in real-time. It includes features like activity feeds, notifications, and analytics to track user interactions and trends.',
      image: 'https://i.postimg.cc/d1QRq8jr/4306481-cinema-dessert-fastfood-film-food-icon.png',
      tags: ['React', 'Firebase', 'Real-time Updates', 'Activity Feed', 'Notifications', 'User Analytics'],
      link: 'https://prewatchnest.netlify.app',
      github: 'https://github.com',
      featured: true
    },
    {
      title: 'Personal Website',
      description: 'A personal portfolio website that showcases my projects and skills, providing detailed information about each project, technologies used, and my experience. It is built with modern web technologies to ensure a responsive and engaging user experience.',
      image: 'https://i.postimg.cc/vBp5q9mL/628284-avatar-male-man-mature-old-icon.png',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Responsive Design', 'SEO', 'Portfolio'],
      link: 'https://sojiamusan.netlify.app',
      github: 'https://github.com',
      featured: true
    },
    {
      title: 'Real Estate AirBnB Spaces',
      description: 'An interactive real estate platform inspired by Airbnb, featuring a user-friendly dashboard for market analysis and insights. It allows users to search, book, and manage real estate listings in real-time, with data-driven recommendations.',
      image: 'https://i.postimg.cc/pLB38GCR/nairobi-spaces-logo.jpg',
      tags: ['React', 'Firebase', 'Real-time Database', 'Maps API', 'Data Visualization', 'Real Estate'],
      link: 'https://nairobispaces.netlify.app',
      github: 'https://github.com',
      featured: true
    }
  ];

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <div
      ref={(el) => (projectRefs.current[index] = el)}
      className={`group relative overflow-hidden rounded-2xl transition-all opacity-0 translate-y-4 duration-700 ease-out ${
        project.featured 
          ? 'bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/20' 
          : 'bg-white/5 border border-white/10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 backdrop-blur-sm">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-medium text-purple-300">Featured</span>
          </div>
        </div>
      )}

      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="View source on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
          >
            <span>View Project</span>
            <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
