import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mattvildibill.com'),
  alternates: {canonical: '/'},
  title: 'Matt Vildibill | Software Engineer',
  description: 'Personal software projects by Matt Vildibill: network and orbital simulation, geospatial 3D worlds, and race data interfaces. Explore the apps and their source.',
  openGraph: {
    title: 'Matt Vildibill | Software Engineer',
    description: 'Simulation, data, and explorable worlds. Six interactive software projects with source and model boundaries.',
    url: 'https://mattvildibill.com',
    type: 'website',
    images: [{url: '/images/fabric-preview.webp', width: 800, height: 500, alt: 'Fabric Reality Lab network visualization'}],
  },
  twitter: {card: 'summary_large_image'},
  icons: {icon: '/favicon.svg'},
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
