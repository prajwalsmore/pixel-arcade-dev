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
          {/* Galaxy Spiral Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-blue-900/10 to-transparent"></div>
          
          {/* Nebula Clouds */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`nebula-${i}`}
              className="absolute w-96 h-96 rounded-full"
              style={{
                background: `radial-gradient(circle, 
                  hsl(${240 + i * 30}, 70%, 15%) 0%, 
                  hsl(${280 + i * 20}, 60%, 10%) 40%, 
                  transparent 70%)`,
                left: `${20 + i * 30}%`,
                top: `${10 + i * 25}%`,
                filter: 'blur(40px)',
              }}
              animate={{
                x: [0, 50, -50, 0],
                y: [0, -30, 40, 0],
                scale: [1, 1.2, 0.8, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 60 + i * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
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
          {/* Static Background Stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full opacity-80"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                <div className="w-full h-full bg-white rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Falling Stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`falling-star-${i}`}
                className="absolute w-1 h-8 bg-gradient-to-b from-white via-blue-200 to-transparent rounded-full opacity-70"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10px',
                }}
                animate={{
                  y: ['0vh', '110vh'],
                  x: [0, Math.random() * 100 - 50],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Shooting Stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={`shooting-star-${i}`}
                className="absolute w-16 h-0.5 bg-gradient-to-r from-white via-blue-300 to-transparent rounded-full opacity-90"
                style={{
                  left: `${Math.random() * 50}%`,
                  top: `${Math.random() * 50}%`,
                }}
                animate={{
                  x: [0, 300],
                  y: [0, 150],
                  opacity: [0, 1, 1, 0],
                  scaleX: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: Math.random() * 15 + 5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Twinkling Stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={`twinkle-${i}`}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'drop-shadow(0 0 2px white)',
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
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