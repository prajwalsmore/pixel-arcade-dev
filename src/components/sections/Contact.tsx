import { motion } from 'framer-motion';
import { useState } from 'react';
import { PixelCard } from '@/components/PixelCard';
import { PixelButton } from '@/components/PixelButton';
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
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' }
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
          <h2 className="pixel-font text-3xl md:text-4xl mb-4 text-primary">
            &lt;CONTACT /&gt;
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="retro-font text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start a new quest? Let's team up and create something awesome!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <PixelCard variant="neon">
              <div className="retro-terminal mb-6">
                <p className="text-neon-green">$ initialize_contact_protocol</p>
                <p className="text-neon-blue">&gt; Connection established...</p>
                <p className="text-neon-pink">&gt; Ready to receive message</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="pixel-font text-sm text-primary block mb-2">
                    PLAYER_NAME:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-input border-2 border-primary text-foreground p-3 retro-font focus:outline-none focus:border-accent transition-colors"
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label className="pixel-font text-sm text-primary block mb-2">
                    EMAIL_ADDRESS:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-input border-2 border-primary text-foreground p-3 retro-font focus:outline-none focus:border-accent transition-colors"
                    placeholder="your.email@domain.com"
                  />
                </div>

                <div>
                  <label className="pixel-font text-sm text-primary block mb-2">
                    MESSAGE_CONTENT:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-input border-2 border-primary text-foreground p-3 retro-font focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project ideas..."
                  />
                </div>

                <PixelButton
                  type="submit"
                  variant="neon"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
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
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </PixelButton>
              </form>
            </PixelCard>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Terminal Info */}
            <PixelCard variant="project">
              <div className="retro-terminal">
                <p className="text-neon-green mb-4">$ cat contact_info.txt</p>
                <div className="space-y-2">
                  <p className="text-neon-blue">&gt; Status: Available for projects</p>
                  <p className="text-neon-pink">&gt; Response time: &lt; 24 hours</p>
                  <p className="text-neon-yellow">&gt; Timezone: Your timezone (remote friendly)</p>
                  <p className="text-neon-green">&gt; Preferred: Collaborative projects</p>
                </div>
              </div>
            </PixelCard>

            {/* Social Links */}
            <PixelCard variant="default">
              <h3 className="pixel-font text-lg mb-6 text-primary text-center">
                CONNECT WITH ME
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="flex items-center space-x-4 p-3 border-2 border-secondary hover:border-accent transition-colors group"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-6 h-6 text-secondary group-hover:text-accent transition-colors" />
                    <span className="retro-font text-lg text-secondary group-hover:text-accent transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </PixelCard>

            {/* Fun Stats */}
            <PixelCard variant="neon">
              <h3 className="pixel-font text-sm mb-4 text-center text-neon-green">
                CURRENT STATS
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="pixel-font text-xl text-neon-pink">100%</div>
                  <div className="retro-font text-xs text-muted-foreground">Response Rate</div>
                </div>
                <div>
                  <div className="pixel-font text-xl text-neon-blue">24/7</div>
                  <div className="retro-font text-xs text-muted-foreground">Learning Mode</div>
                </div>
                <div>
                  <div className="pixel-font text-xl text-neon-yellow">∞</div>
                  <div className="retro-font text-xs text-muted-foreground">Ideas Generated</div>
                </div>
                <div>
                  <div className="pixel-font text-xl text-neon-green">99%</div>
                  <div className="retro-font text-xs text-muted-foreground">Coffee Uptime</div>
                </div>
              </div>
            </PixelCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;