import React from 'react';
import { Lock, Construction, AlertTriangle } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex items-center mb-12">
        <div className="h-px bg-green-500 w-12 mr-4"></div>
        <h2 className="text-3xl font-bold tracking-widest text-white uppercase">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder Card 1 */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[350px] group hover:border-green-500/30 transition-all duration-300">
          <div className="p-4 rounded-full bg-gray-800/50 mb-6 group-hover:bg-green-900/20 transition-colors relative">
            <Construction size={40} className="text-gray-500 group-hover:text-green-500 transition-colors" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-0 group-hover:opacity-100"></span>
          </div>
          <h3 className="text-xl font-bold text-gray-300 mb-2 group-hover:text-green-400 transition-colors">Under Construction</h3>
          <p className="text-gray-500 text-sm">
            Project data is currently being migrated to the grid. Declassification imminent.
          </p>
        </div>

        {/* Placeholder Card 2 */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[350px] relative overflow-hidden group">
           <div className="absolute inset-0 bg-black/60 z-10 backdrop-blur-[2px]"></div>
           <div className="relative z-20 flex flex-col items-center">
             <div className="p-4 rounded-full bg-gray-800/50 mb-6">
              <Lock size={40} className="text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-500 mb-2">Encrypted</h3>
            <p className="text-gray-600 text-sm">Access denied. Level 4 clearance required.</p>
           </div>
        </div>

         {/* Placeholder Card 3 */}
         <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[350px] relative overflow-hidden">
           <div className="absolute inset-0 bg-black/80 z-10 backdrop-blur-[1px]"></div>
           <div className="relative z-20 flex flex-col items-center opacity-60">
             <div className="p-4 rounded-full bg-gray-800/50 mb-6">
              <AlertTriangle size={40} className="text-gray-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">Restricted</h3>
            <p className="text-gray-700 text-sm">System integrity check in progress...</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;