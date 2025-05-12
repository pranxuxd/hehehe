import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import CountdownTimer from '@/components/CountdownTimer';
import PhotoGallery from '@/components/PhotoGallery';
import LoveNotes from '@/components/LoveNotes';
import MusicPlayer from '@/components/MusicPlayer';
import WishesForm from '@/components/WishesForm';
import Footer from '@/components/Footer';

export default function Home() {
  // Set Avani's birthday date - adjust as needed
  const birthdayDate = new Date('2023-12-31T00:00:00');
  
  return (
    <Fragment>
      <Helmet>
        <title>Happy Birthday Avani | A Special Celebration</title>
        <meta name="description" content="A special birthday celebration filled with love, memories, and wishes for Avani's birthday." />
        <meta property="og:title" content="Happy Birthday Avani" />
        <meta property="og:description" content="A special birthday celebration filled with love, memories, and wishes for Avani's birthday." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Header />
      <Navigation />
      <CountdownTimer targetDate={birthdayDate} />
      <PhotoGallery />
      <LoveNotes />
      <MusicPlayer />
      <WishesForm />
      <Footer />
    </Fragment>
  );
}
