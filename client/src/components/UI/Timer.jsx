import React from 'react';
import { useTimer } from 'react-timer-hook';

const Timer = (props) => {

  const expDate = new Date(props.expirationDate);

  const currentDate = Date.now()
  const now = new Date(currentDate)

  const expDateSeconds = expDate.getTime() / 1000;
  const nowDateSeconds = now.getTime() / 1000;

  const distance = Math.round(expDateSeconds) - Math.round(nowDateSeconds)

  const time = new Date();
  time.setSeconds(time.getSeconds() + distance);
 

  const expiryTimestamp = time;

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp, onExpire: () => console.log('Timer expired') });

  return (
    <div style={{display: 'flex', gap: '2px'}}>
      <div>{days < 10 ? "0" + days : days}</div>
      :
      <div>{hours < 10 ? "0" + hours : hours}</div>
      :
      <div>{minutes < 10 ? "0" + minutes : minutes}</div>
      :
      <div>{seconds < 10 ? "0" + seconds : seconds}</div>
    </div>
  )
}

export default Timer;
