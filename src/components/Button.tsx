import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}

const Button = ({ onClick, variant = 'primary', children, icon: Icon, className = '' }: ButtonProps) => {
  const baseStyles = "group relative min-w-[200px] px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0";
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-pink-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
    secondary: "bg-transparent border border-white/20 hover:border-purple-500/50 hover:bg-white/5 backdrop-blur-sm"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="flex items-center justify-center gap-2">
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </span>
      <div className={`absolute inset-0 rounded-full blur-lg opacity-50 transition-opacity -z-10 ${
        variant === 'primary' 
          ? 'bg-gradient-to-r from-purple-500 to-pink-600 opacity-50 group-hover:opacity-75'
          : 'bg-gradient-to-r from-purple-400/20 to-pink-600/20 opacity-0 group-hover:opacity-50'
      }`} />
    </button>
  );
};

export default Button;