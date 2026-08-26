'use client';

import { useEffect, useRef, useState } from 'react';

const CHAPTERS = [
  { id: 'world', number: '01', roman: 'I', title: 'Citadel', note: 'World / Moth' },
  { id: 'sim', number: '02', roman: 'II', title: 'Sim', note: 'Scale / Earth god' },
  { id: 'ayoti', number: '03', roman: 'III', title: 'Ayoti', note: 'Fungal ecology' },
  { id: 'needinglys', number: '04', roman: 'IV', title: 'Needinglys', note: 'Invaders / Moth' },
  { id: 'field-notes', number: '05', roman: 'V', title: 'Notes', note: 'The living archive' },
] as const;

type ChapterId = (typeof CHAPTERS)[number]['id'];

export function MobileFieldGuide() {
  const [activeId, setActiveId] = useState<ChapterId>('world');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleChapterChange = (event: Event) => {
      const id = (event as CustomEvent<{ id: ChapterId }>).detail?.id;
      if (CHAPTERS.some((chapter) => chapter.id === id)) setActiveId(id);
    };

    window.addEventListener('dividid:chapter', handleChapterChange);
    return () => {
      window.removeEventListener('dividid:chapter', handleChapterChange);
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const activeChapter = CHAPTERS.find((chapter) => chapter.id === activeId) ?? CHAPTERS[0];

  const openGuide = () => {
    const dialog = dialogRef.current;
    if (!dialog?.open) dialog?.showModal();
  };

  const closeGuide = (targetId?: ChapterId) => {
    const dialog = dialogRef.current;
    if (!dialog?.open) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    dialog.dataset.closing = 'true';

    closeTimerRef.current = window.setTimeout(() => {
      dialog.close();
      delete dialog.dataset.closing;

      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: reducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
        window.history.replaceState(null, '', `#${targetId}`);
      }
    }, reducedMotion ? 0 : 260);
  };

  return (
    <div className="mobile-field-guide">
      <button
        className="mobile-field-rail"
        type="button"
        data-chapter={activeChapter.id}
        onClick={openGuide}
        aria-haspopup="dialog"
        aria-label={`Open field guide. Current chapter: ${activeChapter.title}`}
      >
        <span className="mobile-field-rail__number">{activeChapter.number}</span>
        <span className="mobile-field-rail__label">{activeChapter.title}</span>
        <span className="mobile-field-rail__track" aria-hidden="true">
          <i />
        </span>
      </button>

      <dialog
        className="mobile-chapter-panel"
        ref={dialogRef}
        aria-labelledby="mobile-guide-title"
        onCancel={(event) => {
          event.preventDefault();
          closeGuide();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeGuide();
        }}
      >
        <div className="mobile-chapter-panel__inner">
          <span className="mobile-chapter-panel__roman" aria-hidden="true">
            {activeChapter.roman}
          </span>
          <header className="mobile-chapter-panel__header">
            <div>
              <p>Dividid / Field guide</p>
              <h2 id="mobile-guide-title">Move through the archive.</h2>
            </div>
            <button type="button" onClick={() => closeGuide()} aria-label="Close field guide">
              <span aria-hidden="true">×</span>
            </button>
          </header>

          <nav className="mobile-chapter-panel__nav" aria-label="Mobile story chapters">
            {CHAPTERS.map((chapter) => {
              const isActive = chapter.id === activeId;
              return (
                <a
                  key={chapter.id}
                  href={`#${chapter.id}`}
                  className={isActive ? 'is-active' : undefined}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    closeGuide(chapter.id);
                  }}
                >
                  <span>{chapter.number}</span>
                  <strong>{chapter.title}</strong>
                  <small>{chapter.note}</small>
                </a>
              );
            })}
          </nav>

          <p className="mobile-chapter-panel__note">
            The marker follows your place. Tap any field note to descend directly into it.
          </p>
        </div>
      </dialog>
    </div>
  );
}
