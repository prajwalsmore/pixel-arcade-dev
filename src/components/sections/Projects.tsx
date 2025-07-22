import { motion } from 'framer-motion';
import { ProfessionalCard } from '@/components/ProfessionalCard';
import { ProfessionalButton } from '@/components/ProfessionalButton';
import { ExternalLink, Github, Database, Brain, Gamepad2, Code } from 'lucide-react';

const Projects = () => {
  const fullStackProjects = [
    {
      title: 'Cabin Space Planner',
      description: 'A role-based cabin booking platform where admins manage cabins and employees request bookings.',
      tech: ['React', 'TypeScript', 'Supabase'],
      github: 'https://github.com/prajwalsmore/cabin-space-planner',
      live: 'https://strong-pastelito-351b60.netlify.app',
      icon: Database,
      category: 'Full Stack'
    },
    {
      title: 'HabitForge – Streak Keeper',
      description: 'A minimal habit tracker to help users build streaks and stay consistent with daily goals.',
      tech: ['React', 'Local Storage', 'Progressive Web App'],
      github: 'https://github.com/prajwalsmore/habitforge-streak-keeper',
      live: 'https://willowy-swan-3cff57.netlify.app',
      icon: Code,
      category: 'Full Stack'
    },
    {
      title: 'Learn It. Trade It.',
      description: 'A peer-to-peer skill exchange platform to help people teach and learn from each other.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/prajwalsmore/learn-it-trade-it',
      live: 'https://learn-it-trade-it-71.lovable.app',
      icon: Brain,
      category: 'Full Stack'
    },
    {
      title: 'CodeRunner – Online Code Compiler',
      description: 'A web-based code editor supporting 70+ programming languages with real-time execution and Monaco Editor. (with @Aditya Sawant)',
      tech: ['React', 'Monaco Editor', 'Docker'],
      github: 'https://github.com/aditya9112adi/CorderRunner',
      live: 'https://corderrunner.onrender.com',
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

  const ProjectCard = ({ project, index, showLinks = true }: { project: any; index: number; showLinks?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <ProfessionalCard className="h-full">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="text-primary"
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ duration: 0.3 }}
          >
            <project.icon className="w-8 h-8" />
          </motion.div>
          <span className="tech-badge text-xs">
            {project.category}
          </span>
        </div>

        <h3 className="heading-font text-lg mb-3 text-foreground font-semibold">
          {project.title}
        </h3>

        <p className="professional-font text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        {showLinks && (
          <div className="flex gap-3 mt-auto">
            <ProfessionalButton 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => window.open(project.github, '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </ProfessionalButton>
            <ProfessionalButton 
              variant="primary" 
              size="sm" 
              className="flex-1"
              onClick={() => window.open(project.live, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </ProfessionalButton>
          </div>
        )}
      </ProfessionalCard>
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
          <h2 className="heading-font text-3xl md:text-4xl mb-4 text-foreground font-bold">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-6"></div>
          <p className="professional-font text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects spanning full-stack development, 
            data science, and experimental tech
          </p>
        </motion.div>

        {/* Full Stack Projects */}
        <div className="mb-16">
          <motion.h3
            className="heading-font text-2xl mb-8 text-blue-600 text-center font-semibold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            💻 Full Stack Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {fullStackProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} showLinks={true} />
            ))}
          </div>
        </div>

        {/* Data Science Projects */}
        <div className="mb-16">
          <motion.h3
            className="heading-font text-2xl mb-8 text-blue-600 text-center font-semibold"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            📊 Data Science & Analytics
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {dataProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} showLinks={false} />
            ))}
          </div>
        </div>

        {/* Early Projects */}
        <div>
          <motion.h3
            className="heading-font text-2xl mb-8 text-blue-600 text-center font-semibold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            🧪 Early Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {earlyProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} showLinks={false} />
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
          <ProfessionalButton 
            variant="primary" 
            size="lg"
            onClick={() => window.open('https://github.com/prajwalsmore', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All on GitHub
          </ProfessionalButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;