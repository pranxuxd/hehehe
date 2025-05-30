import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import PhotoGallery from "@/components/PhotoGallery";
import LoveNotes from "@/components/LoveNotes";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";
import SurpriseGift from "@/components/SurpriseGift";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import BackgroundMusic from "@/components/BackgroundMusic";
import PoetrySection from "@/components/PoetrySection";


export default function Home() {
  // Set Avani's birthday date
  const birthdayDate = new Date("2025-06-02T00:00:00");

  return (
    <Fragment>
      <Helmet>
        <title>
          Happy Birthday my dearrr Avani | A Special Celebration A special
          birthday celebration filled with love , i love you my dear avani , you
          came you are the flower of my life may this day be special for you
          because it is the birthday of my own love , my wife , meri pattagobhi
        </title>
        <meta
          name="description"
          content="A special birthday celebration filled with love , i love you my dear avani , you came you are the flower of my life may this day be special for you because it is the birthday of my own love , my wife , meri pattagobhi ."
        />
        <meta property="og:title" content="Happy Birthday Avani" />
        <meta
          property="og:description"
          content="A special birthday celebration filled with love, memories, and wishes for Avani's birthday."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <BackgroundMusic />
      <Header />

      <div className="bg-gradient-to-br fr  om-baby-pink-light via-lavender to-soft-pink py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 text-4xl animate-bounce opacity-20">
            🐱
          </div>
          <div className="absolute top-20 right-20 text-3xl animate-pulse opacity-30">
            🎀
          </div>
          <div className="absolute bottom-20 left-20 text-4xl animate-bounce delay-1000 opacity-20">
            😸
          </div>
          <div className="absolute bottom-10 right-10 text-3xl animate-pulse delay-500 opacity-30">
            💕
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-cormorant text-3xl md:text-4xl mb-4 text-deep-lavender">
            Happy Birthday My Sweet Avani! 🎂
          </h2>
          <p className="font-dancing text-2xl text-hello-kitty-pink">
            June 02, 2010 - Your Special Day! 💕
          </p>
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
