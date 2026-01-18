
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", light = false }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" className={light ? "stroke-white/20" : "stroke-blue-900/10"} strokeWidth="1" />
        <path d="M20 70C35 55 45 75 60 60C75 45 80 50 90 40" className="stroke-blue-500" strokeWidth="4" strokeLinecap="round" />
        <path d="M15 80C30 65 40 85 55 70C70 55 75 60 85 50" className="stroke-blue-400/50" strokeWidth="2" strokeLinecap="round" />
        <path d="M85 35L92 28L80 26L85 35Z" fill={light ? "white" : "#1e3a8a"} />
        <path d="M40 30L85 35L45 45L40 30Z" fill={light ? "white" : "#1e3a8a"} />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-bold tracking-tighter ${light ? 'text-white' : 'text-blue-950'}`}>
          RIVERS
        </span>
        <span className="text-[10px] font-black tracking-[0.2em] text-blue-500 uppercase">
          AVIATION
        </span>
      </div>
    </div>
  );
};

export default Logo;
