import styles from '../styles/Timer.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

interface TimerProps {
  key: any
  duration: number
  endTime: () => void
}

const Timer = ({ duration, endTime }: TimerProps) => {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={duration}
        size={120}
        isPlaying
        onComplete={endTime}
        colors={'#ED8274'}

      >
      { ({ remainingTime }:any ) => remainingTime }
      </CountdownCircleTimer>
    </div>
  );
}

export default Timer;