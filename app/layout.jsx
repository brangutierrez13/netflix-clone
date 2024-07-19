import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBars/NavBar";
import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] });

const styleBackground = {
  opacity: '0.3',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
};

export const metadata = {
  title: "Peliculas, Series y mucho mas...",
  description: "Aplicacion clon basado en Netflix",
};

export const viewport = {
  themeColor: 'red',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div style={styleBackground}>
        <Image src="/images/background.jpg" alt="alt" layout="fill" objectFit="cover" quality={100} />
      </div>
      <NavBar/>
        {children}</body>
    </html>
  );
}