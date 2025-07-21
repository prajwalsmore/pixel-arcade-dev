import { motion } from 'framer-motion';
import { ProfessionalCard } from '@/components/ProfessionalCard';
import { Code, Database, Brain, Palette, Coffee, Monitor, Server, GitBranch } from 'lucide-react';

const About = () => {
  const languages = [
    'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'
  ];

  const frameworks = [
    'React', 'Node.js', 'Express'
  ];

  const dataML = [
    'Pandas', 'NumPy', 'scikit-learn', 'Streamlit'
  ];

  const tools = [
    'Git', 'VS Code', 'Postman', 'Power BI', 'Tableau'
  ];

  const skillCategories = [
    { icon: Code, name: 'Languages', items: languages, color: 'text-blue-500' },
    { icon: Monitor, name: 'Frameworks', items: frameworks, color: 'text-green-500' },
    { icon: Brain, name: 'Data/ML', items: dataML, color: 'text-purple-500' },
    { icon: GitBranch, name: 'Tools', items: tools, color: 'text-orange-500' }
  ];

  return (
    <>
      {/* About Me Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4 text-foreground">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ProfessionalCard variant="elevated" className="p-8">
                <h3 className="heading-font text-2xl font-semibold mb-6 text-foreground">
                  My Story
                </h3>
                <div className="space-y-4 professional-font text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate Full Stack Developer and M.Tech Data Science student with a unique blend of 
                    technical expertise and creative problem-solving skills.
                  </p>
                  <p>
                    My journey combines the best of both worlds: building robust, scalable web applications 
                    while analyzing data to extract meaningful insights that drive real-world impact.
                  </p>
                  <p>
                    What sets me apart is my curiosity and versatility. I thrive on learning new technologies 
                    and methodologies, constantly pushing the boundaries of what's possible in both 
                    development and data science.
                  </p>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-primary font-medium">
                      ✨ Currently available for exciting projects and collaborations!
                    </p>
                  </div>
                </div>
              </ProfessionalCard>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { label: 'Projects Completed', value: '15+', icon: '🚀' },
                { label: 'Technologies Mastered', value: '8+', icon: '⚡' },
                { label: 'Years Learning', value: '3+', icon: '📚' },
                { label: 'Coffee Consumed', value: '∞', icon: '☕' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ProfessionalCard className="p-6 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{stat.icon}</div>
                      <div>
                        <div className="heading-font text-2xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="professional-font text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </ProfessionalCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ProfessionalCard variant="elevated" className="p-6 h-full">
                  <div className="text-center mb-6">
                    <motion.div
                      className={`${category.color} mb-3`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <category.icon className="w-8 h-8 mx-auto" />
                    </motion.div>
                    <h3 className="heading-font text-lg font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.1) + (index * 0.05), duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <span className="tech-badge">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </ProfessionalCard>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-font text-2xl font-semibold mb-6 text-foreground">
              Core Strengths
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {['Communication', 'Collaboration', 'Problem Solving', 'Creative Thinking', 'Adaptability', 'Leadership'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;