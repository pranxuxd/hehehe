import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

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
      title: 'Our First Date',
      description: 'That magical day we\'ll never forget',
      imageSrc: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 2,
      title: 'Sunday Picnics',
      description: 'Our favorite weekend tradition',
      imageSrc: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 3,
      title: 'Beach Sunsets',
      description: 'When time stood still for us',
      imageSrc: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 4,
      title: 'Dancing in the Rain',
      description: 'Spontaneous joy with you',
      imageSrc: 'https://images.unsplash.com/photo-1511715282680-fbf93a50e721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 5,
      title: 'Mountain Adventures',
      description: 'Reaching new heights together',
      imageSrc: 'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    },
    {
      id: 6,
      title: 'Endless Laughter',
      description: 'Your smile brightens my world',
      imageSrc: 'https://images.unsplash.com/photo-1523286877159-d9636545890c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
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
