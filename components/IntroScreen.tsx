import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 font-press-start">
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="grid grid-cols-12 gap-2 h-full w-full">
            {Array.from({length: 48}).map((_, i) => (
                <div key={i} className="border border-arcade-neonPurple bg-transparent"></div>
            ))}
        </div>
      </div>

      <div className="text-center space-y-16 z-10 flex flex-col items-center px-4 w-full max-w-6xl">
        <p className="text-arcade-neonBlue text-3xl md:text-5xl lg:text-7xl mb-8 animate-pulse drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] leading-tight tracking-wider">
          MUHAMMAD RAMADHAN RAYYAN
        </p>

        <div className="flex flex-col items-center gap-8">
            <button 
            onClick={onStart}
            className="group relative inline-flex items-center justify-center p-6 px-12 md:px-20 md:py-8 overflow-hidden font-medium text-white transition duration-300 ease-out border-4 border-arcade-neonPink rounded shadow-[0_0_30px_#ff00ff] hover:shadow-[0_0_60px_#ff00ff] hover:scale-105 active:scale-95"
            >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-arcade-neonPink group-hover:translate-x-0 ease">
                <i className="fas fa-gamepad text-4xl md:text-6xl"></i>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-arcade-neonPink transition-all duration-300 transform group-hover:translate-x-full ease text-2xl md:text-5xl whitespace-nowrap">
                INSERT COIN
            </span>
            <span className="relative invisible text-2xl md:text-5xl whitespace-nowrap">INSERT COIN</span>
            </button>

            <p className="text-gray-400 text-lg md:text-3xl font-vt323 tracking-widest animate-pulse">
            (CLICK TO START & ENABLE AUDIO)
            </p>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;