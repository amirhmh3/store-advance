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
        <span className="mr-3 bg-gray-200 rounded-2xl p-1 px-2 text-center" id="days">
          {days.toString().padStart(2, "0")}
          <p className='text-sm'>Days</p>
        </span>
        <span className="mx-3 bg-gray-200 rounded-2xl p-1 text-center" id="hours">
          {hours.toString().padStart(2, "0")}
          <p className='text-sm'>Hours</p>
        </span>
        <span className="mx-3 bg-gray-200 rounded-2xl p-1 px-3 text-center" id="minutes">
          {minutes.toString().padStart(2, "0")}
          <p className='text-sm'>Min</p>
        </span>
        <span className="mx-3 bg-gray-200 rounded-2xl p-1 px-3 text-center" id="seconds">
          {seconds.toString().padStart(2, "0")}
          <p className='text-sm'>Sec</p>
        </span>
      </div>
    </div>
  );
};

export default TimerBoxOff;
