import { useState, useEffect } from 'react';
import { calculateTimeRemaining } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="countdown" className="py-20 bg-lavender bg-opacity-30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-cormorant text-3xl md:text-4xl mb-12 text-muted-gray">Celebrating Your Special Day</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <h3 className="font-dancing text-2xl mb-6 text-rose-gold">The Big Day Countdown</h3>
          
          {timeRemaining.isPast ? (
            <div className="w-full p-2">
              <div className="bg-soft-pink bg-opacity-30 rounded-lg p-4">
                <span className="block text-2xl font-dancing text-rose-gold">Happy Birthday!</span>
                <span className="text-sm">Today is your special day!</span>
              </div>
            </div>
          ) : (
            <div className="flex justify-center flex-wrap" id="countdown-container">
              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-soft-pink bg-opacity-30 rounded-lg p-4">
                  <span id="days" className="block text-4xl font-cormorant font-light text-rose-gold">
                    {timeRemaining.days.toString().padStart(2, '0')}
                  </span>
                  <span className="text-sm uppercase tracking-wide">Days</span>
                </div>
              </div>
              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-soft-pink bg-opacity-30 rounded-lg p-4">
                  <span id="hours" className="block text-4xl font-cormorant font-light text-rose-gold">
                    {timeRemaining.hours.toString().padStart(2, '0')}
                  </span>
                  <span className="text-sm uppercase tracking-wide">Hours</span>
                </div>
              </div>
              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-soft-pink bg-opacity-30 rounded-lg p-4">
                  <span id="minutes" className="block text-4xl font-cormorant font-light text-rose-gold">
                    {timeRemaining.minutes.toString().padStart(2, '0')}
                  </span>
                  <span className="text-sm uppercase tracking-wide">Minutes</span>
                </div>
              </div>
              <div className="w-1/2 md:w-1/4 p-2">
                <div className="bg-soft-pink bg-opacity-30 rounded-lg p-4">
                  <span id="seconds" className="block text-4xl font-cormorant font-light text-rose-gold">
                    {timeRemaining.seconds.toString().padStart(2, '0')}
                  </span>
                  <span className="text-sm uppercase tracking-wide">Seconds</span>
                </div>
              </div>
            </div>
          )}
          
          <p className="mt-8 text-muted-gray">Every second brings us closer to celebrating you!</p>
        </div>
      </div>
    </section>
  );
}
