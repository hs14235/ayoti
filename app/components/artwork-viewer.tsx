'use client';

import { useRef } from 'react';

type ArtworkViewerProps = {
  src: string;
  alt: string;
  caption: string;
  eager?: boolean;
};

const LANDSCAPE_ARTWORKS = new Set([
  '/images/energon-breeding-ground-for-dividids.png',
  '/images/post-invasion-moth.png',
  '/images/simonmountains.png',
]);

export function ArtworkViewer({
  src,
  alt,
  caption,
  eager = false,
}: ArtworkViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const previewPath = src.startsWith('/images/') && src.endsWith('.png')
    ? src.replace('/images/', '/images/optimized/').replace(/\.png$/, '.webp')
    : src;
  const previewSrc = `${basePath}${previewPath}`;
  const fullSrc = `${basePath}${src}`;
  const isLandscape = LANDSCAPE_ARTWORKS.has(src);

  return (
    <>
      <button
        className="artwork-button"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`View ${caption} in full screen`}
      >
        <img
          src={previewSrc}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : 'auto'}
          width={isLandscape ? 2200 : 1650}
          height={isLandscape ? 1650 : 2200}
        />
        <span className="artwork-button__hint" aria-hidden="true">
          View detail
        </span>
      </button>

      <dialog
        className="artwork-dialog"
        ref={dialogRef}
        aria-label={`Full-screen view of ${caption}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
      >
        <form method="dialog">
          <button className="artwork-dialog__close" type="submit">
            Close <span aria-hidden="true">×</span>
          </button>
        </form>
        <div className="artwork-dialog__stage">
          <img src={fullSrc} alt={alt} />
          <p>{caption}</p>
        </div>
      </dialog>
    </>
  );
}
