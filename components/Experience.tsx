import React from 'react';
import { Timer, Loader2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex items-center mb-16">
        <div className="h-px bg-green-500 w-12 mr-4"></div>
        <h2 className="text-3xl font-bold tracking-widest text-white uppercase">Experience</h2>
      </div>

      <div className="flex flex-col items-center justify-center p-12 bg-gray-900/20 border border-gray-800 rounded-2xl relative overflow-hidden group hover:border-green-500/30 transition-all duration-500">
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-black/50 border-2 border-green-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_50px_rgba(34,197,94,0.2)] transition-shadow">
            <Timer size={40} className="text-green-400 animate-pulse" />
          </div>
          
          <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-4 text-center">
            Timeline Initializing...
          </h3>
          
          <p className="text-gray-400 text-center max-w-lg mb-8">
            Professional experience modules are currently compiling. 
            Real-world data injection in progress.
          </p>

          <div className="flex items-center gap-2 text-green-500/70 text-sm font-mono bg-green-900/10 px-4 py-2 rounded-full border border-green-500/20">
            <Loader2 size={14} className="animate-spin" />
            <span>STATUS: AWAITING_DATA_PACKETS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;