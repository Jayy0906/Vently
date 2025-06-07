import type { Metadata } from "next";
import "./globals.css";
import "./styles/fonts.css";
import AOSProvider from './AOSProvider';

export const metadata: Metadata = {
  title: "Vently",
  description: "Say goodbye to damp & condensation forever! | Vently",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSProvider> 
        {children}
        </AOSProvider> 
      </body>
    </html>
  );
}
