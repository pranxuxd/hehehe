import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import PhotoGallery from '@/components/PhotoGallery';
import LoveNotes from '@/components/LoveNotes';
import MusicPlayer from '@/components/MusicPlayer';
import Footer from '@/components/Footer';
import SurpriseGift from '@/components/SurpriseGift';
import PhotoSlideshow from '@/components/PhotoSlideshow';
import BackgroundMusic from '@/components/BackgroundMusic';
import CountdownTimer from '@/components/CountdownTimer';
import PoetrySection from '@/components/PoetrySection';

export default function Home() {
  // Set Avani's birthday date
  const birthdayDate = new Date('2025-05-25T00:00:00');
  
  return (
    <Fragment>
      <Helmet>
        <title>Happy Birthday Avani | A Special Celebration</title>
        <meta name="description" content="A special birthday celebration filled with love, memories, and wishes for Avani's birthday." />
        <meta property="og:title" content="Happy Birthday Avani" />
        <meta property="og:description" content="A special birthday celebration filled with love, memories, and wishes for Avani's birthday." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <BackgroundMusic />
      <Header />
      <Navigation />
      
      <div className="bg-gradient-to-br from-baby-pink-light via-lavender to-soft-pink py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-20">🐱</div>
          <div className="absolute top-20 right-20 text-3xl animate-pulse opacity-30">🎀</div>
          <div className="absolute bottom-20 left-20 text-4xl animate-bounce delay-1000 opacity-20">😸</div>
          <div className="absolute bottom-10 right-10 text-3xl animate-pulse delay-500 opacity-30">💕</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-cormorant text-3xl md:text-4xl mb-4 text-deep-lavender">Counting Down to Your Special Day 🎂</h2>
          <CountdownTimer targetDate={birthdayDate} />
        </div>
      </div>
      
      <PhotoGallery />
      <PhotoSlideshow />
      <PoetrySection />
      <LoveNotes />
      <SurpriseGift />
      <MusicPlayer />
      <Footer />
    </Fragment>
  );
}
