import React from 'react';
import { Github, Linkedin, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface SocialLink {
  name: string;
  icon: typeof Github;
  href: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/Mufasa78',
    color: 'hover:text-gray-100'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'www.linkedin.com/in/stanley-gathekia-',
    color: 'hover:text-blue-500'
  },
  {
    name: 'Contact',
    icon: Phone,
    href: 'https://wa.me/254716830746',
    color: 'hover:text-green-500'
  },
  {
    name: 'Chat',
    icon: MessageCircle,
    href: '',
    color: 'hover:text-purple-500'
  }
];

const SocialLinks = ({ onChatClick }: { onChatClick: () => void }) => {
  const handleClick = (name: string, _href: string, e: React.MouseEvent) => {
    if (name === 'Chat') {
      e.preventDefault();
      onChatClick();
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          target={link.name !== 'Chat' ? '_blank' : undefined}
          rel="noopener noreferrer"
          onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleClick(link.name, link.href, e)}
          className={`p-3 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors ${link.color} group`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <link.icon className="w-5 h-5" />
          <span className="absolute left-14 px-2 py-1 bg-white/5 backdrop-blur-sm rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {link.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;