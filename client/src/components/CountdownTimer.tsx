import { useState, useEffect } from 'react';
import { calculateTimeRemaining } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="flex justify-center flex-wrap gap-4 my-8">
      <div className="bg-white p-5 rounded-lg shadow-md w-24 h-24 flex flex-col items-center justify-center">
        <span className="font-cormorant text-3xl text-rose-gold">{formatNumber(timeRemaining.days)}</span>
        <span className="font-lato text-xs text-muted-gray uppercase tracking-wider">Days</span>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-md w-24 h-24 flex flex-col items-center justify-center">
        <span className="font-cormorant text-3xl text-rose-gold">{formatNumber(timeRemaining.hours)}</span>
        <span className="font-lato text-xs text-muted-gray uppercase tracking-wider">Hours</span>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-md w-24 h-24 flex flex-col items-center justify-center">
        <span className="font-cormorant text-3xl text-rose-gold">{formatNumber(timeRemaining.minutes)}</span>
        <span className="font-lato text-xs text-muted-gray uppercase tracking-wider">Minutes</span>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-md w-24 h-24 flex flex-col items-center justify-center">
        <span className="font-cormorant text-3xl text-rose-gold">{formatNumber(timeRemaining.seconds)}</span>
        <span className="font-lato text-xs text-muted-gray uppercase tracking-wider">Seconds</span>
      </div>
    </div>
  );
}