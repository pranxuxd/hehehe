import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart } from 'lucide-react';
import { formatTime } from '@/lib/utils';
import saiyyanSong from '@/assets/music/saiyyan.mp3';

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  src: string;
}

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Playlist of romantic songs
  const playlist: Song[] = [
    {
      id: 1,
      title: "Forever Love",
      artist: "Romantic Melodies",
      duration: 158,
      src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c9d4818250.mp3?filename=sweet-love-113409.mp3"
    },
    {
      id: 2,
      title: "Love Ballad",
      artist: "Acoustic Dreams",
      duration: 153,
      src: "https://cdn.pixabay.com/download/audio/2023/06/21/audio_9e6c5f470c.mp3?filename=in-love-185587.mp3"
    },
    {
      id: 3,
      title: "Heart Symphony",
      artist: "Piano Emotions",
      duration: 180,
      src: "https://cdn.pixabay.com/download/audio/2022/04/27/audio_99cc771722.mp3?filename=inspiring-cinematic-ambient-116199.mp3"
    },
    {
      id: 4,
      title: "Together Forever",
      artist: "Soulful Harmony",
      duration: 140,
      src: "https://cdn.pixabay.com/download/audio/2022/04/20/audio_9a1fe17f6c.mp3?filename=lofi-chill-14492.mp3"
    },
    {
      id: 5,
      title: "My Avani",
      artist: "Special Dedication",
      duration: 134,
      src: "https://cdn.pixabay.com/download/audio/2022/10/31/audio_9a68a1fde3.mp3?filename=emotional-piano-soundtrack-138306.mp3"
    },
    {
      id: 6,
      title: "Saiyyan - Tujhe Jeet Jeet Haru",
      artist: "Special For You",
      duration: 210,
      src: saiyyanSong
    }
  ];

  const currentSong = playlist[currentSongIndex];
  
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(currentSong.src);
      
      // Add event listeners
      audioRef.current.addEventListener('timeupdate', updateProgress);
      audioRef.current.addEventListener('ended', handleSongEnd);
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('timeupdate', updateProgress);
        audioRef.current.removeEventListener('ended', handleSongEnd);
      }
    };
  }, []);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = currentSong.src;
      audioRef.current.load();
      
      if (isPlaying) {
        audioRef.current.play().catch(err => console.error("Playback failed:", err));
      }
    }
  }, [currentSongIndex]);
  
  const updateProgress = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  
  const handleSongEnd = () => {
    nextSong();
  };
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("Playback failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const previousSong = () => {
    setCurrentSongIndex(prev => (prev === 0 ? playlist.length - 1 : prev - 1));
  };
  
  const nextSong = () => {
    setCurrentSongIndex(prev => (prev === playlist.length - 1 ? 0 : prev + 1));
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  const handleSongSelect = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.error("Playback failed:", err));
    }
  };
  
  const progressPercentage = currentSong ? (currentTime / currentSong.duration) * 100 : 0;

  return (
    <section id="music" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-cormorant text-3xl md:text-4xl mb-2 text-muted-gray">Our Playlist</h2>
        <p className="font-dancing text-xl text-rose-gold mb-12">Melodies that remind me of you</p>
        
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1501761095094-94d36f57edbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                alt="Love songs album cover" 
                className="w-16 h-16 rounded-md shadow object-cover"
              />
              <div className="ml-4 text-left">
                <h3 className="font-cormorant text-xl text-muted-gray">
                  {currentSong.title}
                </h3>
                <p className="font-lato text-sm text-rose-gold">
                  {currentSong.artist}
                </p>
              </div>
            </div>
            <button 
              onClick={toggleFavorite}
              className={`text-rose-gold hover:text-opacity-70 transition-colors duration-300 ${isFavorite ? 'opacity-100' : 'opacity-60'}`}
            >
              <Heart fill={isFavorite ? "currentColor" : "none"} size={20} />
            </button>
          </div>
          
          <div className="relative mb-4">
            <div className="h-1 bg-lavender rounded-full">
              <div 
                className="h-full bg-rose-gold rounded-full" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-muted-gray">
                {formatTime(currentTime)}
              </span>
              <span className="text-xs text-muted-gray">
                {formatTime(currentSong.duration)}
              </span>
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-6">
            <button 
              onClick={previousSong}
              className="text-muted-gray hover:text-rose-gold transition-colors duration-300"
            >
              <SkipBack size={20} />
            </button>
            <button 
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-rose-gold text-white flex items-center justify-center hover:bg-opacity-80 transition-colors duration-300"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
            </button>
            <button 
              onClick={nextSong}
              className="text-muted-gray hover:text-rose-gold transition-colors duration-300"
            >
              <SkipForward size={20} />
            </button>
          </div>
          
          <div className="mt-8">
            <h4 className="font-cormorant text-lg mb-3 text-muted-gray text-left">Up Next:</h4>
            <ul className="space-y-3 text-left">
              {playlist.map((song, index) => (
                <li 
                  key={song.id}
                  onClick={() => handleSongSelect(index)}
                  className={`flex items-center py-2 hover:bg-lavender hover:bg-opacity-20 rounded px-2 transition-colors duration-300 cursor-pointer ${currentSongIndex === index ? 'bg-lavender bg-opacity-20' : ''}`}
                >
                  <span className="w-6 text-center text-muted-gray">{index + 1}</span>
                  <div className="ml-3">
                    <p className="font-lato text-muted-gray">{song.title}</p>
                    <p className="text-xs text-rose-gold">{song.artist}</p>
                  </div>
                  <span className="ml-auto text-xs text-muted-gray">{formatTime(song.duration)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
