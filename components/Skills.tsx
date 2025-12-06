import React from 'react';
import { Code2, Database, Terminal, Cpu, BookOpen, BarChart } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-green-400" />,
      skills: ["C", "C++", "Python", "HTML (Basics)", "CSS (Basics)"]
    },
    {
      title: "Core Concepts",
      icon: <BookOpen className="text-green-400" />,
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems (Linux)"]
    },
    {
      title: "Databases",
      icon: <Database className="text-green-400" />,
      skills: ["Oracle", "SQL"]
    },
    {
      title: "Developer Tools",
      icon: <Terminal className="text-green-400" />,
      skills: ["VS Code", "GitHub", "Virtual Machine", "Git"]
    },
    {
      title: "Data & Analytics",
      icon: <BarChart className="text-green-400" />,
      skills: ["Microsoft Excel", "PowerBI"]
    },
    {
      title: "Competitive Platforms",
      icon: <Cpu className="text-green-400" />,
      skills: ["LeetCode", "HackerRank", "CodeChef"]
    }
  ];

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex items-center mb-12">
        <div className="h-px bg-green-500 w-12 mr-4"></div>
        <h2 className="text-3xl font-bold tracking-widest text-white uppercase">Skills & Tech</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div 
            key={idx}
            className="group relative p-6 bg-gray-900/40 border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
          >
            {/* Hover Glitch Effect Background */}
            <div className="absolute inset-0 bg-green-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-black/50 rounded-lg border border-gray-700 group-hover:border-green-500/50 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-200 group-hover:text-green-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-sm px-3 py-1 rounded bg-black/60 border border-gray-800 text-gray-400 group-hover:text-gray-200 group-hover:border-green-500/30 transition-all"
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