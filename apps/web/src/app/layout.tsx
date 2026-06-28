import "@/styles/global.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";

const morabba = localFont({
  src: [
    {
      path: "./fonts/morabba/woff2/Morabba-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/morabba/woff2/Morabba-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/morabba/woff2/Morabba-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/morabba/woff2/Morabba-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/morabba/woff2/Morabba-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/morabba/woff/Morabba-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/morabba/woff/Morabba-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/morabba/woff/Morabba-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/morabba/woff/Morabba-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/morabba/woff/Morabba-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-morabba",
  display: "swap",
});

export const metadata: Metadata = {
  title: "پولام",
  description: "پلتفرم مدیرت مالی",
  icons: {
    icon: "/logo/gomrok-yar.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${morabba.variable} font-(family-name:--font-morabba)`}>
        <NextTopLoader
          color="#1D9E75"
          height={3}
          showSpinner={false}
          shadow={false}
        />
        <div className="flex flex-col min-h-screen py-2 px-4 bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}
