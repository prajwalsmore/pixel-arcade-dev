import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ModernBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30"></div>
      
      {/* Dark Mode Galaxy Background */}
      {isDark && (
        <div className="absolute inset-0">
          {/* Subtle Galaxy Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-radial from-purple-900/10 via-blue-900/5 to-transparent blur-3xl"></div>
        </div>
      )}

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 10)}%`,
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Dark Mode Stars */}
      {isDark && (
        <>
          {/* Few Scattered Stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Single Falling Star */}
          <motion.div
            className="absolute w-0.5 h-6 bg-gradient-to-b from-white via-blue-200 to-transparent rounded-full opacity-50"
            style={{
              left: '20%',
              top: '-10px',
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, 20],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: 3,
              ease: "linear",
            }}
          />

          {/* Single Shooting Star */}
          <motion.div
            className="absolute w-12 h-0.5 bg-gradient-to-r from-white via-blue-300 to-transparent rounded-full opacity-70"
            style={{
              left: '70%',
              top: '30%',
            }}
            animate={{
              x: [0, 150],
              y: [0, 75],
              opacity: [0, 1, 1, 0],
              scaleX: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 8,
              ease: "easeOut",
            }}
          />
        </>
      )}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="modern-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#modern-grid)" />
        </svg>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default ModernBackground;