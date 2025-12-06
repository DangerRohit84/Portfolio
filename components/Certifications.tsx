import React from 'react';
import { Award, ShieldCheck, Database, FileSpreadsheet } from 'lucide-react';

const Certifications: React.FC = () => {
  const certs = [
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      icon: <ShieldCheck size={32} />
    },
    {
      name: "C Programming",
      issuer: "Cisco",
      icon: <Award size={32} />
    },
    {
      name: "PowerBI",
      issuer: "Microsoft",
      icon: <Database size={32} />
    },
    {
      name: "Microsoft Excel",
      issuer: "Microsoft",
      icon: <FileSpreadsheet size={32} />
    }
  ];

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex items-center mb-16">
        <div className="h-px bg-green-500 w-12 mr-4"></div>
        <h2 className="text-3xl font-bold tracking-widest text-white uppercase">Certifications Awarded</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {certs.map((cert, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-4 p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl hover:border-green-500/40 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
          >
            <div className="p-4 bg-gray-800/50 rounded-lg text-gray-400 group-hover:text-green-400 group-hover:bg-green-900/10 transition-all">
              {cert.icon}
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
                {cert.name}
              </h3>
              <p className="text-green-500/80 text-sm font-mono mt-1">
                Issued by {cert.issuer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;