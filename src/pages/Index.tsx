import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import ModernBackground from '@/components/ModernBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ModernBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
