"use client";

import React, { useState, useEffect, useCallback } from 'react';

interface CountdownProps {
  targetDate: number;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  // Memoize the calculateTimeLeft function to ensure its reference is stable
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = targetDate - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, [calculateTimeLeft]);

  const formatTime = (time: TimeLeft) => {
    const formattedTime = Object.keys(time)
      .map((interval) => {
        const key = interval as keyof TimeLeft;
        return `${time[key].toString().padStart(2, '0')}`;
      })
      .join(':');

    return formattedTime;
  };

  return (
    <div className="flex items-center justify-center h-20 bg-gradient-to-b from-gray-500 to-black perspective-45rem">
      <div className="text-6xl text-slate-400 font-mono shadow-md shadow-slate-400 transform-style-3d rotateX-15deg">
        {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default Countdown;

