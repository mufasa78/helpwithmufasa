import { Code, Palette, PenTool, Brain, Briefcase } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack development with modern frameworks and technologies.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Python', 'Vite']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative design solutions that capture brand essence.',
      technologies: ['Figma', 'Adobe Suite', 'UI/UX', 'Branding', 'Framer', 'Webflow']
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'Engaging content that tells your story effectively.',
      technologies: ['Technical Writing', 'Copywriting', 'Documentation', 'SEO']
    },
    {
      icon: Briefcase,
      title: 'Business Development',
      description: 'Strategic planning and growth optimization.',
      technologies: ['Strategy', 'Analytics', 'Market Research', 'Growth Hacking']
    },
    {
      icon: Brain,
      title: 'Research',
      description: 'In-depth analysis and data-driven insights.',
      technologies: ['Data Analysis', 'Journal Articles', 'Competitive Analysis', 'Trend Analysis']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Expertise & Skills
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <skill.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;