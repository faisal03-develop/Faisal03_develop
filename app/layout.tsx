import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from 'next/font/google'


const firaCode = Fira_Code({
  variable: '--font-firaCode',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})


export const metadata: Metadata = {
  title: "Faisal03_develop",
  description: "Faisal's Portfolio Website",
  icons: {
    icon: "/icons/OutlineLogo.svg",}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className={firaCode.className}>
        <head>
          <link rel="preload" href="https://prod.spline.design/EC0u9YUH5viaINhA/scene.splinecode" as="fetch" crossOrigin="anonymous" />
        </head>
        <body
          className={`${firaCode.variable} ${firaCode.variable} antialiased`}
        >
          {children}
        </body>
    </html>
  );
}
