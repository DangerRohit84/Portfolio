
import React from 'react';
import { Trophy, Github, ExternalLink } from 'lucide-react';

// Custom SVG Icons matching the provided images
const LeetCodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="white"></path></svg>
);

const CodeChefIcon = () => (
  <img 
    src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/codechef.svg" 
    alt="CodeChef" 
    className="w-6 h-6 invert sepia saturate-[2] hue-rotate-[320deg] brightness-[0.9]"
  />
);

const HackerRankIcon = () => (
  <div className="flex items-center gap-0.5">
    <div className="text-white font-black text-lg leading-none">H</div>
    <div className="w-3.5 h-3.5 bg-[#2EC866] rounded-sm"></div>
  </div>
);

const Achievements: React.FC = () => {
  const stats = [
    {
      label: "CodeChef",
      value: "1000+",
      desc: "Coding Problems",
      icon: <CodeChefIcon />,
      url: "https://www.codechef.com/users/dangerrohit84"
    },
    {
      label: "LeetCode",
      value: "150+",
      desc: "Algorithms Solved",
      icon: <LeetCodeIcon />,
      url: "https://leetcode.com/dangerrohit84/"
    },
    {
      label: "HackerRank",
      value: "100+",
      desc: "Skill Tests",
      icon: <HackerRankIcon />,
      url: "https://www.hackerrank.com/dangerrohit84"
    },
    {
      label: "GitHub",
      value: "20+",
      desc: "Public Projects",
      icon: <Github className="text-white" />,
      url: "https://github.com/DangerRohit84"
    }
  ];

  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex items-center mb-16">
        <div className="h-px bg-green-500 w-12 mr-4 shadow-[0_0_10px_#22c55e]"></div>
        <h2 className="text-3xl font-black tracking-widest text-white uppercase italic">My Stats</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <a 
            key={idx} 
            href={stat.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gray-900/40 border border-white/5 p-8 rounded-3xl overflow-hidden hover:border-green-500/30 transition-all duration-500 backdrop-blur-md block hover:-translate-y-2"
          >
            <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
               <Trophy size={140} className="text-white" />
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-green-500">
              <ExternalLink size={16} />
            </div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-black/60 rounded-xl border border-white/10 group-hover:border-green-500/30 transition-all flex items-center justify-center min-w-[48px] min-h-[48px]">
                {stat.icon}
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-green-400 transition-colors">
                {stat.label}
              </span>
            </div>

            <div className="relative z-10">
              <div className="text-5xl font-black text-white mb-1 group-hover:scale-110 transition-transform origin-left tracking-tighter">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm font-medium">
                {stat.desc}
              </p>
            </div>
            
            <div className="mt-8 h-1 w-full bg-gray-800/50 rounded-full overflow-hidden relative z-10">
               <div className="h-full bg-gradient-to-r from-green-600 to-green-400 w-0 group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 p-10 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-[2.5rem] flex flex-col md:flex-row items-center md:items-start gap-8 backdrop-blur-sm">
        <div className="p-5 bg-green-500/20 rounded-2xl text-green-500 shadow-[0_0_30px_rgba(34,197,94,0.2)] animate-pulse">
           <Trophy size={40} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white mb-3 italic uppercase tracking-wider text-center md:text-left">Coding Journey</h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl text-center md:text-left font-medium">
            My path is paved with logic and persistence. By solving thousands of challenges across these platforms, I've developed a deep intuition for complex data structures and high-performance algorithms. Click on any stat to verify my profiles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
