import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ElegantBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Subtle floating particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Create very subtle particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.1 + 0.05,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`; // Primary color
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10"
          animate={{
            background: [
              'linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted) / 0.1))',
              'linear-gradient(135deg, hsl(var(--background)), hsl(var(--primary) / 0.03))',
              'linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted) / 0.1))',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtle Canvas Starfield */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ background: 'transparent' }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl"
            style={{
              left: `${10 + (i * 25)}%`,
              top: `${15 + (i * 20)}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        ))}
      </div>

      {/* Very Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.01]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="elegant-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#elegant-grid)" />
        </svg>
      </div>

      {/* Bottom Gradient for Text Clarity */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/90 to-transparent"></div>
    </div>
  );
};

export default ElegantBackground;