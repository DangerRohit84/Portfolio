
import React from 'react';
import { Home, Folder, Trophy, Wrench, FileBadge, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'skills', icon: Wrench, label: 'Skills' },
    { id: 'projects', icon: Folder, label: 'Projects' },
    { id: 'achievements', icon: Trophy, label: 'Awards' },
    { id: 'certifications', icon: FileBadge, label: 'Certs' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center space-x-6 md:space-x-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative flex flex-col items-center justify-center"
              aria-label={item.label}
            >
              <div
                className={`transition-all duration-300 ${
                  isActive ? 'text-green-400 scale-110' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              
              <span className={`absolute -bottom-8 text-[10px] font-bold uppercase tracking-tighter transition-all duration-300 ${
                isActive ? 'opacity-100 translate-y-0 text-green-400' : 'opacity-0 -translate-y-2 text-transparent'
              }`}>
                {item.label}
              </span>

              {isActive && (
                <span className="absolute -bottom-2 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
