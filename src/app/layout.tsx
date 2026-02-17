import localFont from "next/font/local";
import "./globals.css";

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
        <div className="sm:flex hidden w-screen h-screen items-center justify-center text-center">กรุณาใช้มือถือในการรับชม</div>
        <div className="sm:hidden block">{children}</div>
      </body>
    </html>
  );
}
