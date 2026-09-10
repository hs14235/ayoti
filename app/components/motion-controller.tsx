'use client';

import { useEffect } from 'react';

const CHAPTER_IDS = ['world', 'sim', 'ayoti', 'needinglys', 'field-notes'];

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          '.world__copy',
          '.scale__heading',
          '.ayoti__heading',
          '.needinglys__heading',
          '.field-notes__heading',
          '.field-note-entry__copy',
          'main figure',
          '.world__aside',
          '.footer__eyebrow',
          '.footer__statement',
          '.footer__meta',
        ].join(', '),
      ),
    );

    root.classList.add('motion-ready');
    revealTargets.forEach((element, index) => {
      element.classList.add('scroll-reveal');
      element.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );

    revealTargets.forEach((element) => {
      if (reducedMotion.matches) {
        element.classList.add('is-visible');
      } else {
        revealObserver.observe(element);
      }
    });

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('.story-nav__chapters a'),
    );
    const chapters = CHAPTER_IDS.map((id) => document.getElementById(id)).filter(
      (chapter): chapter is HTMLElement => Boolean(chapter),
    );

    const chapterObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const activeId = visible.target.id;
        window.dispatchEvent(
          new CustomEvent('dividid:chapter', { detail: { id: activeId } }),
        );
        links.forEach((link) => {
          const isActive = link.hash === `#${activeId}`;
          link.classList.toggle('is-active', isActive);
          if (isActive) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      },
      { rootMargin: '-28% 0px -50% 0px', threshold: [0.01, 0.2, 0.5] },
    );

    chapters.forEach((chapter) => chapterObserver.observe(chapter));

    let frame = 0;
    const updateScrollEffects = () => {
      frame = 0;
      const scrollRange = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const pageProgress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
      const heroProgress = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);

      root.style.setProperty('--page-progress', pageProgress.toString());
      root.style.setProperty('--hero-shift', `${heroProgress * 42}px`);
      root.style.setProperty('--hero-film-shift', `${heroProgress * 24}px`);
      root.style.setProperty('--hero-copy-opacity', `${1 - heroProgress * 0.78}`);
      root.classList.toggle(
        'has-entered-story',
        window.scrollY > window.innerHeight * 0.55,
      );
    };

    const requestScrollUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateScrollEffects);
    };

    updateScrollEffects();
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    window.addEventListener('resize', requestScrollUpdate);

    return () => {
      root.classList.remove('motion-ready');
      root.style.removeProperty('--page-progress');
      root.style.removeProperty('--hero-shift');
      root.style.removeProperty('--hero-film-shift');
      root.style.removeProperty('--hero-copy-opacity');
      root.classList.remove('has-entered-story');
      revealObserver.disconnect();
      chapterObserver.disconnect();
      window.removeEventListener('scroll', requestScrollUpdate);
      window.removeEventListener('resize', requestScrollUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  );
}
