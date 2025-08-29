import { useMemo } from 'react';

export default function TriSlider({ title, left, mid, right, value, onChange }) {
  const activeIndex = useMemo(() => (value === 0 ? 0 : value === 50 ? 1 : 2), [value]);

  return (
    <div className="w-full">
      <div className="mb-2 flex items-baseline justify-between">
        <h4 className="font-semibold tracking-wide text-neutral-800 text-sm uppercase">{title}</h4>
        <span className="text-xs text-neutral-500">{activeIndex === 0 ? left : activeIndex === 1 ? mid : right}</span>
      </div>

      <div className="relative">
        <input
          type="range"
          min={0}
          max={100}
          step={50}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full appearance-none bg-transparent focus:outline-none"
          aria-label={`${title} slider`}
        />
        {/* Custom track */}
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-1 w-full rounded-full bg-neutral-300" />
        {/* Progress indicator */}
        <div
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-1 rounded-full bg-orange-500 transition-all"
          style={{ width: `${value}%` }}
        />
        {/* Stops */}
        <div className="absolute inset-0 flex items-center justify-between">
          {[0, 50, 100].map((pos, i) => (
            <button
              key={pos}
              type="button"
              onClick={() => onChange(pos)}
              className={`relative grid h-6 w-6 -translate-y-1 place-items-center rounded-full transition-colors ${
                activeIndex === i ? 'bg-orange-500 text-white shadow' : 'bg-white ring-1 ring-neutral-300 text-neutral-400'
              }`}
              style={{ left: `calc(${pos}% - 12px)` }}
              aria-label={`Set ${title} to ${i === 0 ? left : i === 1 ? mid : right}`}
            >
              <div className={`h-2 w-2 rounded-full ${activeIndex === i ? 'bg-white' : 'bg-neutral-300'}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2 grid grid-cols-3 text-[11px] font-medium tracking-wide text-neutral-500">
        <span className={`${activeIndex === 0 ? 'text-neutral-900' : ''}`}>{left}</span>
        <span className={`text-center ${activeIndex === 1 ? 'text-neutral-900' : ''}`}>{mid}</span>
        <span className={`text-right ${activeIndex === 2 ? 'text-neutral-900' : ''}`}>{right}</span>
      </div>
    </div>
  );
}
