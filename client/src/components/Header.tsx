import { ChevronDown } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';
import avani3 from '@/assets/images/avani3.png';

export default function Header() {
  const handleExploreClick = () => {
    scrollToElement('navigation');
  };

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden animate-fade-in">
      <div className="absolute inset-0 bg-cover bg-center z-0" 
           style={{ 
             backgroundImage: `url(${avani3})`, 
             backgroundColor: "rgba(249, 213, 229, 0.5)", 
             backgroundBlendMode: "overlay" 
           }}></div>
      
      <div className="relative z-10 text-center px-6 py-10 bg-white bg-opacity-85 rounded-lg shadow-md max-w-lg mx-auto animate-scale-in">
        <h1 className="font-dancing text-5xl md:text-6xl mb-4 text-rose-gold">Happy Birthday</h1>
        <h2 className="font-cormorant text-4xl font-light tracking-wide text-muted-gray mb-6">Avani , my dear wife </h2>
        <p className="font-lato text-lg mb-8">A special birthday celebration filled with love , i love you my dear avani, you came you are the flower of my life may this day be special for you because it is the birthday of my own love , my wife , meri pattagobhi.i love you and forever hold your hands arms everything for you i would let the world in your feet my dear just order and keep smiling you know i can die for your smile</p>
        <button 
          onClick={handleExploreClick}
          className="inline-block py-3 px-8 bg-soft-pink hover:bg-rose-gold transition-colors duration-300 text-white rounded-full font-medium tracking-wide"
        >
          Explore ↓
        </button>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center animate-bounce">
        <button onClick={handleExploreClick} className="text-rose-gold">
          <ChevronDown size={24} />
        </button>
      </div>
    </header>
  );
}
