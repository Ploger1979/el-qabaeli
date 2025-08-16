import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "القبايلي – أفضل إكسسوارات السيارات في ليبيا",
  description:
    "الموقع الرسمي للقبايلي – كماليات سيارات عالية الجودة، توصيل سريع داخل وخارج بنغازي، خدمة عملاء ممتازة، وطرق دفع متعددة.",
  keywords: [
    "اكسسوارات سيارات",
    "القبايلي",
    "كماليات سيارات ليبيا",
    "قطع غيار",
    "سيارات",
    "بنغازي",
    "اكسسوارات ليبيا",
    "تلميع سيارات",
    "مستلزمات السيارات",
    "فرش سيارات",
    "غطاء مقاعد",
  ],
  authors: [{ name: "Ayman Plöger", url: "https://el-qabaeli.com" }],
  generator: "Next.js",
  applicationName: "القبايلي",
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "القبايلي – إكسسوارات سيارات فاخرة في ليبيا",
    description:
      "استعرض أجود كماليات السيارات من القبايلي، مع توصيل داخل وخارج بنغازي، وخدمة عملاء احترافية.",
    url: "https://el-qabaeli.com",
    siteName: "القبايلي",
    images: [
      {
        url: "/images/WebP2/logo-share-1200x630.webp",
        width: 1200,
        height: 630,
        alt: "صورة لموقع القبايلي",
      },
    ],
    locale: "ar_LY",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#000080",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* ✅ إضافات SEO مهمة */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="DVAvfeFK4iJBpyAXVu-p_ovv4OulMllBSq-p" />
        {/* ✅ حل مباشر لأيقونة favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}