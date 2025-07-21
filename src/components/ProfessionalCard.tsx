import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProfessionalCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  animate?: boolean;
  hover?: boolean;
}

const ProfessionalCard = ({ 
  children, 
  className, 
  variant = 'default', 
  animate = true,
  hover = true 
}: ProfessionalCardProps) => {
  const baseClasses = 'bg-card text-card-foreground rounded-lg transition-all duration-300';
  
  const variants = {
    default: 'border border-border shadow-sm',
    elevated: 'shadow-md hover:shadow-lg border border-border/50',
    bordered: 'border-2 border-border shadow-sm hover:shadow-md'
  };

  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    ...(hover && {
      whileHover: { y: -2, scale: 1.01 }
    })
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

export { ProfessionalCard };