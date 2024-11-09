import { ArrowUpRight, Briefcase, Mail } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
      <div className="glare top-0 left-0" />
      
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">
            Transforming Ideas
          </span>
          <br />
          Into Digital Reality
        </h1>
        
        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up">
          Full-stack developer, graphic designer, and business strategist helping brands create exceptional digital experiences.
        </p>
        
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button
            onClick={() => scrollToSection('projects')}
            variant="primary"
            icon={Briefcase}
          >
            View Projects
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
          
          <Button
            onClick={() => scrollToSection('contact')}
            variant="secondary"
            icon={Mail}
          >
            Contact Me
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              animation: `float ${10 + i * 2}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;