import type {Metadata} from 'next';
import './portfolio.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mattvildibill.com'),
  alternates: {canonical: '/'},
  title: 'Matt Vildibill | Software Engineer',
  description: 'Interactive projects by Matt Vildibill: a digital painting collection, gravity and network simulations, city explorers, and an F1 dashboard.',
  openGraph: {
    title: 'Matt Vildibill | Software Engineer',
    description: 'Interactive projects by Matt Vildibill: a digital painting collection, gravity and network simulations, city explorers, and an F1 dashboard.',
    url: 'https://mattvildibill.com',
    type: 'website',
    images: [{url: '/images/portfolio-preview.jpg', width: 1200, height: 630, alt: 'Matt Vildibill’s portfolio of interactive art, network, and gravity projects'}],
  },
  twitter: {card: 'summary_large_image'},
  icons: {icon: '/favicon.svg'},
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
