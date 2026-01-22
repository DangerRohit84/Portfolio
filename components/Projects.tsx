
import React from 'react';
import { BookOpen, Binary, ArrowRight, Zap, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  tech: string[];
  simpleDescription: string;
  detailedPoints: string[];
  icon: React.ReactNode;
  github: string;
}

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const projects: Project[] = [
    {
      title: "Library Seat Booking",
      tech: ["HTML", "TypeScript", "JavaScript", "MongoDB"],
      simpleDescription: "A smart system for real-time library seat management and reservations.",
      detailedPoints: [
        "Architected a scalable booking engine for 100+ seats.",
        "Implemented real-time availability tracking using database listeners.",
        "Created an intuitive student dashboard for quick seat selection.",
        "Developed history tracking for administrative auditing.",
        "Optimized library space usage by approximately 40%."
      ],
      icon: <BookOpen className="text-green-400" />,
      github: "https://github.com/DangerRohit84/Library-Seat-Reservation-System"
    },
    {
      title: "Number Guessing Game",
      tech: ["Python"],
      simpleDescription: "Interactive terminal-based game featuring intelligent hints and session logic.",
      detailedPoints: [
        "Developed core game logic using advanced Python structures.",
        "Integrated an adaptive hint system based on mathematical range analysis.",
        "Built a robust CLI interface for seamless user interaction.",
        "Implemented scoring logic to track player efficiency over time."
      ],
      icon: <Binary className="text-green-400" />,
      github: "https://github.com/DangerRohit84/Guess-Number"
    }
  ];

  return (
    <div className="flex flex-col h-full justify-center relative">
      <div className="flex items-center mb-12">
        <div className="h-px bg-green-500 w-12 mr-4 shadow-[0_0_10px_#22c55e]"></div>
        <h2 className="text-3xl font-black tracking-widest text-white uppercase italic">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            onClick={() => onProjectClick(project)}
            className="group cursor-pointer bg-black/40 border border-white/10 rounded-[2rem] p-10 flex flex-col hover:border-green-500/40 transition-all duration-700 relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/5 rounded-full -mr-24 -mt-24 blur-[80px] group-hover:bg-green-500/15 transition-all duration-700" />
            
            <div className="flex justify-between items-start mb-10">
              <div className="p-5 bg-gray-900/50 rounded-2xl border border-white/5 group-hover:border-green-500/30 transition-all duration-500 shadow-xl">
                {project.icon}
              </div>
              <div className="flex gap-2">
                <Sparkles className="text-green-500/20 group-hover:text-green-400 transition-colors animate-pulse" size={24} />
              </div>
            </div>

            <h3 className="text-3xl font-black text-gray-100 mb-4 group-hover:text-green-400 transition-colors tracking-tight">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-10 leading-relaxed font-medium">
              {project.simpleDescription}
            </p>

            <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-black text-green-500 flex items-center gap-3 group-hover:gap-5 transition-all uppercase tracking-[0.2em]">
                Explore Project <ArrowRight size={16} />
              </span>
              <Zap className="text-green-500/10 group-hover:text-green-500 transition-all" size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
