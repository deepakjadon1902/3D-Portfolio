import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseClasses = 'font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden group transform-gpu';
  
  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
      text-white 
      shadow-xl hover:shadow-2xl 
      border border-white/20
      hover:from-blue-700 hover:via-purple-700 hover:to-pink-700
    `,
    secondary: `
      bg-white/20 dark:bg-slate-800/20 
      backdrop-blur-xl 
      text-slate-900 dark:text-white 
      border border-white/30 dark:border-slate-700/30
      hover:bg-white/30 dark:hover:bg-slate-800/30 
      shadow-lg hover:shadow-xl
    `,
    outline: `
      border-2 border-blue-600 dark:border-blue-400
      text-blue-600 dark:text-blue-400 
      bg-transparent
      hover:bg-blue-600 hover:text-white 
      dark:hover:bg-blue-400 dark:hover:text-slate-900
      shadow-lg hover:shadow-xl
    `
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        y: disabled ? 0 : -2,
        rotateX: disabled ? 0 : 5,
        rotateY: disabled ? 0 : 2
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.98,
        y: disabled ? 0 : 0
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }}
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Animated Background for Primary */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      )}
      
      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {children}
      </span>
    </motion.button>
  );
};

export default Button;