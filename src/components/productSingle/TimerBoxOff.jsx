import React, { useState, useEffect } from 'react';

const TimerBoxOff = ({ startDay, startHour, startMinute, startSecond }) => {
  const [seconds, setSeconds] = useState(startSecond);
  const [minutes, setMinutes] = useState(startMinute);
  const [hours, setHours] = useState(startHour);
  const [days, setDays] = useState(startDay);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        let newSeconds = prevSeconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        if (newDays < 0) {
          clearInterval(interval);
          return 0;
        }

        return newSeconds;
      });

      setMinutes(prevMinutes => prevMinutes);
      setHours(prevHours => prevHours);
      setDays(prevDays => prevDays);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [days, hours, minutes]);

  return (
    <div>
      <div className="timer flex">
        <span className="text-lg mr-3 bg-gray-200  py-2 px-4 text-center font-bold text-gray-500" id="days">
          {days.toString().padStart(2, "0")}
          <p className='text-sm font-normal'>Days</p>
        </span>
        <span className="text-lg mr-3 bg-gray-200  py-2 px-4 text-center font-bold text-gray-500" id="hours">
          {hours.toString().padStart(2, "0")}
          <p className='text-sm font-normal'>Hours</p>
        </span>
        <span className="text-lg mr-3 bg-gray-200  py-2 px-5 text-center font-bold text-gray-500" id="minutes">
          {minutes.toString().padStart(2, "0")}
          <p className='text-sm font-normal'>Min</p>
        </span>
        <span className="text-lg mr-3 bg-gray-200  py-2 px-6 text-center font-bold text-gray-500" id="seconds">
          {seconds.toString().padStart(2, "0")}
          <p className='text-sm font-normal'>Sec</p>
        </span>
      </div>
    </div>
  );
};

export default TimerBoxOff;
