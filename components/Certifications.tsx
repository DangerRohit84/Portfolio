
import React from 'react';
import { Award, ShieldCheck, Database, FileSpreadsheet, Code } from 'lucide-react';

const Certifications: React.FC = () => {
  const certs = [
    {
      name: "Cybersecurity Basics",
      issuer: "Cisco Academy",
      icon: <ShieldCheck size={32} />
    },
    {
      name: "C & C++ Programming",
      issuer: "Cisco Academy",
      icon: <Code size={32} />
    },
    {
      name: "Data Analyst",
      issuer: "Microsoft",
      icon: <Database size={32} />
    },
    {
      name: "Excel Expert",
      issuer: "Certiport",
      icon: <FileSpreadsheet size={32} />
    }
  ];

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex items-center mb-16">
        <div className="h-px bg-green-500 w-12 mr-4"></div>
        <h2 className="text-3xl font-black tracking-widest text-white uppercase italic">Certificates</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {certs.map((cert, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-6 p-8 bg-black/40 border border-white/5 rounded-3xl hover:border-green-500/40 transition-all duration-500 group hover:shadow-[0_0_30px_rgba(34,197,94,0.05)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/0 to-green-500/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            
            <div className="p-5 bg-gray-900 rounded-2xl text-gray-500 group-hover:text-green-400 group-hover:bg-green-900/10 transition-all border border-white/5 shadow-inner">
              {cert.icon}
            </div>
            
            <div className="flex flex-col relative z-10">
              <h3 className="text-2xl font-black text-gray-200 group-hover:text-white transition-colors leading-tight">
                {cert.name}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-green-500/80 text-xs font-black tracking-widest uppercase">
                  From {cert.issuer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
