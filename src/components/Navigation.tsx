import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { ProfessionalButton } from './ProfessionalButton';
import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = href === '#home' ? document.body : document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="heading-font text-xl font-bold text-primary cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#home')}
          >
            Prajwal More
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="professional-font text-sm px-4 py-2 text-muted-foreground hover:text-primary transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </motion.button>
            ))}
            <div className="flex items-center space-x-3 ml-4">
              <ThemeToggle />
              <ProfessionalButton 
                variant="outline" 
                size="sm"
                onClick={() => {
                  // Download resume functionality
                  window.open('https://drive.google.com/file/d/1bhvegi9DG268b0uBgXevIq41Nf9LlrS8/view?usp=sharing', '_blank');
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </ProfessionalButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'max-h-64' : 'max-h-0'}`}
          initial={false}
          animate={{ maxHeight: isOpen ? 256 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="py-4 space-y-2 border-t border-border">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left professional-font text-sm px-4 py-3 text-muted-foreground hover:text-primary hover:bg-accent transition-all rounded-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                {item.name}
              </motion.button>
            ))}
            <div className="px-4 pt-2 space-y-2">
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
              <ProfessionalButton 
                variant="outline" 
                size="sm"
                className="w-full"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1bhvegi9DG268b0uBgXevIq41Nf9LlrS8/view?usp=sharing', '_blank');
                  setIsOpen(false);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </ProfessionalButton>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
