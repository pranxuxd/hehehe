import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import apocalypseSong from '@/assets/music/apocalypse.mp3';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    audioRef.current = new Audio(apocalypseSong);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("Audio playback failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <div className="fixed bottom-5 right-5 z-50 bg-white bg-opacity-80 p-3 rounded-full shadow-lg flex items-center space-x-2">
      <button 
        onClick={togglePlay}
        className="p-2 rounded-full bg-rose-gold text-white hover:bg-opacity-80 transition-colors duration-300"
        aria-label={isPlaying ? "Mute background music" : "Play background music"}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
      {isPlaying && (
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-20 accent-rose-gold"
        />
      )}
    </div>
  );
}