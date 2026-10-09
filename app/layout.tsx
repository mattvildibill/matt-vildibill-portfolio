import type {Metadata} from 'next';
import './portfolio.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mattvildibill.com'),
  alternates: {canonical: '/'},
  title: 'Matt Vildibill | Software Engineer',
  description: 'I’m Matt, a software engineer who likes building things and learning along the way. Explore my projects, try the apps, and take a look at the code.',
  openGraph: {
    title: 'Matt Vildibill | Software Engineer',
    description: 'I’m Matt, a software engineer who likes building things and learning along the way. Explore my projects, try the apps, and take a look at the code.',
    url: 'https://mattvildibill.com',
    type: 'website',
    images: [{url: '/images/fabric-preview.webp', width: 1092, height: 750, alt: 'Fabric Reality Lab network visualization'}],
  },
  twitter: {card: 'summary_large_image'},
  icons: {icon: '/favicon.svg'},
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
