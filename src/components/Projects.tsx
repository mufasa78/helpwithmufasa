import { useRef, useEffect } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EV Website',
      description: 'Full-stack EV Website.',
      image: 'https://i.postimg.cc/0QGrbG9f/3d-electric-car-with-charged-battery.jpg',
      tags: ['React', 'Node.js', 'Vite', 'Tailwind CSS'],
      link: 'https://utucars.netlify.app/',
      github: 'https://github.com/mufasa78/utucars/',
      featured: true
    },
    {
      title: 'Brand Identity System',
      description: 'Complete brand redesign and identity system for a logistics company, including logo, guidelines, and marketing materials.',
      image: 'https://i.postimg.cc/gjc3bgMx/xcold.jpg',
      tags: ['Branding', 'Design', 'Strategy'],
      link: 'https://www.behance.net/gallery/210330011/Logistics-Company-Identity-Website',
      featured: true
    },
    {
       title: 'Stray Dog Platform',
      description: 'Interactive platform to track stray dogs and facilitate adoption. Features real-time map visualizations, reporting tools, and community engagement for animal welfare.',
      image: 'https://i.postimg.cc/W42StDd5/charlesdeluvio-Dzi-ZIYOGAHc-unsplash.jpg',
      tags: ['Animal Welfare', 'MERN Stack', 'Visualization', 'Mapping', 'Community'],
      github: 'https://github.com/mufasa78/straydogplatform',
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

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
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
          {project.tags.map((tag: string, tagIndex: number) => (
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
