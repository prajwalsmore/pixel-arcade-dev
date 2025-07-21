import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'project' | 'neon';
  animate?: boolean;
}

const PixelCard = ({ children, className, variant = 'default', animate = true }: PixelCardProps) => {
  const baseClasses = 'border-2 p-6 transition-all duration-300';
  
  const variants = {
    default: 'bg-card border-primary text-card-foreground shadow-[4px_4px_0px_hsl(var(--primary))]',
    project: 'bg-card border-secondary text-card-foreground shadow-[4px_4px_0px_hsl(var(--secondary))] hover:shadow-[8px_8px_0px_hsl(var(--secondary))] hover:-translate-x-1 hover:-translate-y-1',
    neon: 'bg-card border-neon-green text-card-foreground shadow-[4px_4px_0px_hsl(var(--neon-green))] hover:shadow-[0_0_20px_hsl(var(--neon-green)_/_0.5)]'
  };

  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    whileHover: { y: -5 }
  } : {};

  return (
    <Component
      className={cn(baseClasses, variants[variant], className)}
      {...animationProps}
    >
      {children}
    </Component>
  );
};

export { PixelCard };