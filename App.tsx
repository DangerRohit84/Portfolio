
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import NanoBackground from './components/NanoBackground';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { X, Stars, Github, ExternalLink } from 'lucide-react';

// Define the Project type locally for state management
interface Project {
  title: string;
  tech: string[];
  simpleDescription: string;
  detailedPoints: string[];
  icon: React.ReactNode;
  github: string;
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLaunching, setIsLaunching] = useState(false);
  
  const mainRef = useRef<HTMLDivElement>(null);

  // Parallax effect for the moving website feel
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mainRef.current || isProjectOpen) return;
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 60;
      const moveY = (clientY - window.innerHeight / 2) / 60;
      mainRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isProjectOpen]);

  // Section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2 }
    );
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleLaunchProject = (project: any) => {
    setIsLaunching(true);
    setIsProjectOpen(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsLaunching(false);
    }, 1000);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setIsProjectOpen(false);
  };

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-green-500 selection:text-black overflow-x-hidden bg-black">
      <NanoBackground />

      {/* Warp Speed Animation Overlay (Root Level) */}
      {isLaunching && (
        <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden pointer-events-none">
          <div className="relative w-full h-full">
            {[...Array(100)].map((_, i) => (
              <div 
                key={i}
                className="absolute bg-white rounded-full animate-warp-star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 250 + 50}px`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  opacity: Math.random()
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Project Modal (Root Level) */}
      {selectedProject && (
        <div className="fixed inset-0 z-[210] bg-black flex items-center justify-center animate-fade-in overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-galaxy-rotate opacity-60 scale-125" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />

          <div className="relative w-full h-full max-w-6xl md:h-[90vh] flex flex-col bg-black/50 backdrop-blur-3xl border border-white/10 rounded-none md:rounded-[4rem] shadow-[0_0_200px_rgba(34,197,94,0.2)] animate-project-modal-in overflow-hidden">
            <div className="flex items-center justify-between p-10 md:p-14 border-b border-white/5">
              <div className="flex items-center gap-8">
                <div className="p-6 bg-green-500/10 rounded-3xl text-green-500">{selectedProject.icon}</div>
                <div>
                  <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">{selectedProject.title}</h3>
                  <p className="text-green-500/80 text-[10px] font-black uppercase tracking-[0.6em] mt-2">Core System Loaded</p>
                </div>
              </div>
              <button onClick={handleCloseProject} className="p-6 bg-white/5 hover:bg-green-500 hover:text-black rounded-full text-white transition-all duration-500 group">
                <X size={44} className="group-hover:rotate-180 transition-transform duration-500" />
              </button>
            </div>

            <div className="flex-grow p-10 md:p-20 overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-8 space-y-12">
                  <h4 className="text-xs font-black text-green-500 uppercase tracking-[0.5em] flex items-center gap-4">
                    <Stars size={22} /> About Project
                  </h4>
                  <div className="space-y-10">
                    {selectedProject.detailedPoints.map((point, i) => (
                      <div key={i} className="flex gap-10 group">
                        <div className="mt-4 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_20px_#22c55e] shrink-0" />
                        <p className="text-gray-200 text-xl md:text-2xl leading-relaxed font-semibold">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 space-y-12">
                  <div className="p-12 bg-white/5 rounded-[3.5rem] border border-white/10 space-y-12">
                    <div>
                      <h4 className="text-xs font-black text-green-500 uppercase tracking-[0.5em] mb-10">Used Languages</h4>
                      <div className="flex flex-wrap gap-4">
                        {selectedProject.tech.map((t, i) => (
                          <span key={i} className="px-5 py-3 bg-black/60 border border-white/10 rounded-2xl text-white font-black text-xs uppercase tracking-widest">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-12 border-t border-white/10">
                      <h4 className="text-xs font-black text-green-500 uppercase tracking-[0.5em] mb-10">Link</h4>
                      <a href={selectedProject.github} target="_blank" className="flex items-center justify-between p-7 bg-black/60 rounded-[2.5rem] border border-white/5 hover:border-green-500 transition-all group/link">
                        <div className="flex items-center gap-5">
                          <Github size={32} className="text-gray-400 group-hover/link:text-white transition-all" />
                          <span className="text-xl font-black text-gray-300 group-hover/link:text-white italic">Source</span>
                        </div>
                        <ExternalLink size={24} className="text-gray-500 group-hover/link:text-green-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-black/40 border-t border-white/5 flex justify-center"><div className="h-0.5 w-96 bg-gradient-to-r from-transparent via-green-500/40 to-transparent" /></div>
          </div>
        </div>
      )}

      {/* Navbar Container */}
      <div className={`transition-all duration-700 fixed top-0 left-0 w-full z-[100] ${isProjectOpen ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <Navbar activeSection={activeSection} />
      </div>

      {/* Main Content Container */}
      <main 
        ref={mainRef}
        className={`relative z-10 container mx-auto px-4 md:px-8 max-w-6xl transition-all duration-1000 ease-out ${
          isProjectOpen ? 'opacity-0 scale-90 blur-3xl pointer-events-none translate-y-20' : 'opacity-100 scale-100 blur-0 translate-y-0'
        }`}
      >
        <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
          <Hero />
        </section>
        <section id="skills" className="min-h-screen py-20 flex flex-col justify-center">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen py-20 flex flex-col justify-center">
          <Projects onProjectClick={handleLaunchProject} />
        </section>
        <section id="achievements" className="min-h-screen py-20 flex flex-col justify-center">
          <Achievements />
        </section>
        <section id="certifications" className="min-h-screen py-20 flex flex-col justify-center">
          <Certifications />
        </section>
        <section id="contact" className="min-h-[80vh] py-20 flex flex-col justify-center">
          <Contact />
        </section>
        <footer className="py-12 text-center text-gray-500 text-sm border-t border-white/5 mt-12 bg-black/20 backdrop-blur-sm">
          <p className="tracking-widest uppercase font-black text-[10px]">© {new Date().getFullYear()} Rohit Portfolio</p>
        </footer>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes warp-star {
          0% { transform: translateY(100vh) scaleX(3); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-100vh) scaleX(0.1); opacity: 0; }
        }
        .animate-warp-star { animation: warp-star 0.7s ease-in infinite; }
        @keyframes galaxy-rotate { from { transform: rotate(0deg) scale(2.5); } to { transform: rotate(360deg) scale(2.5); } }
        .animate-galaxy-rotate { animation: galaxy-rotate 300s linear infinite; }
        @keyframes project-modal-in {
          0% { transform: scale(0.6) perspective(1500px) rotateX(20deg) translateY(100px); opacity: 0; filter: blur(30px); }
          100% { transform: scale(1) perspective(1500px) rotateX(0deg) translateY(0); opacity: 1; filter: blur(0); }
        }
        .animate-project-modal-in { animation: project-modal-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.4); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34,197,94,0.3); border-radius: 10px; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
      `}} />
    </div>
  );
};

export default App;
