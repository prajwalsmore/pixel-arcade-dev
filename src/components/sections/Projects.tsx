import { motion } from 'framer-motion';
import { PixelCard } from '@/components/PixelCard';
import { PixelButton } from '@/components/PixelButton';
import { ExternalLink, Github, Database, Brain, Gamepad2, Code } from 'lucide-react';

const Projects = () => {
  const fullStackProjects = [
    {
      title: 'Cabin Space Planner',
      description: 'Cabin booking system with role-based access and room codes',
      tech: ['React', 'TypeScript', 'Supabase'],
      github: 'cabin-space-planner',
      live: '#',
      icon: Database,
      category: 'Full Stack'
    },
    {
      title: 'HabitForge',
      description: 'Minimal habit tracker to help users build and keep streaks',
      tech: ['React', 'Local Storage', 'Progressive Web App'],
      github: 'habitforge-streak-keeper',
      live: '#',
      icon: Code,
      category: 'Full Stack'
    },
    {
      title: 'Learn It. Trade It.',
      description: 'Skill swap platform – post what you can teach and learn',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'learn-it-trade-it',
      live: '#',
      icon: Brain,
      category: 'Full Stack'
    },
    {
      title: 'CodeRunner',
      description: 'Online compiler for 70+ languages with Monaco Editor',
      tech: ['React', 'Monaco Editor', 'Docker'],
      github: 'CorderRunner',
      live: '#',
      icon: Code,
      category: 'Full Stack'
    }
  ];

  const dataProjects = [
    {
      title: 'Unemployment Analysis',
      description: 'ML models and visualizations for unemployment trend prediction',
      tech: ['Python', 'Pandas', 'Streamlit'],
      github: '#',
      live: '#',
      icon: Brain,
      category: 'Data Science'
    },
    {
      title: 'USA Accident Analysis',
      description: 'EDA on US traffic accidents – risk zones and weather impact',
      tech: ['Pandas', 'Matplotlib', 'Seaborn'],
      github: '#',
      live: '#',
      icon: Database,
      category: 'Data Science'
    },
    {
      title: 'Kannada Dialect Detection',
      description: 'NLP project classifying dialects with TF-IDF and SVM',
      tech: ['Scikit-learn', 'TF-IDF', 'Deep Learning'],
      github: '#',
      live: '#',
      icon: Brain,
      category: 'Data Science'
    },
    {
      title: 'Stock Market Analysis',
      description: 'Real-time stock trends with Apache Kafka and Streamlit',
      tech: ['Kafka', 'Streamlit', 'Docker'],
      github: '#',
      live: '#',
      icon: Database,
      category: 'Data Science'
    }
  ];

  const earlyProjects = [
    {
      title: 'Virtual Trial Room',
      description: 'OpenCV-based AR clothing preview with gesture controls',
      tech: ['OpenCV', 'Haar Cascades', 'Python'],
      github: '#',
      live: '#',
      icon: Gamepad2,
      category: 'Computer Vision'
    },
    {
      title: 'AgroAcres App',
      description: 'Farmer-friendly Hindi app for crop info and soil analysis',
      tech: ['Android', 'Java', 'SQLite'],
      github: '#',
      live: '#',
      icon: Code,
      category: 'Mobile'
    },
    {
      title: 'Vehicle Insurance System',
      description: 'Complete insurance management for vehicles and payments',
      tech: ['Java', 'MySQL', 'Swing'],
      github: '#',
      live: '#',
      icon: Database,
      category: 'Desktop'
    }
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <PixelCard variant="project" className="h-full">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="text-primary"
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ duration: 0.3 }}
          >
            <project.icon className="w-8 h-8" />
          </motion.div>
          <span className="pixel-font text-xs text-accent bg-accent/10 px-2 py-1 border border-accent">
            {project.category}
          </span>
        </div>

        <h3 className="pixel-font text-lg mb-3 text-primary">
          {project.title}
        </h3>

        <p className="retro-font text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="pixel-font text-xs bg-secondary/20 text-secondary px-2 py-1 border border-secondary/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <PixelButton variant="secondary" size="sm" className="flex-1">
            <Github className="w-4 h-4 mr-2" />
            CODE
          </PixelButton>
          <PixelButton variant="accent" size="sm" className="flex-1">
            <ExternalLink className="w-4 h-4 mr-2" />
            LIVE
          </PixelButton>
        </div>
      </PixelCard>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="pixel-font text-3xl md:text-4xl mb-4 text-primary">
            &lt;PROJECTS /&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="retro-font text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of pixel-perfect projects spanning full-stack development, 
            data science, and experimental tech
          </p>
        </motion.div>

        {/* Full Stack Projects */}
        <div className="mb-16">
          <motion.h3
            className="pixel-font text-2xl mb-8 text-secondary text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            💻 FULL STACK PROJECTS
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {fullStackProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Data Science Projects */}
        <div className="mb-16">
          <motion.h3
            className="pixel-font text-2xl mb-8 text-accent text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            📊 DATA SCIENCE & ANALYTICS
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {dataProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Early Projects */}
        <div>
          <motion.h3
            className="pixel-font text-2xl mb-8 text-neon-pink text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🧪 EARLY PROJECTS
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {earlyProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* More Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <PixelButton variant="neon" size="lg">
            <Github className="w-5 h-5 mr-2" />
            VIEW ALL ON GITHUB
          </PixelButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;