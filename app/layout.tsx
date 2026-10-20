import type {Metadata} from 'next';
import './portfolio.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mattvildibill.com'),
  alternates: {canonical: '/'},
  title: 'Matt Vildibill | Software Engineer',
  description: 'Matt Vildibill, software engineer with a background in integration and test automation. Network simulations, gravity experiments, F1 race data, and tools built out of curiosity.',
  openGraph: {
    title: 'Matt Vildibill | Software Engineer',
    description: 'Network simulations, gravity experiments, F1 race data, and tools built out of curiosity. Software projects by Matt Vildibill.',
    url: 'https://mattvildibill.com',
    type: 'website',
    images: [{url: '/images/portfolio-social.jpg', width: 1200, height: 630, alt: 'Matt Vildibill’s portfolio featuring Fabric Reality Lab, Gravity Unscripted, and F1 Live Tracker'}],
  },
  twitter: {card: 'summary_large_image'},
  icons: {icon: '/favicon.svg'},
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
