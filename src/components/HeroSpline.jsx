import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative h-[56vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-50/95" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-4 pb-6 sm:px-6">
        <div className="rounded-md bg-white/70 px-4 py-2 shadow-sm ring-1 ring-white/60 backdrop-blur">
          <p className="text-xs tracking-wide text-neutral-600">Slide to classify board games</p>
        </div>
      </div>
    </section>
  );
}
