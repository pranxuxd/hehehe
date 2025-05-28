import { useEffect, useState } from 'react';
import { scrollToElement } from '@/lib/utils';

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navigationElement = document.getElementById('navigation');
      if (navigationElement) {
        const position = navigationElement.getBoundingClientRect().top;
        setIsSticky(position <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'gallery', label: '📸 Gallery', emoji: '🐱' },
    { id: 'slideshow', label: '🎬 Slideshow', emoji: '💕' },
    { id: 'poetry', label: '💝 Poetry', emoji: '🎀' },
    { id: 'notes', label: '💌 Love Notes', emoji: '😸' },
    { id: 'gifts', label: '🎁 Gifts', emoji: '✨' },
    { id: 'music', label: '🎵 Music', emoji: '🐾' }
  ];

  const handleNavClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <nav 
      id="navigation" 
      className={`sticky top-0 z-50 bg-gradient-to-r from-baby-pink-light to-lavender-light py-4 transition-shadow duration-300 border-b-4 border-baby-pink ${isSticky ? 'bg-opacity-95 shadow-lg' : 'bg-opacity-100'}`}
    >
      <div className="container mx-auto px-4 relative">
        {/* Cute floating decorations */}
        <div className="absolute top-1 left-4 text-lg opacity-60 animate-bounce">🐱</div>
        <div className="absolute top-1 right-4 text-lg opacity-60 animate-pulse">🎀</div>
        
        <ul className="flex flex-wrap justify-center space-x-2 md:space-x-6">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="px-4 py-2 font-lato text-sm md:text-base text-deep-lavender hover:text-hello-kitty-pink transition-all duration-300 rounded-full hover:bg-white hover:bg-opacity-80 hover:scale-105 flex items-center space-x-1"
              >
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
