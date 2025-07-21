import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PixelButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'accent' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseClasses = 'pixel-font border-2 transition-all duration-200 transform active:scale-95 cursor-pointer';
    
    const variants = {
      primary: 'bg-primary text-primary-foreground border-primary hover:bg-primary/80 shadow-[4px_4px_0px_hsl(var(--primary))] hover:shadow-[2px_2px_0px_hsl(var(--primary))]',
      secondary: 'bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80 shadow-[4px_4px_0px_hsl(var(--secondary))] hover:shadow-[2px_2px_0px_hsl(var(--secondary))]',
      accent: 'bg-accent text-accent-foreground border-accent hover:bg-accent/80 shadow-[4px_4px_0px_hsl(var(--accent))] hover:shadow-[2px_2px_0px_hsl(var(--accent))]',
      neon: 'bg-neon-green text-dark-bg border-neon-green hover:bg-neon-green/80 shadow-[4px_4px_0px_hsl(var(--neon-green))] hover:shadow-[2px_2px_0px_hsl(var(--neon-green))] animate-pixel-pulse'
    };

    const sizes = {
      sm: 'px-3 py-2 text-xs',
      md: 'px-4 py-3 text-sm',
      lg: 'px-6 py-4 text-base'
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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

PixelButton.displayName = 'PixelButton';

export { PixelButton };