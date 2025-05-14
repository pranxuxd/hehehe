import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import kinderJoyImg from '@/assets/images/kinder_joy.png';
import surpriseImg from '@/assets/images/surprise_image.png';

export default function SurpriseGift() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnwrapped, setIsUnwrapped] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleUnwrap = () => {
    setIsUnwrapped(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset after a short delay to ensure the animation doesn't show during closing
    setTimeout(() => {
      setIsUnwrapped(false);
    }, 300);
  };

  return (
    <section id="gifts" className="py-20 bg-soft-pink bg-opacity-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-cormorant text-3xl md:text-4xl mb-2 text-muted-gray">Special Gifts</h2>
        <p className="font-dancing text-xl text-rose-gold mb-12">Click to unwrap your surprises</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="font-cormorant text-2xl mb-4 text-rose-gold">First Gift</h3>
            <div className="mb-4 relative group cursor-pointer" onClick={handleOpen}>
              <img 
                src={kinderJoyImg} 
                alt="Kinder Joy" 
                className="w-48 h-auto mx-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-rose-gold text-white px-4 py-2 rounded-full text-sm">Tap to open</span>
              </div>
            </div>
            <p className="font-lato text-muted-gray">Click the Kinder Joy to unwrap your special surprise!</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="font-cormorant text-2xl mb-4 text-rose-gold">Second Gift</h3>
            <div className="flex justify-center items-center h-48 border-2 border-dashed border-lavender rounded-lg">
              <p className="text-muted-gray italic">Your artwork will be displayed here soon...</p>
            </div>
            <p className="font-lato text-muted-gray mt-4">A special creation just for you, coming soon!</p>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="bg-white max-w-md">
          <DialogHeader>
            <DialogTitle className="font-dancing text-2xl text-rose-gold text-center">
              {isUnwrapped ? "Surprise!" : "Open Your Kinder Joy"}
            </DialogTitle>
            <DialogDescription className="text-center">
              {isUnwrapped 
                ? "Look who's inside! It's me!" 
                : "Tap on the Kinder Joy to see what's inside..."}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex justify-center p-6">
            {isUnwrapped ? (
              <div className="animate-scale-in">
                <img 
                  src={surpriseImg} 
                  alt="Surprise!" 
                  className="max-h-80 rounded-lg shadow-lg"
                />
                <p className="mt-4 font-dancing text-xl text-rose-gold text-center">Happy Birthday, Avani!</p>
              </div>
            ) : (
              <div 
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={handleUnwrap}
              >
                <img 
                  src={kinderJoyImg} 
                  alt="Kinder Joy" 
                  className="max-h-48"
                />
                <p className="mt-4 font-lato text-sm text-center animate-pulse">Tap to open!</p>
              </div>
            )}
          </div>
          
          <div className="flex justify-center mt-4">
            <Button 
              variant="outline" 
              onClick={handleClose}
              className="rounded-full border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white transition-colors duration-300"
            >
              {isUnwrapped ? "Close" : "Maybe Later"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}