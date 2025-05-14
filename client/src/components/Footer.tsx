import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 bg-soft-pink bg-opacity-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-dancing text-3xl mb-4 text-rose-gold">Happy Birthday Avani!</h2>
        <p className="font-lato text-muted-gray mb-6">Made with love, just for you.</p>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-gray">
          <span>&copy; {new Date().getFullYear()}</span>
          <Heart size={14} className="text-rose-gold" fill="currentColor" />
          <span>Created for the love of my life</span>
        </div>
      </div>
    </footer>
  );
}