import { motion } from 'framer-motion';
import { PixelCard } from '@/components/PixelCard';
import { Code, Database, Palette, Zap, Coffee, Gamepad2 } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, name: 'Frontend', tech: 'React, TypeScript, Tailwind' },
    { icon: Database, name: 'Backend', tech: 'Node.js, Python, PostgreSQL' },
    { icon: Zap, name: 'Data Science', tech: 'Pandas, ML, Streamlit' },
    { icon: Palette, name: 'Design', tech: 'Pixel Art, UI/UX' },
    { icon: Coffee, name: 'Tools', tech: 'Git, Docker, VS Code' },
    { icon: Gamepad2, name: 'Fun', tech: '8-bit Games, Retro Tech' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="pixel-font text-3xl md:text-4xl mb-4 text-primary">
            &lt;ABOUT_ME /&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <PixelCard variant="neon" className="h-full">
              <div className="retro-terminal mb-6">
                <div className="text-neon-green mb-4">
                  <p>$ cat developer_story.txt</p>
                </div>
                <div className="space-y-3 text-lg">
                  <p className="text-neon-blue">
                    &gt; Full Stack Developer with a passion for creating 
                    <span className="text-neon-pink"> pixel-perfect</span> experiences
                  </p>
                  <p className="text-neon-yellow">
                    &gt; Specializing in React, TypeScript, and Data Science
                  </p>
                  <p className="text-neon-green">
                    &gt; When not coding, I'm crafting retro games and 8-bit art
                  </p>
                  <p className="text-neon-pink">
                    &gt; Always excited to learn new technologies and solve complex problems
                  </p>
                </div>
                <div className="mt-6 text-neon-green">
                  <p>$ status</p>
                  <p className="text-neon-blue animate-pixel-pulse">&gt; Available for exciting projects!</p>
                </div>
              </div>
            </PixelCard>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <PixelCard variant="project" className="text-center p-4 h-full">
                    <motion.div
                      className="text-primary mb-3"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-8 h-8 mx-auto" />
                    </motion.div>
                    <h3 className="pixel-font text-sm mb-2 text-primary">
                      {skill.name}
                    </h3>
                    <p className="retro-font text-xs text-muted-foreground">
                      {skill.tech}
                    </p>
                  </PixelCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Projects Built', value: '15+' },
            { label: 'Languages', value: '8+' },
            { label: 'Coffee Cups', value: '∞' },
            { label: 'Pixels Pushed', value: '999K+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <PixelCard variant="default" className="p-4">
                <div className="pixel-font text-2xl text-accent mb-2 animate-pixel-pulse">
                  {stat.value}
                </div>
                <div className="retro-font text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;