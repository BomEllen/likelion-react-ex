import { tm } from '@/utils/tw-merge';
import { useEffect, useRef, useState } from 'react';
import { PauseSolid, PlaySolid, StopSolid } from '@mynaui/icons-react';

const FPS = 1000 / 60;
const getDateNow = () => Date.now();

const formatTime = (time: number) => {
  const miliseconds = parseInt(`${time % 100}`, 10);
  const seconds = parseInt(`${(time / 1000) % 60}`, 10);
  const minutes = parseInt(`${(time / (1000 * 60)) % 60}`, 10);
  const hours = parseInt(`${(time / (1000 * 60 * 60)) % 60}`, 10);

  const [hh, mm, ss, ms] = [hours, minutes, seconds, miliseconds].map((time) =>
    time.toLocaleString('ko-KR', { minimumIntegerDigits: 2 })
  );

  return `${hh}:${mm}:${ss}:${ms}`;
};

type IntervalId = ReturnType<typeof setInterval>;

function StopWatch() {
  const [startTime, setStartTime] = useState(getDateNow);
  const [nowTime, setNowTime] = useState(getDateNow);
  const [recordTime, setRecordTime] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const intervalRef = useRef<IntervalId>(undefined);

  useEffect(() => {
    if (isStart) {
      setStartTime(getDateNow);
      setNowTime(getDateNow);

      intervalRef.current = setInterval(() => {
        setNowTime(getDateNow);
      }, FPS);
    } else {
      clearInterval(intervalRef.current);
      setRecordTime((prev) => prev + nowTime - startTime);
    }

    return () => clearInterval(intervalRef.current);
  }, [isStart]);

  const handleStartOrPause = () => {
    setIsStart((s) => !s);
  };

  const handleStop = () => {
    setIsStart(false);
    setRecordTime(0);
    setStartTime(getDateNow);
    setNowTime(getDateNow);
  };

  const timeInfo = formatTime(recordTime + nowTime - startTime);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <article
        aria-label="스톱워치"
        className="flex flex-col items-center justify-center gap-4 w-[50vw] h-[35vh] bg-[#FFDAB9] border border-[#006400] text-[#006400] font-mono rounded-lg shadow-lg"
      >
        <time dateTime={timeInfo} className="text-3xl font-bold">
          {timeInfo}
        </time>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleStartOrPause}
            aria-label={isStart ? '일시정지' : '시작'}
            title={isStart ? '일시정지' : '시작'}
            className={tm(
              'cursor-pointer opacity-80 hover:opacity-100',
              'flex items-center justify-center w-14 h-14 rounded-full',
              'bg-green-600 text-white text-xl shadow-md'
            )}
          >
            {isStart ? <PauseSolid /> : <PlaySolid />}
          </button>
          <button
            type="button"
            onClick={handleStop}
            aria-label="정지"
            title="정지"
            className={tm(
              'cursor-pointer opacity-80 hover:opacity-100',
              'flex items-center justify-center w-14 h-14 rounded-full',
              'bg-red-600 text-white text-xl shadow-md'
            )}
          >
            <StopSolid />
          </button>
        </div>
      </article>
    </div>
  );
}

export default StopWatch;
