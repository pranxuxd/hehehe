import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

// Import all of Avani's photos
import avani1 from '@/assets/images/avani1.png';
import avani2 from '@/assets/images/avani2.png';
import avani3 from '@/assets/images/avani3.png';
import avani4 from '@/assets/images/avani4.png';
import avani5 from '@/assets/images/avani5.png';
import avani6 from '@/assets/images/avani6.png';
import avani7 from '@/assets/images/avani7.png';
import avani8 from '@/assets/images/avani8.png';
import avani9 from '@/assets/images/avani9.png';
import avani10 from '@/assets/images/avani10.png';
import avani11 from '@/assets/images/avani11.png';
import avani12 from '@/assets/images/avani12.png';

interface MemoryPhoto {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);

  const memories: MemoryPhoto[] = [
    {
      id: 1,
      title: "Beautiful in Blue",
      description: "Your elegant style and grace captivate me every time",
      imageSrc: avani1
    },
    {
      id: 2,
      title: "Sweet Glance",
      description: "The way you look at me melts my heart",
      imageSrc: avani2
    },
    {
      id: 3,
      title: "Thoughtful Moment",
      description: "I love watching you lost in your thoughts",
      imageSrc: avani3
    },
    {
      id: 4,
      title: "Dreamy Eyes",
      description: "Your eyes hold a universe of dreams",
      imageSrc: avani4
    },
    {
      id: 5,
      title: "Playful Smile",
      description: "Your smile brightens even the darkest days",
      imageSrc: avani5
    },
    {
      id: 6,
      title: "Outdoor Adventures",
      description: "Every moment spent with you is a treasure",
      imageSrc: avani6
    },
    {
      id: 7,
      title: "Traditional Beauty",
      description: "You look stunning in traditional attire",
      imageSrc: avani7
    },
    {
      id: 8,
      title: "Childhood Memories",
      description: "Cherishing the innocence of your early years",
      imageSrc: avani8
    },
    {
      id: 9,
      title: "Cozy Moments",
      description: "The quiet times together are the most precious",
      imageSrc: avani9
    },
    {
      id: 10,
      title: "Adorable Hearts",
      description: "Your playful side makes me fall in love every day",
      imageSrc: avani10
    },
    {
      id: 11,
      title: "Sleepy Cuddles",
      description: "Even when you're tired, you're perfect",
      imageSrc: avani11
    },
    {
      id: 12,
      title: "Hello Kitty Fan",
      description: "Your cute side shows in everything you love",
      imageSrc: avani12
    }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-cormorant text-3xl md:text-4xl mb-2 text-muted-gray text-center">Our Precious Memories</h2>
        <p className="font-dancing text-xl text-rose-gold mb-12 text-center">Moments that tell our story</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map(memory => (
            <div 
              key={memory.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedPhoto(memory)}
            >
              <img 
                src={memory.imageSrc} 
                alt={memory.title} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-cormorant text-xl">{memory.title}</h3>
                  <p className="font-lato text-sm">{memory.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-3xl bg-white p-0 overflow-hidden">
          <DialogTitle className="sr-only">Photo Details</DialogTitle>
          {selectedPhoto && (
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3">
                <img 
                  src={selectedPhoto.imageSrc} 
                  alt={selectedPhoto.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/3 bg-white">
                <h3 className="font-cormorant text-2xl text-rose-gold mb-2">{selectedPhoto.title}</h3>
                <p className="font-lato text-muted-gray mb-4">{selectedPhoto.description}</p>
                <p className="font-dancing text-lg text-rose-gold">Love always, with you.</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
