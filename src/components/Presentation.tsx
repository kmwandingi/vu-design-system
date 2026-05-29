import { Children, type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Slide ────────────────────────────────────────────────────────────────────

export interface SlideProps {
  /** Layout archetype */
  variant?: 'title' | 'content' | 'two-col' | 'quote' | 'summary';
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  body?: string;
  /** Max 5 items — less is more */
  bullets?: string[];
  left?: ReactNode;
  right?: ReactNode;
  quote?: string;
  attribution?: string;
  /** Background tone */
  tone?: 'default' | 'subtle' | 'brand';
  className?: string;
}

export function Slide({
  variant = 'content',
  eyebrow,
  title,
  subtitle,
  body,
  bullets,
  left,
  right,
  quote,
  attribution,
  tone = 'default',
  className,
}: SlideProps) {
  return (
    <div
      className={cn(
        'relative w-full aspect-video overflow-hidden',
        tone === 'default' && 'bg-card',
        tone === 'subtle' && 'bg-slate-50',
        // quote slides look better tinted by default; brand explicit override
        tone === 'brand' && 'bg-vu-blue-50',
        className,
      )}
    >
      {/* ── Title ─────────────────────────────────────────────────────────── */}
      {variant === 'title' && (
        <div className="flex h-full flex-col items-center justify-center px-16 py-12 text-center">
          {eyebrow && (
            <span className="mb-6 inline-flex items-center rounded-full border border-vu-blue-200 bg-vu-blue-50 px-3.5 py-1 text-xs font-medium tracking-wider text-vu-blue-700 uppercase">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl font-bold text-foreground leading-tight">{title}</h1>
          {subtitle && (
            <p className="mt-5 max-w-lg text-base text-muted-foreground leading-relaxed">{subtitle}</p>
          )}
        </div>
      )}

      {/* ── Content ───────────────────────────────────────────────────────── */}
      {variant === 'content' && (
        // title anchors top; bullets/body fill remaining height with space-evenly distribution
        <div className="flex h-full flex-col px-14 py-10">
          {title && (
            <div className="shrink-0 mb-4">
              <h2 className="text-xl font-semibold text-foreground">{title}</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-vu-blue" />
            </div>
          )}
          {body && (
            <div className="flex flex-1 items-center">
              <p className="text-sm text-foreground leading-relaxed">{body}</p>
            </div>
          )}
          {bullets && (
            <ul className="flex flex-1 flex-col justify-evenly">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3.5 text-sm text-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-vu-blue" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* ── Two-col ───────────────────────────────────────────────────────── */}
      {variant === 'two-col' && (
        <div className="flex h-full flex-col px-14 py-10">
          {title && (
            <div className="mb-6 shrink-0">
              <h2 className="text-xl font-semibold text-foreground">{title}</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-vu-blue" />
            </div>
          )}
          <div className="flex flex-1 gap-8 min-h-0 items-stretch">
            <div className="flex-1 overflow-hidden text-sm text-foreground">{left}</div>
            <div className="w-px shrink-0 bg-border" />
            <div className="flex-1 overflow-hidden text-sm text-foreground">{right}</div>
          </div>
        </div>
      )}

      {/* ── Quote ─────────────────────────────────────────────────────────── */}
      {variant === 'quote' && (
        <div
          className={cn(
            'flex h-full flex-col items-center justify-center px-20 py-12 text-center',
            tone === 'default' && 'bg-vu-blue-50', // quotes get brand tint by default
          )}
        >
          {/* Decorative quote mark */}
          <div className="mb-5 text-vu-blue-300" aria-hidden="true">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor">
              <path d="M0 32V19.2C0 7.467 6.4 1.867 19.2 0L20.8 3.2C14.4 4.8 10.667 8.533 10.667 14.4H16V32H0ZM24 32V19.2C24 7.467 30.4 1.867 43.2 0L44.8 3.2C38.4 4.8 34.667 8.533 34.667 14.4H40V32H24Z" />
            </svg>
          </div>
          <blockquote className="max-w-2xl text-xl font-medium text-vu-blue-900 leading-relaxed">
            {quote}
          </blockquote>
          {attribution && (
            <p className="mt-6 text-xs uppercase tracking-widest text-vu-blue-600">{attribution}</p>
          )}
        </div>
      )}

      {/* ── Summary ───────────────────────────────────────────────────────── */}
      {variant === 'summary' && (
        <div className="flex h-full flex-col px-14 py-10">
          {title && (
            <div className="shrink-0 mb-4">
              <h2 className="text-xl font-semibold text-foreground">{title}</h2>
              <div className="mt-2 h-0.5 w-10 rounded-full bg-vu-orange" />
            </div>
          )}
          {bullets && (
            <ul className="flex flex-1 flex-col justify-evenly">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vu-blue text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm text-foreground leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Presentation ─────────────────────────────────────────────────────────────

export interface PresentationProps {
  children: ReactNode;
  className?: string;
}

export function Presentation({ children, className }: PresentationProps) {
  const slides = Children.toArray(children);
  const total = slides.length;
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(total - 1, c + 1)), [total]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    }
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [next, prev]);

  useEffect(() => {
    const onFSChange = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFSChange);
    return () => document.removeEventListener('fullscreenchange', onFSChange);
  }, []);

  const toggleFullscreen = () => {
    if (!fullscreen) containerRef.current?.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const navBtn = cn(
    'flex items-center justify-center rounded-md p-1.5 transition-colors duration-150',
    'text-muted-foreground hover:bg-muted hover:text-foreground',
    'disabled:opacity-30 disabled:pointer-events-none',
  );

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-background outline-none',
        'focus-visible:ring-2 focus-visible:ring-vu-blue/30',
        fullscreen && 'fixed inset-0 z-50 rounded-none border-none',
        className,
      )}
    >
      {/* Slide stage */}
      <div className={cn(fullscreen && 'flex h-[calc(100vh-48px)] items-center justify-center bg-slate-900')}>
        <div className={cn('w-full', fullscreen && 'max-w-[calc((100vh-48px)*16/9)]')}>
          {slides[current]}
        </div>
      </div>

      {/* Controls bar */}
      <div
        className={cn(
          'flex items-center justify-between border-t border-border bg-muted/30 px-3 py-1.5',
          fullscreen && 'absolute bottom-0 left-0 right-0 border-t border-border/60 bg-background/95 backdrop-blur-sm',
        )}
      >
        {/* Dot navigation */}
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={cn(
                'rounded-full transition-all duration-150',
                i === current
                  ? 'h-2 w-4 bg-vu-blue'
                  : 'h-2 w-2 bg-muted-foreground/25 hover:bg-muted-foreground/50',
              )}
            />
          ))}
        </div>

        <span className="text-xs tabular-nums text-muted-foreground">
          {current + 1} / {total}
        </span>

        <div className="flex items-center gap-0.5">
          <button onClick={prev} disabled={current === 0} aria-label="Previous slide" className={navBtn}>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={next} disabled={current === total - 1} aria-label="Next slide" className={navBtn}>
            <ChevronRight className="h-4 w-4" />
          </button>
          <button onClick={toggleFullscreen} aria-label="Toggle fullscreen" className={cn(navBtn, 'ml-1')}>
            {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
