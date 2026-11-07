import React, { useState, useEffect, useCallback } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { PoolCausticsCanvas3D } from './components/PoolCausticsCanvas3D';

const SunIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle
      cx="24"
      cy="24"
      r="9.5"
      stroke="#FDE047"
      strokeWidth="3.2"
      fill="rgba(253, 224, 71, 0.14)"
    />
    {/* 8 hand-crafted sun rays matching codex_15.jpg / codex_19.jpg */}
    <line x1="24" y1="4" x2="24" y2="10.5" stroke="#FDE047" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="24" y1="37.5" x2="24" y2="44" stroke="#FDE047" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="4" y1="24" x2="10.5" y2="24" stroke="#FDE047" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="37.5" y1="24" x2="44" y2="24" stroke="#FDE047" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="9.8" y1="9.8" x2="14.5" y2="14.5" stroke="#FDE047" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="33.5" y1="33.5" x2="38.2" y2="38.2" stroke="#FDE047" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="38.2" y1="9.8" x2="33.5" y2="14.5" stroke="#FDE047" strokeWidth="3.2" strokeLinecap="round" />
    <line x1="14.5" y1="33.5" x2="9.8" y2="38.2" stroke="#FDE047" strokeWidth="3.2" strokeLinecap="round" />
  </svg>
);

