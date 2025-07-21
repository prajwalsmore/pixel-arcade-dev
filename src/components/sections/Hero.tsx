import { motion } from 'framer-motion';
import { PixelButton } from '@/components/PixelButton';
import pixelAvatar from '@/assets/pixel-avatar.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-primary/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 2,
                delay: Math.random() * 5,
                repeat: Infinity,
                repeatDelay: Math.random() * 10
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8">
          {/* Avatar */}
          <motion.div
            className="mx-auto w-32 h-32 mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1 
            }}
          >
            <img 
              src={pixelAvatar} 
              alt="Pixel Developer Avatar" 
              className="w-full h-full object-contain animate-float"
              style={{ imageRendering: 'pixelated' }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="pixel-font text-4xl md:text-6xl lg:text-7xl mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-primary animate-pixel-pulse">👾</span>
            <br />
            <span className="gradient-text">PIXEL</span>
            <br />
            <span className="text-secondary">DEVELOPER</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="retro-font text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="text-neon-green">&gt;</span> Developer by Day, 
            <span className="text-neon-pink"> Pixel Hero</span> by Night
            <span className="text-neon-green animate-pixel-pulse">_</span>
          </motion.p>

          {/* Terminal-style intro */}
          <motion.div
            className="retro-terminal max-w-md mx-auto mb-8 text-left"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <div className="text-neon-green">
              <p>$ whoami</p>
              <p className="text-neon-blue">&gt; Full Stack Developer</p>
              <p className="text-neon-pink">&gt; Data Science Enthusiast</p>
              <p className="text-neon-yellow">&gt; Pixel Art Creator</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <PixelButton 
              variant="neon" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW PROJECTS
            </PixelButton>
            <PixelButton 
              variant="secondary" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ABOUT ME
            </PixelButton>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;