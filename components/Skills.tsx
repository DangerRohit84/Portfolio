
import React from 'react';
import { Code2, Database, Terminal, Globe, BookOpen, BarChart } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="text-green-400" />,
      skills: ["C", "C++", "Python", "Java"]
    },
    {
      title: "Web Skills",
      icon: <Globe className="text-green-400" />,
      skills: ["HTML", "CSS", "ReactJS", "TypeScript", "Node.JS", "JavaScript"]
    },
    {
      title: "Data",
      icon: <Database className="text-green-400" />,
      skills: ["MySQL", "MongoDB", "Oracle", "SQL"]
    },
    {
      title: "Core Topics",
      icon: <BookOpen className="text-green-400" />,
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Linux"]
    },
    {
      title: "Tools",
      icon: <BarChart className="text-green-400" />,
      skills: ["VS Code", "GitHub", "Git", "Excel", "PowerBI"]
    },
    {
      title: "Coding Sites",
      icon: <Terminal className="text-green-400" />,
      skills: ["LeetCode", "HackerRank", "CodeChef"]
    }
  ];

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex items-center mb-12">
        <div className="h-px bg-green-500 w-12 mr-4"></div>
        <h2 className="text-3xl font-black tracking-widest text-white uppercase italic">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx}
            className="group relative p-6 bg-black/40 border border-white/5 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.05)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,197,94,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-900/80 rounded-xl border border-white/5 group-hover:border-green-500/50 transition-all shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-100 uppercase tracking-tight group-hover:text-green-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-900/60 border border-white/5 text-gray-500 group-hover:text-green-200 group-hover:border-green-500/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
