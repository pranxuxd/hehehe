import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

export default function PhotoSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  // Collection of Avani's photos
  const photos: Photo[] = [
    { id: 1, src: '/src/assets/images/avani1.png', alt: 'Avani 1' },
    { id: 2, src: '/src/assets/images/avani2.png', alt: 'Avani 2' },
    { id: 3, src: '/src/assets/images/avani3.png', alt: 'Avani 3' },
    { id: 4, src: '/src/assets/images/avani4.png', alt: 'Avani 4' },
    { id: 5, src: '/src/assets/images/avani5.png', alt: 'Avani 5' },
    { id: 6, src: '/src/assets/images/avani6.png', alt: 'Avani 6' },
    { id: 7, src: '/src/assets/images/avani7.png', alt: 'Avani 7' },
    { id: 8, src: '/src/assets/images/avani8.png', alt: 'Avani 8' },
    { id: 9, src: '/src/assets/images/avani9.png', alt: 'Avani 9' },
    { id: 10, src: '/src/assets/images/avani10.png', alt: 'Avani 10' },
    { id: 11, src: '/src/assets/images/avani11.png', alt: 'Avani 11' },
    { id: 12, src: '/src/assets/images/avani12.png', alt: 'Avani 12' },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % photos.length);
      }, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, photos.length]);

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % photos.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + photos.length) % photos.length);
  };

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <section id="slideshow" className="py-20 bg-soft-pink">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-cormorant text-3xl md:text-4xl mb-2 text-muted-gray">Memories with Avani</h2>
        <p className="font-dancing text-xl text-rose-gold mb-12">A slideshow of our beautiful moments</p>
        
        <div className="relative max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <div className="relative aspect-video bg-black flex items-center justify-center">
            <img 
              src={photos[currentIndex].src} 
              alt={photos[currentIndex].alt}
              className="max-h-full max-w-full object-contain"
            />
            
            {/* Slideshow controls */}
            <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-50 text-white p-3 flex justify-between items-center">
              <button 
                onClick={goToPrevious}
                className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
                aria-label="Previous photo"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="text-center">
                <button
                  onClick={togglePlay}
                  className="px-4 py-1 rounded-full bg-rose-gold text-white text-sm hover:bg-opacity-80 transition-colors duration-300"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <p className="text-xs mt-1">
                  {currentIndex + 1}/{photos.length}
                </p>
              </div>
              
              <button 
                onClick={goToNext}
                className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
                aria-label="Next photo"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Navigate arrows on the sides */}
            <button 
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Thumbnail navigation */}
        <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-4 max-w-3xl mx-auto">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-12 h-12 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                currentIndex === index ? 'border-rose-gold scale-110' : 'border-transparent opacity-70'
              }`}
            >
              <img
                src={photo.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}