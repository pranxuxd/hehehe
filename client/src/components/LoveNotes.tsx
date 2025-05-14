import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitLoveNote } from '@/lib/utils';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface LoveNote {
  id: number;
  message: string;
  createdAt: string;
}

export default function LoveNotes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteText, setNoteText] = useState('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: loveNotes = [] } = useQuery<LoveNote[]>({
    queryKey: ['/api/love-notes'],
  });

  const createNoteMutation = useMutation({
    mutationFn: submitLoveNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/love-notes'] });
      setNoteText('');
      setIsModalOpen(false);
      toast({
        title: 'Love note saved',
        description: 'Your message of love has been added.',
      });
    },
    onError: () => {
      toast({
        title: 'Failed to save note',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = () => {
    if (!noteText.trim()) {
      toast({
        title: 'Empty note',
        description: 'Please write something in your love note.',
        variant: 'destructive',
      });
      return;
    }
    
    createNoteMutation.mutate(noteText);
  };
  
  // Hearts and icons for love notes
  const icons = [
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    'https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    'https://pixabay.com/get/g8e835e31e48c9cdf31cc3cad3858af033a59f630064b4973ee35a79958e57164629351dd5337cb3cb3458d78aed7e19190b56f650ab17b7eae7da60d80f1f03c_1280.jpg',
    'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
  ];

  // Default love notes if none available
  const defaultNotes = [
    {
      id: 1,
      message: 'Your beautiful eyes captivate me every time I look at you. They hold a universe of emotions that speak to my soul in ways words never could. Your smile can brighten even my darkest days.',
      greeting: 'To my dearest Avani,'
    },
    {
      id: 2,
      message: 'I love how you get excited about Hello Kitty and all the little things that bring you joy. Your childlike wonder and enthusiasm for life is one of the many reasons I fell in love with you.',
      greeting: 'My beautiful Avani,'
    },
    {
      id: 3,
      message: 'On your special day, I want you to know that you deserve all the happiness in the world. Your kindness, intelligence, and beauty inspire me every single day. You are my everything.',
      greeting: 'Happy Birthday Love,'
    },
    {
      id: 4,
      message: 'The way you look in traditional clothes takes my breath away. Your grace and elegance are matched only by your kind heart and loving nature. I am so lucky to have you in my life.',
      greeting: 'My Sunshine,'
    },
    {
      id: 5,
      message: 'From your childhood photos to now, your smile has always been radiant. Watching you grow into the amazing woman you are today has been the greatest privilege of my life.',
      greeting: 'My Precious,'
    },
    {
      id: 6,
      message: 'Even on your sleepy days when you\'re tired, you\'re still the most beautiful person in the world to me. Your authenticity and realness make me fall more in love with you each day.',
      greeting: 'To My Heart,'
    }
  ];

  const notesToDisplay = loveNotes.length > 0 ? loveNotes : defaultNotes;

  return (
    <section id="messages" className="py-20 bg-soft-pink bg-opacity-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-cormorant text-3xl md:text-4xl mb-2 text-muted-gray">Love Notes</h2>
        <p className="font-dancing text-xl text-rose-gold mb-12">Words from my heart to yours</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            {notesToDisplay.map((note, index) => (
              <div 
                key={note.id} 
                className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300"
              >
                <p className="font-dancing text-rose-gold text-2xl mb-4">
                  {loveNotes.length > 0 ? `"${note.message.substring(0, 15)}..."` : `"${note.greeting}"`}
                </p>
                <p className="font-lato text-muted-gray mb-6">
                  {note.message}
                </p>
                <div className="flex justify-center">
                  {/* Rotate through icons */}
                  <img src={icons[index % icons.length]} alt="Love icon" className="w-10 h-10 object-contain opacity-50" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <Button 
              onClick={() => setIsModalOpen(true)} 
              className="px-6 py-3 bg-rose-gold hover:bg-opacity-80 text-white rounded-full transition-colors duration-300 shadow-md"
            >
              Add Your Own Note
            </Button>
          </div>
          
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="bg-white rounded-lg p-8 max-w-md w-full">
              <DialogHeader>
                <DialogTitle className="font-cormorant text-2xl mb-4 text-rose-gold">Write a Love Note</DialogTitle>
              </DialogHeader>
              <Textarea 
                className="w-full p-3 border border-lavender rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-rose-gold"
                placeholder="Express your feelings..."
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
              <DialogFooter className="flex justify-end mt-4 space-x-3">
                <Button 
                  variant="ghost" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-muted-gray hover:text-rose-gold transition-colors duration-300"
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSubmit}
                  disabled={createNoteMutation.isPending}
                  className="px-4 py-2 bg-rose-gold hover:bg-opacity-80 text-white rounded-lg transition-colors duration-300"
                >
                  {createNoteMutation.isPending ? 'Saving...' : 'Save Note'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
