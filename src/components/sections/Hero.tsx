import { motion } from 'framer-motion';
import { ProfessionalButton } from '@/components/ProfessionalButton';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            className="mx-auto w-40 h-40 mb-8 relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1 
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1 animate-profile-glow">
              <motion.div 
                className="w-full h-full rounded-full bg-muted/50 backdrop-blur-sm flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-4xl">👨‍💻</span>
              </motion.div>
            </div>
            {/* Floating particles around profile */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/60 rounded-full"
                style={{
                  left: `${30 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
              />
            ))}
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="heading-font text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Prajwal More</span>
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl">
              <span className="gradient-text font-semibold">Full Stack Developer</span>
              <span className="text-muted-foreground"> | </span>
              <span className="text-primary font-semibold">Data Science Enthusiast</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="professional-font text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Turning ideas into interactive, scalable solutions through innovative development and data-driven insights.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.a
              href="https://github.com/prajwalsmore"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors shadow-md hover:shadow-lg hover:shadow-primary/10"
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors shadow-md hover:shadow-lg hover:shadow-primary/10"
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:sprajwalmore@gmail.com"
              className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors shadow-md hover:shadow-lg hover:shadow-primary/10"
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <ProfessionalButton 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </ProfessionalButton>
            <ProfessionalButton 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </ProfessionalButton>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center space-y-2 text-muted-foreground"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm professional-font">Scroll to explore</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;