const SunRayBurstLeft: React.FC = () => (
  <svg width="28" height="24" viewBox="0 0 28 24" fill="none" aria-hidden="true">
    <line x1="24" y1="6" x2="12" y2="2" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
    <line x1="22" y1="12" x2="6" y2="12" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
    <line x1="24" y1="18" x2="12" y2="22" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const SunRayBurstRight: React.FC = () => (
  <svg width="28" height="24" viewBox="0 0 28 24" fill="none" aria-hidden="true">
    <line x1="4" y1="6" x2="16" y2="2" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
    <line x1="6" y1="12" x2="22" y2="12" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
    <line x1="4" y1="18" x2="16" y2="22" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const CHAPTER_LABELS = [
  'A little less hurry',
  'Let the day drift',
  'Nowhere to be',
  'Just warm water',
  'Unplug the noise',
  'Stay a little longer',
];

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [rippleCount, setRippleCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      setScrollProgress(progress);
      const chapterIdx = Math.min(5, Math.floor(progress * 6 + 0.12));
      setActiveChapter(chapterIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTriggerRipple = useCallback(() => {
    setRippleCount((c) => c + 1);
  }, []);

  const scrollToChapter = (chapterIndex: number) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = (chapterIndex / 5) * maxScroll;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[600vh] w-full font-float-body select-none">
      {/* Real-Time Three.js + GLSL Pool Caustics & 3D Striped Inflatable Ring */}
      <PoolCausticsCanvas3D
        scrollProgress={scrollProgress}
        isPaused={isPaused}
        rippleCount={rippleCount}
        onTriggerRipple={handleTriggerRipple}
      />

      {/* Fixed Header Bar matching codex_15.jpg / codex_19.jpg */}
      <header className="fixed top-0 left-0 right-0 z-30 px-7 sm:px-12 py-6 flex items-center justify-between pointer-events-none">
        <button
          type="button"
          onClick={() => scrollToChapter(0)}
          className="pointer-events-auto font-float-display text-2xl sm:text-[28px] font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(11,59,66,0.22)] flex items-baseline cursor-pointer"
        >
          <span>float club</span>
          <span className="text-[#FDE047] ml-0.5">.</span>
        </button>

        <div className="pointer-events-auto flex items-center gap-4">
          <span className="text-xs sm:text-sm font-semibold text-[#0B3B42] tracking-tight">
            Take your time
          </span>

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={isPaused ? 'Resume pool float motion' : 'Pause pool float motion'}
            className="w-10 h-10 rounded-full border border-[#0B3B42]/25 bg-white/30 hover:bg-white/45 backdrop-blur-md flex items-center justify-center text-[#0B3B42] shadow-sm transition cursor-pointer"
          >
            {isPaused ? (
              <Play className="w-4 h-4 fill-[#0B3B42] ml-0.5" />
            ) : (
              <Pause className="w-4 h-4 fill-[#0B3B42]" />
            )}
          </button>
        </div>
      </header>

      {/* Right Edge Vertical 6-Chapter Scrubber Tick Marks matching codex_15.jpg / codex_23.jpg */}
      <nav
        aria-label="Pool Story Chapters"
        className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 flex flex-col items-end gap-5"
      >
        {CHAPTER_LABELS.map((label, idx) => {
          const isActive = activeChapter === idx;
          return (
            <button
              key={label}
              type="button"
              onClick={() => scrollToChapter(idx)}
              title={label}
              aria-label={`Jump to chapter ${idx + 1}: ${label}`}
              className="group py-1.5 pl-4 flex items-center justify-end cursor-pointer focus:outline-none"
            >
              <span
                className={`block h-[2.5px] rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-5 bg-[#0B3B42]'
                    : 'w-2.5 bg-[#0B3B42]/45 group-hover:w-4 group-hover:bg-[#0B3B42]/80'
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* CHAPTER 1: codex_15.jpg & codex_19.jpg — "A little less hurry." */}
      <section className="relative h-screen w-full flex flex-col items-center justify-end pb-12 sm:pb-14 px-6 z-10 pointer-events-none">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="font-float-display text-5xl sm:text-7xl md:text-[88px] lg:text-[104px] font-bold leading-[0.98] text-pool-headline tracking-tight">
            A little less hurry.
          </h1>

          <div className="mt-4 sm:mt-5 flex items-center justify-center gap-3 sm:gap-5">
            <SunIcon className="w-9 h-9 sm:w-11 sm:h-11 shrink-0" />
            <p className="text-base sm:text-xl md:text-[23px] font-semibold text-[#083A42] tracking-tight">
              The best part of today is taking your time.
            </p>
            <SunIcon className="w-9 h-9 sm:w-11 sm:h-11 shrink-0" />
          </div>
        </div>
      </section>

      {/* CHAPTER 2: codex_23.jpg — "Let the day drift." */}
      <section className="relative h-screen w-full flex items-end justify-end pb-16 sm:pb-24 px-8 sm:px-20 lg:px-32 z-10 pointer-events-none">
        <div className="text-left max-w-xl">
          <h2 className="font-float-display text-5xl sm:text-7xl md:text-[84px] font-bold leading-[0.96] text-pool-headline">
            Let the
            <br />
            day drift.
          </h2>
          <p className="mt-4 text-base sm:text-xl font-semibold text-[#083A42] tracking-tight">
            Nothing on the agenda but this.
          </p>
        </div>
      </section>

      {/* CHAPTER 3: codex_16.jpg — "Nowhere to be." + Top-right "Nothing on the agenda but this." */}
      <section className="relative h-screen w-full flex flex-col justify-between py-14 sm:py-20 px-8 sm:px-16 lg:px-24 z-10 pointer-events-none">
        <div className="self-end text-right pr-4 sm:pr-16">
          <p className="text-base sm:text-xl font-semibold text-[#083A42] tracking-tight">
            Nothing on the agenda but this.
          </p>
        </div>

        <div className="self-start text-left max-w-lg">
          <h2 className="font-float-display text-5xl sm:text-7xl md:text-[84px] font-bold leading-[0.96] text-pool-headline">
            Nowhere
            <br />
            to be.
          </h2>
        </div>
      </section>

      {/* CHAPTER 4: "Just warm water." */}
      <section className="relative h-screen w-full flex items-center justify-end px-8 sm:px-20 lg:px-28 z-10 pointer-events-none">
        <div className="text-left max-w-lg">
          <h2 className="font-float-display text-5xl sm:text-7xl md:text-[82px] font-bold leading-[0.96] text-pool-headline">
            Just warm
            <br />
            water.
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <SunIcon className="w-8 h-8 shrink-0" />
            <p className="text-base sm:text-xl font-semibold text-[#083A42] tracking-tight">
              Sun on your shoulders and quiet ripples.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 5: "Unplug the noise." */}
      <section className="relative h-screen w-full flex items-end justify-start pb-20 px-8 sm:px-20 lg:px-28 z-10 pointer-events-none">
        <div className="text-left max-w-xl">
          <h2 className="font-float-display text-5xl sm:text-7xl md:text-[82px] font-bold leading-[0.96] text-pool-headline">
            Unplug
            <br />
            the noise.
          </h2>
          <p className="mt-4 text-base sm:text-xl font-semibold text-[#083A42] tracking-tight">
            Float until the afternoon slows down.
          </p>
        </div>
      </section>

      {/* CHAPTER 6: codex_11.jpg — "Stay a little longer." + "The day can wait." + Yellow Replay Button */}
      <section className="relative h-screen w-full flex flex-col items-center justify-between py-20 sm:py-24 px-6 z-10 pointer-events-none">
        <div className="text-center mt-2">
          <h2 className="font-float-display text-5xl sm:text-7xl md:text-[80px] font-bold leading-[1.0] text-pool-headline-outline">
            Stay a little longer.
          </h2>

          <div className="mt-3 flex items-center justify-center gap-3">
            <SunRayBurstLeft />
            <p className="font-float-display text-xl sm:text-2xl font-bold text-pool-headline-outline">
              The day can wait.
            </p>
            <SunRayBurstRight />
          </div>
        </div>

        {/* Bottom-Center Warm-Yellow Replay Button with Sun Rays matching codex_11.jpg */}
        <div className="pointer-events-auto relative flex items-center justify-center mb-2">
          <button
            type="button"
            onClick={() => scrollToChapter(0)}
            aria-label="Replay Float Club from the beginning"
            className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FDE047] hover:bg-[#FFE869] border-[3px] border-white shadow-[0_8px_24px_rgba(11,59,66,0.28)] transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            {/* Radiating yellow sun rays around top-right of the button matching codex_11.jpg */}
            <svg
              viewBox="0 0 100 100"
              className="absolute -inset-3.5 w-[calc(100%+28px)] h-[calc(100%+28px)] pointer-events-none"
              aria-hidden="true"
            >
              <line x1="50" y1="2" x2="50" y2="9" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="74" y1="8" x2="69" y2="14" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="92" y1="26" x2="85" y2="30" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="98" y1="50" x2="91" y2="50" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
            <RotateCcw className="w-7 h-7 sm:w-8 sm:h-8 text-[#0B3B42] stroke-[2.8] transition-transform duration-500 group-hover:-rotate-90" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
