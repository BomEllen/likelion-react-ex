import { tm } from '@/utils/tw-merge';
import { PlaySolid, StopSolid } from '@mynaui/icons-react';

function StopWatch() {
  return (
    <article aria-label="스톱워치" className="flex flex-col gap-2">
      <time
        dateTime="00:00:00:00"
        className="px-4 py-2 bg-black text-white text-lg text-center w-46 font-mono rounded-full"
      >
        00:00:00:00
      </time>
      <div className="flex gap-1">
        <button
          type="button"
          aria-label="시작"
          title="시작"
          className={tm(
            'cursor-pointer opacity-75',
            'grid place-content-center',
            'bg-react text-white px-7 py-0.5 rounded-full font-semibold',
            'hover:opacity-100'
          )}
        >
          <PlaySolid />
        </button>
        <button
          type="button"
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
