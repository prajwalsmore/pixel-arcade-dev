import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProfessionalCard } from '@/components/ProfessionalCard';
import { ProfessionalButton } from '@/components/ProfessionalButton';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "🎮 GAME OVER... JUST KIDDING!",
        description: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/prajwalsmore' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/prajwal-more777/' },
    { icon: Mail, label: 'Email', href: 'mailto:sprajwalmore@gmail.com' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-font text-3xl md:text-4xl mb-4 text-foreground font-bold">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-6"></div>
          <p className="professional-font text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start a new project? Let's connect and create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ProfessionalCard className="h-full p-6 bg-card/80 dark:bg-card/40 backdrop-blur-sm border border-border/60 dark:border-border/30">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="heading-font text-xl font-semibold text-foreground mb-2">
                    Get In Touch
                  </h3>
                  <p className="professional-font text-muted-foreground">
                    Let's discuss your next project or collaboration opportunity.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                  <div>
                    <label className="professional-font text-sm text-foreground block mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="professional-input w-full"
                      placeholder="Enter your name..."
                    />
                  </div>

                  <div>
                    <label className="professional-font text-sm text-foreground block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="professional-input w-full"
                      placeholder="your.email@domain.com"
                    />
                  </div>

                  <div className="flex-grow">
                    <label className="professional-font text-sm text-foreground block mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="professional-input w-full resize-none h-32"
                      placeholder="Tell me about your project ideas..."
                    />
                  </div>

                  <ProfessionalButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full mt-auto"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </ProfessionalButton>
                </form>
              </div>
            </ProfessionalCard>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 h-full"
          >
            {/* Contact Info */}
            <ProfessionalCard className="bg-card/80 dark:bg-card/40 backdrop-blur-sm border border-border/60 dark:border-border/30">
              <h3 className="heading-font text-lg font-semibold text-foreground mb-4">
                Let's Connect
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="professional-font text-sm text-muted-foreground">Available for projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="professional-font text-sm text-muted-foreground">Response time: &lt; 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="professional-font text-sm text-muted-foreground">Remote friendly</span>
                </div>
              </div>
            </ProfessionalCard>

            {/* Social Links */}
            <ProfessionalCard className="bg-card/80 dark:bg-card/40 backdrop-blur-sm border border-border/60 dark:border-border/30">
              <h3 className="heading-font text-lg font-semibold text-foreground mb-6 text-center">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 border border-border/40 hover:border-primary transition-colors group rounded-md hover:bg-accent/50"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
                    <span className="professional-font text-lg text-foreground group-hover:text-foreground transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </ProfessionalCard>

            {/* Stats */}
            <ProfessionalCard className="bg-card/80 dark:bg-card/40 backdrop-blur-sm border border-border/60 dark:border-border/30">
              <h3 className="heading-font text-lg font-semibold text-foreground mb-4 text-center">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="heading-font text-xl text-primary font-bold">100%</div>
                  <div className="professional-font text-xs text-muted-foreground">Response Rate</div>
                </div>
                <div>
                  <div className="heading-font text-xl text-primary font-bold">24/7</div>
                  <div className="professional-font text-xs text-muted-foreground">Learning Mode</div>
                </div>
                <div>
                  <div className="heading-font text-xl text-primary font-bold">∞</div>
                  <div className="professional-font text-xs text-muted-foreground">Ideas Generated</div>
                </div>
                <div>
                  <div className="heading-font text-xl text-primary font-bold">99%</div>
                  <div className="professional-font text-xs text-muted-foreground">Coffee Uptime</div>
                </div>
              </div>
            </ProfessionalCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;