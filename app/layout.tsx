import type { Metadata } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dividid.github.io/ayoti';
const publicAsset = (path: string) => `${basePath}${path}`;
const absoluteAsset = (path: string) => `${siteUrl}${path}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dividid — An illustrated world by Siri',
  description:
    'Enter Dividid, an intricate hand-drawn world of strange ecologies, watchful mountains, and patient mark-making by Siri.',
  icons: {
    icon: publicAsset('/favicon.png'),
    apple: publicAsset('/favicon.png'),
  },
  openGraph: {
    title: 'Dividid — An illustrated world by Siri',
    description:
      'A hand-drawn world of strange ecologies, watchful mountains, and patient mark-making.',
    type: 'website',
    images: [
      {
        url: absoluteAsset('/og.png'),
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
    images: [absoluteAsset('/og.png')],
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
