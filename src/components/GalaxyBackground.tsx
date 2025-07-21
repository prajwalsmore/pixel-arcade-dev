import { useEffect, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Stars component for the 3D starfield
const Stars = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random star positions
  const particles = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  // Animate the starfield rotation
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={1.2}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

// Shooting star component
const ShootingStar = ({ delay = 0 }: { delay?: number }) => {
  return (
    <div
      className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-10"
      style={{
        left: `-100px`,
        top: `${Math.random() * 100}vh`,
        animationDelay: `${delay}s`,
        boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.8)',
      }}
      onAnimationEnd={(e) => {
        // Reset position for next animation
        const target = e.target as HTMLElement;
        target.style.left = '-100px';
        target.style.top = `${Math.random() * 100}vh`;
      }}
    />
  );
};

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // CSS-based shooting stars for fallback
  const shootingStars = Array.from({ length: 3 }, (_, i) => (
    <div
      key={i}
      className="fixed w-0.5 h-32 bg-gradient-to-b from-transparent via-white to-transparent opacity-80 pointer-events-none animate-shooting-star"
      style={{
        left: `-100px`,
        top: `${Math.random() * 100}vh`,
        animationDelay: `${i * 8}s`,
        animationDuration: '3s',
        transform: 'rotate(-45deg)',
        filter: 'blur(0.5px)',
      }}
    />
  ));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 3D Starfield Canvas */}
      <div className="absolute inset-0 opacity-70">
        <Canvas
          ref={canvasRef}
          camera={{ position: [0, 0, 1], fov: 60 }}
          style={{ background: 'transparent' }}
        >
          <Stars />
        </Canvas>
      </div>

      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/20"></div>

      {/* CSS Shooting Stars */}
      {shootingStars}

      {/* Additional ambient stars with CSS */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Bottom fade for text readability */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
    </div>
  );
};

export default GalaxyBackground;