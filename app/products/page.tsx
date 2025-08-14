// ✅ هذا الملف خاص بالـ metadata فقط – بدون useState أو context
import dynamic from "next/dynamic";

// استدعاء Client Component بشكل ديناميكي
const ProductsClient = dynamic(() => import("./ProductsClient"));

export const metadata = {
  title: "منتجات القبايلي – إكسسوارات سيارات مميزة في ليبيا",
  description:
    "استعرض مجموعة واسعة من منتجات القبايلي المخصصة للسيارات – جودة عالية، أسعار مناسبة، توصيل سريع داخل وخارج بنغازي.",
  keywords: [
    "اكسسوارات سيارات",
    "منتجات القبايلي",
    "كماليات سيارات",
    "فرش سيارات",
    "قطع غيار سيارات",
    "بنغازي",
    "ليبيا",
  ],
  openGraph: {
    title: "منتجات القبايلي – أفضل الإكسسوارات للسيارات",
    description:
      "جميع كماليات السيارات التي تبحث عنها تجدها لدى القبايلي – الجودة والثقة في منتج واحد.",
    url: "https://el-qabaeli.com/products",
    siteName: "القبايلي",
    images: [
      {
        url: "/images/opengraph-products.jpg",
        width: 1200,
        height: 630,
        alt: "منتجات القبايلي",
      },
    ],
    locale: "ar_LY",
    type: "website",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
