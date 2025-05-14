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
    { id: 'gallery', label: 'Her' },
    { id: 'messages', label: 'Love Notes' },
    { id: 'music', label: 'Music' }
  ];

  const handleNavClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <nav 
      id="navigation" 
      className={`sticky top-0 z-50 bg-white py-4 transition-shadow duration-300 ${isSticky ? 'bg-opacity-95 shadow-sm' : 'bg-opacity-100'}`}
    >
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center space-x-1 md:space-x-8">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-2 font-cormorant text-lg text-muted-gray hover:text-rose-gold transition-colors duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
