import localFont from "next/font/local";
import { Metadata } from "next"
import "./globals.css";
import { TriangleAlert } from 'lucide-react';

const ls = localFont({
  src: [
    {
      path: "../../public/fonts/LINESeedSansTH_W_Th.woff2",
      weight: "300",
      style: "thin",
    },
    {
      path: "../../public/fonts/LINESeedSansTH_W_Rg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/LINESeedSansTH_W_Bd.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: 'DekNont Live Demo'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ls.className} antialiased`}
      >
        <div className="sm:flex flex-col gap-3 hidden w-screen h-screen items-center justify-center text-center">
          <p className="text-red-500"><TriangleAlert /></p>
          <p>กรุณาใช้มือถือในการรับชม</p>
        </div>
        <div className="sm:hidden block">{children}</div>
      </body>
    </html>
  );
}
