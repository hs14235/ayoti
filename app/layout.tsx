import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://dividid.github.io'),
  title: 'Dividid — An illustrated world by Siri',
  description:
    'Enter Dividid, an intricate hand-drawn world of strange ecologies, watchful mountains, and patient mark-making by Siri.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Dividid — An illustrated world by Siri',
    description:
      'A hand-drawn world of strange ecologies, watchful mountains, and patient mark-making.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: 'DIVIDID — An illustrated world by Siri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dividid — An illustrated world by Siri',
    description:
      'A hand-drawn world of strange ecologies, watchful mountains, and patient mark-making.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
