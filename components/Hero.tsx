
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center h-full">
      
      <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Desina Rohit</span>
      </h1>
      
      <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-8">
        AI & ML Student
      </h2>
      
      <p className="max-w-2xl text-gray-400 text-lg leading-relaxed mb-10 border-l-2 border-green-500/50 pl-6 bg-gradient-to-r from-green-500/5 to-transparent py-4">
        B.Tech student in <span className="text-white">Artificial Intelligence and Machine Learning</span> at Aditya University. 
        Passionate about Data Structures, Algorithms, and building efficient systems with C++, Python, and Machine Learning.
      </p>

      <div className="flex gap-6 mb-16">
        <a href="https://github.com/DangerRohit84" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-gray-900/50 hover:bg-green-500/10 text-white hover:text-green-400 transition-all border border-gray-800 hover:border-green-500/50 shadow-xl group">
          <Github size={24} className="group-hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.linkedin.com/in/rohit-desina" target="_blank" rel="noreferrer" className="p-4 rounded-xl bg-gray-900/50 hover:bg-green-500/10 text-white hover:text-green-400 transition-all border border-gray-800 hover:border-green-500/50 shadow-xl group">
          <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
        </a>
        <a href="mailto:desinarohit2007@gmail.com" className="p-4 rounded-xl bg-gray-900/50 hover:bg-green-500/10 text-white hover:text-green-400 transition-all border border-gray-800 hover:border-green-500/50 shadow-xl group">
          <Mail size={24} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>

      <div className="animate-bounce mt-auto md:mx-0">
        <ArrowDown className="text-green-500/30" size={32} />
      </div>
    </div>
  );
};

export default Hero;
