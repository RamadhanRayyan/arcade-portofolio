import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import MusicPlayer from './components/MusicPlayer';
import ChatTerminal from './components/ChatTerminal';
import { GameState } from './types';
import foto from './assets/foto-guwa.jpg';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO);

  const startGame = () => {
    setGameState(GameState.PLAYING);
  };

  if (gameState === GameState.INTRO) {
    return <IntroScreen onStart={startGame} />;
  }

  return (
    <div className="min-h-screen font-press-start text-gray-200 relative crt">
      {/* Background Grid */}
      <div className="fixed inset-0 z-[-1]" 
           style={{
             backgroundImage: 'linear-gradient(rgba(45, 27, 78, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 27, 78, 0.2) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             backgroundPosition: 'center'
           }}>
      </div>

      <MusicPlayer autoStart={true} />

      {/* Header */}
      <header className="py-8 text-center border-b-4 border-arcade-neonBlue bg-black/80 sticky top-0 z-30 backdrop-blur-md">
        <h1 className="text-2xl md:text-4xl text-arcade-neonYellow text-shadow-glow">
          PLAYER: RAYYAN
        </h1>
        <p className="text-arcade-neonPink text-xs mt-2 font-vt323 text-2xl">FULLSTACK DEVELOPER - LVL. 99</p>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Profile Section */}
        <section className="mb-20 grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-6">
                <div className="bg-gray-900 border-2 border-arcade-neonBlue p-6 shadow-[5px_5px_0px_0px_#00ffff]">
                    <h2 className="text-xl text-arcade-neonGreen mb-4">
                        <i className="fas fa-user-astronaut mr-3"></i>CHARACTER BIO
                    </h2>
                    <p className="font-vt323 text-xl leading-relaxed text-gray-300">
                        Hello World! I am <span className="text-arcade-neonYellow">Muhammad Ramadhan Rayyan</span>. 
                        A passionate Fullstack Developer who loves building interactive web experiences. 
                        I specialize in modern technologies and solving complex puzzles in code.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                     <a href="https://github.com/" target="_blank" rel="noreferrer" 
                        className="bg-gray-800 hover:bg-gray-700 text-white p-4 border-2 border-white hover:border-arcade-neonPink transition-all cursor-pointer flex items-center gap-2">
                        <i className="fab fa-github text-2xl"></i> GITHUB
                     </a>
                     <a href="https://instagram.com/" target="_blank" rel="noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white p-4 border-2 border-white hover:border-arcade-neonPink transition-all cursor-pointer flex items-center gap-2">
                        <i className="fab fa-instagram text-2xl text-pink-500"></i> INSTAGRAM
                     </a>
                     <a href="https://wa.me/" target="_blank" rel="noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white p-4 border-2 border-white hover:border-arcade-neonGreen transition-all cursor-pointer flex items-center gap-2">
                        <i className="fab fa-whatsapp text-2xl text-green-500"></i> WHATSAPP
                     </a>
                </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                    <div className="absolute inset-0 bg-arcade-neonPink rounded-full opacity-20 group-hover:opacity-40 animate-pulse"></div>
                    <img 
                        src={foto} 
                        alt="Rayyan Avatar" 
                        className="rounded-full border-4 border-arcade-neonBlue shadow-[0_0_30px_#00ffff] w-full h-full object-cover p-2 bg-black"
                    />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black border-2 border-arcade-neonYellow px-4 py-1 text-arcade-neonYellow text-xs whitespace-nowrap">
                        READY PLAYER ONE
                    </div>
                </div>
            </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
             <div className="flex items-center gap-4 mb-8">
                <i className="fas fa-microchip text-arcade-neonPurple text-3xl"></i>
                <h2 className="text-2xl text-white">SKILL TREE</h2>
                <div className="h-1 flex-1 bg-gray-800 relative">
                    <div className="absolute top-0 left-0 h-full w-1/3 bg-arcade-neonPurple animate-pulse"></div>
                </div>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['React', 'TypeScript', 'Node.js', 'Tailwind', 'Next.js', 'PostgreSQL', 'GraphQL', 'Docker'].map((skill, i) => (
                    <div key={i} className="bg-gray-900/50 border border-gray-700 p-4 text-center hover:border-arcade-neonGreen hover:text-arcade-neonGreen transition-colors cursor-crosshair">
                        <i className="fas fa-code mb-2 block text-gray-500"></i>
                        <span className="font-vt323 text-xl">{skill}</span>
                    </div>
                ))}
             </div>
        </section>

        {/* Chat Section */}
        <section className="mb-20">
             <div className="flex items-center gap-4 mb-8">
                <i className="fas fa-terminal text-arcade-neonGreen text-3xl"></i>
                <h2 className="text-2xl text-white">AI TERMINAL</h2>
                <div className="h-1 flex-1 bg-gray-800 relative">
                   <div className="absolute top-0 right-0 h-full w-1/4 bg-arcade-neonGreen animate-pulse"></div>
                </div>
             </div>
             
             <ChatTerminal />
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black border-t-4 border-arcade-neonPink py-8 text-center font-vt323 text-xl">
        <p className="text-gray-500">© 2024 RAYYAN STUDIOS. ALL RIGHTS RESERVED.</p>
        <p className="text-gray-700 mt-2 text-sm">PRESS START TO CONTINUE</p>
      </footer>
    </div>
  );
};

export default App;
