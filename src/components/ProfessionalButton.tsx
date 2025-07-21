import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProfessionalButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const ProfessionalButton = forwardRef<HTMLButtonElement, ProfessionalButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'font-professional font-medium rounded-md transition-all duration-200 transform active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/20 border border-primary/20',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg',
      outline: 'border border-border bg-card/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-lg hover:border-primary/30',
      ghost: 'hover:bg-accent hover:text-accent-foreground'
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base'
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

ProfessionalButton.displayName = 'ProfessionalButton';

export { ProfessionalButton };