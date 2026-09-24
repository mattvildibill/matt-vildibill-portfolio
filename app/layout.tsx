import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Matt Vildibill — Interactive systems", description: "Software engineering through simulation, live data, and explorable worlds. Selected projects by Matt Vildibill.", icons: { icon: "/favicon.svg" } };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
