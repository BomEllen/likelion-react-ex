import { tm } from '@/utils/tw-merge';
import { useEffect, useState } from 'react';
import { PauseSolid, PlaySolid, StopSolid } from '@mynaui/icons-react';

const getDateNow = () => Date.now();

function StopWatch() {
  const [startTime, setStartTime] = useState(getDateNow);
  const [nowTime, setNowTime] = useState(getDateNow);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (isStart) {
      setStartTime(getDateNow);
      setNowTime(getDateNow);
    }
  }, [isStart]);

  const handleStartOrPause = () => {
    setIsStart((s) => !s);
  };

  const handleStop = () => {
    setIsStart(false);
    setStartTime(getDateNow);
    setNowTime(getDateNow);
  };

  return (
    <article aria-label="스톱워치" className="flex flex-col gap-2">
      <time
        dateTime="00:00:00:00"
        className="px-4 py-2 bg-black text-white text-lg text-center w-46 font-mono rounded-full"
      >
        {nowTime - startTime}ms
      </time>
      <div className="flex gap-1">
        <button
          type="button"
          onClick={handleStartOrPause}
          aria-label={isStart ? '일시정지' : '시작'}
          title={isStart ? '일시정지' : '시작'}
          className={tm(
            'cursor-pointer opacity-75',
            'grid place-content-center',
            'bg-react text-white px-7 py-0.5 rounded-full font-semibold',
            'hover:opacity-100'
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
            'cursor-pointer opacity-90',
            'grid place-content-center',
            'bg-sky-600 text-white px-7 py-0.5 rounded-full font-semibold',
            'hover:opacity-100'
          )}
        >
          <StopSolid />
        </button>
      </div>
    </article>
  );
}

export default StopWatch;
