import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NanoBackground from './components/NanoBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-green-500 selection:text-black">
      {/* Background Layer */}
      <NanoBackground />

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 md:px-8 max-w-6xl">
        <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
          <Hero />
        </section>

        <section id="skills" className="min-h-screen py-20">
          <Skills />
        </section>

        <section id="experience" className="min-h-screen py-20">
          <Experience />
        </section>

        <section id="projects" className="min-h-screen py-20">
          <Projects />
        </section>

        <section id="certifications" className="min-h-screen py-20">
          <Certifications />
        </section>

        <section id="contact" className="min-h-[80vh] py-20">
          <Contact />
        </section>

        <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-900 mt-12">
          <p>© {new Date().getFullYear()} NanoTech Portfolio. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;