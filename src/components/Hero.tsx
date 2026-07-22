import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
 
// Words that cycle in the headline
const ROTATING_WORDS = ['designs', 'codes', 'solves problems'];
 
const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [animateWord, setAnimateWord] = useState(true);
 
  useEffect(() => {
    // Respect users who prefer reduced motion: no rotation, no drift.
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;
 
    const interval = setInterval(() => {
      // fade out, swap word, fade back in
      setAnimateWord(false);
      window.setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setAnimateWord(true);
      }, 250);
    }, 2600);
 
    return () => clearInterval(interval);
  }, []);
 
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 pt-20 py-20 lg:px-8"
    >
      {/* Scoped keyframes for the drifting background blobs */}
      <style>{`
        @keyframes hero-blob-drift {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(40px, -30px) scale(1.08); }
          66%  { transform: translate(-30px, 25px) scale(0.96); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .hero-blob { animation: hero-blob-drift 18s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-blob { animation: none; }
        }
      `}</style>
 
      {/* Soft drifting background blobs (accent blue + mint) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-blob absolute -left-24 top-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div
          className="hero-blob absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl"
          style={{ animationDelay: '-6s' }}
        />
      </div>

      {/* drifting blobs */}
      <div className="pointer-events-none absolute -left-[5%] -top-[10%] h-[520px] w-[520px] rounded-full blur-[10px] [animation:drift1_14s_ease-in-out_infinite] motion-reduce:animate-none bg-[radial-gradient(circle,hsl(217_100%_41%/0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-[15%] -right-[8%] h-[600px] w-[600px] rounded-full blur-[10px] [animation:drift2_17s_ease-in-out_infinite] motion-reduce:animate-none bg-[radial-gradient(circle,hsl(132_50%_60%/0.18),transparent_70%)]" />
      <div className="pointer-events-none absolute left-[45%] top-[35%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[10px] [animation:drift3_20s_ease-in-out_infinite] motion-reduce:animate-none bg-[radial-gradient(circle,hsl(217_100%_41%/0.1),transparent_70%)]" />
 
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Status badge */}
        <div
          className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-2 text-sm font-medium"
          style={{ animationFillMode: 'both', animationDelay: '0ms' }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-success" />
          <span className="font-medium text-success">Currently Available</span>
          <span className="text-text-secondary">— Accepting new projects</span>
        </div>
 
        {/* Headline with rotating accent word */}
        <h1
          className="animate-fade-in mb-6 text-4xl font-bold leading-tight text-text-primary md:text-6xl lg:text-7xl"
          style={{ animationFillMode: 'both', animationDelay: '120ms' }}
        >
          Hi, I'm Pat Dahl — UX/UI designer
          <br />
          who{' '}
          <span
            className="gradient-text inline-block transition-all duration-300 ease-smooth"
            style={{
              opacity: animateWord ? 1 : 0,
              transform: animateWord ? 'translateY(0)' : 'translateY(0.4rem)',
              color: "hsl(217 75% 41%)",
            }}
          >
            {ROTATING_WORDS[wordIndex]}
          </span>{' '}
          and Frontend developer
        </h1>
 
        {/* Subheadline */}
        <p
          className="animate-fade-in mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-text-secondary md:text-xl lg:text-2xl"
          style={{ animationFillMode: 'both', animationDelay: '240ms' }}
        >
          I turn ideas into user-centered digital products — combining UX/UI design and
          frontend development with a background in business to build interfaces that work
          for both users and the people paying for them.
        </p>
 
        {/* CTA */}
        <a
          href="#contact"
          className="cta-button animate-fade-in group inline-flex items-center gap-3 rounded-radius-lg px-8 py-4 text-lg font-semibold"
          style={{ animationFillMode: 'both', animationDelay: '360ms' }}
        >
          Let's work together
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};
 
export default Hero;