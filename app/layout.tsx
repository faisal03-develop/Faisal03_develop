import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from 'next/font/google'
import ClickSpark from '../components/ClickSpark';


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

      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <body
          className={`${firaCode.variable} ${firaCode.variable} antialiased`}
        >
          {children}
        </body>
        </ClickSpark>
    </html>
  );
}
