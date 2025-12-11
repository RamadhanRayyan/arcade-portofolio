import React, { useState, useRef, useEffect } from 'react';
import music from '../assets/Six Days (Remix) [W3_c4-4OMbM].mp3';

interface MusicPlayerProps {
  autoStart?: boolean;
}

// Using a retro synthwave style track (Royalty Free)
const MUSIC_URL = music; 

const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStart = false }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Initial volume 30%
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (autoStart && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.log("Autoplay blocked, waiting for interaction", e));
    }
  }, [autoStart]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (!isNaN(audioRef.current.duration)) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={MUSIC_URL}
        loop
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
      />

      {/* Control Panel (Popup) */}
      {isOpen && (
        <div className="mb-4 bg-arcade-dark border-4 border-arcade-neonPink p-4 rounded-lg shadow-[0_0_20px_rgba(255,0,255,0.5)] w-64 text-arcade-neonBlue font-vt323">
          <h3 className="text-xl mb-2 text-center text-arcade-neonYellow border-b border-arcade-neonYellow pb-1">
            <i className="fas fa-compact-disc fa-spin mr-2"></i>BOOMBOX
          </h3>
          
          {/* Progress Bar */}
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1 text-white">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-arcade-neonPink"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-2">
            <button 
              onClick={togglePlay}
              className="text-arcade-neonGreen hover:text-white transition-colors text-3xl focus:outline-none"
            >
              {isPlaying ? <i className="fas fa-pause-circle"></i> : <i className="fas fa-play-circle"></i>}
            </button>
            
            <div className="flex items-center gap-2">
              <i className="fas fa-volume-down text-xs text-gray-400"></i>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-arcade-neonBlue"
              />
              <i className="fas fa-volume-up text-xs text-gray-400"></i>
            </div>
          </div>
          
          <div className="text-center text-xs text-gray-500 animate-pulse">
            {isPlaying ? "NOW PLAYING..." : "PAUSED"}
          </div>
        </div>
      )}

      {/* Main Speaker Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-16 h-16 rounded-full border-4 border-arcade-neonBlue bg-black text-white 
          flex items-center justify-center text-2xl shadow-[0_0_15px_#00ffff]
          hover:scale-110 transition-transform duration-200
          ${isPlaying ? 'animate-pulse-fast' : ''}
        `}
      >
        <i className={`fas ${isPlaying ? 'fa-volume-high' : 'fa-volume-mute'}`}></i>
      </button>
    </div>
  );
};

export default MusicPlayer;
