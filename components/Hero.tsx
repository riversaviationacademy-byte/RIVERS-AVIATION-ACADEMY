
import React from 'react';
import { WHATSAPP_1 } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 scale-105 animate-[slow-zoom_20s_infinite_alternate]"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=2070")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/70 to-blue-900/20"></div>
        {/* Animated Overlay Dots */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl text-white">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-blue-100">Admissions Open 2026-2027</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading leading-tight mb-8">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white italic">Aviation Career</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-light max-w-2xl">
            Rivers Aviation Academy provides premier training for Cabin Crew, Ground Staff, and Strategic Management. Join the elite league of flight professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#courses" 
              className="bg-white text-blue-950 px-10 py-5 rounded-2xl font-bold text-center shadow-2xl transition-all transform hover:-translate-y-1 hover:bg-blue-50 active:scale-95 flex items-center justify-center group"
            >
              Explore Programs
              <i className="fas fa-arrow-down ml-2 text-xs transition-transform group-hover:translate-y-1"></i>
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_1.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600/40 backdrop-blur-lg border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-center flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-1 hover:bg-blue-600/60"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              <span>Live Counselor Chat</span>
            </a>
          </div>
          
          <div className="mt-20 flex flex-wrap items-center gap-12 opacity-80 border-t border-white/10 pt-10">
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold font-heading text-blue-300">#1</div>
              <div className="text-[10px] leading-tight uppercase tracking-widest text-slate-300">Academy in <br/>Industry Choice</div>
            </div>
            <div className="w-[1px] h-10 bg-white/20 hidden sm:block"></div>
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold font-heading text-blue-300">100%</div>
              <div className="text-[10px] leading-tight uppercase tracking-widest text-slate-300">Placement <br/>Assistance</div>
            </div>
            <div className="w-[1px] h-10 bg-white/20 hidden sm:block"></div>
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-bold font-heading text-blue-300">Global</div>
              <div className="text-[10px] leading-tight uppercase tracking-widest text-slate-300">Certification <br/>Standards</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
