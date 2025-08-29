import TriSlider from './TriSlider';

export default function LibraryCard({ gameName, setGameName, dewey, setDewey, sliders }) {
  return (
    <section className="mx-auto -mb-8 max-w-4xl">
      <div className="rounded-xl bg-[#fffdf6] shadow-xl ring-1 ring-orange-200/60">
        {/* Card header */}
        <div className="border-b border-dashed border-neutral-300/70 bg-neutral-50/60 p-4 sm:p-6 rounded-t-xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex-1">
              <label className="block text-[11px] font-semibold tracking-widest text-neutral-600 uppercase">Board Game Title</label>
              <input
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 font-medium text-neutral-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
            <div className="w-full sm:w-44">
              <label className="block text-[11px] font-semibold tracking-widest text-neutral-600 uppercase">Dewey Decimal No.</label>
              <input
                value={dewey}
                onChange={(e) => setDewey(e.target.value)}
                className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 font-mono text-neutral-900 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold tracking-wide text-neutral-800">Classification Sliders</h3>
              <p className="text-sm text-neutral-500">Slide between triads to describe this game's feel.</p>
            </div>
            <div className="rounded-md bg-orange-100 px-3 py-1 text-xs font-semibold tracking-wide text-orange-900 ring-1 ring-orange-200">
              Library Card
            </div>
          </div>

          <div className="grid gap-6">
            {sliders.map((s) => (
              <TriSlider
                key={s.id}
                title={s.title}
                left={s.left}
                mid={s.mid}
                right={s.right}
                value={s.value}
                onChange={s.setValue}
              />
            ))}
          </div>
        </div>

        {/* Card footer */}
        <div className="border-t border-neutral-200/70 bg-neutral-50/50 px-4 py-3 sm:px-6 rounded-b-xl flex items-center justify-between">
          <div className="text-xs text-neutral-500">Filed under • Games • Tabletop • Strategy</div>
          <div className="text-xs font-medium text-neutral-700">{gameName} • {dewey}</div>
        </div>
      </div>
    </section>
  );
}
