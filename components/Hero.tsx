import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center h-full">
      <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium animate-fade-in-up">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
        AI & ML Undergraduate
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Desina Rohit</span>
      </h1>
      
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-400 mb-8">
        AI/ML Engineer & Developer.
      </h2>
      
      <p className="max-w-xl text-gray-400 text-lg leading-relaxed mb-10 border-l-2 border-green-500 pl-6">
        B.Tech student in Artificial Intelligence and Machine Learning at Aditya University. 
        Passionate about Data Structures, Algorithms, and building efficient systems with C++, Python, and Machine Learning.
      </p>

      <div className="flex gap-6 mb-16">
        <a href="https://github.com/DangerRohit84" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-green-500/20 text-white hover:text-green-400 transition-colors border border-white/10 hover:border-green-500/50">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/rohit-desina/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-green-500/20 text-white hover:text-green-400 transition-colors border border-white/10 hover:border-green-500/50">
          <Linkedin size={24} />
        </a>
        <a href="mailto:desinarohit2007@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-green-500/20 text-white hover:text-green-400 transition-colors border border-white/10 hover:border-green-500/50">
          <Mail size={24} />
        </a>
      </div>

      <div className="animate-bounce mt-auto mx-auto md:mx-0">
        <ArrowDown className="text-green-500/50" size={32} />
      </div>
    </div>
  );
};

export default Hero;
