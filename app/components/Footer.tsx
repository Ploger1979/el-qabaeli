import { FaFacebookF, FaWhatsapp, FaTiktok, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden">
      {/* ✅ صورة الخلفية */}
      <img
        src="/images/motagat/autos-marken-min.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* ✅ الطبقة الشفافة + الضبابية */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

      {/* ✅ المحتوى فوق الخلفية */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* 👈 التواصل الاجتماعي */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right">
          <p className="text-lg mb-2 self-center md:self-start ">تواصل معنا</p>
          <div className="flex gap-3 text-2xl justify-center">
            <a
              href="https://wa.me/00218925881949"
              target="_blank"
              className="bg-green-500 p-2 rounded-full hover:scale-110 transition"
            >
              <FaWhatsapp className="text-white" />
            </a>
            <a
              href="https://facebook.com/ayman.elamin.90"
              target="_blank"
              className="bg-blue-600 p-2 rounded-full hover:scale-110 transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://www.tiktok.com/@alqabayli"
              target="_blank"
              className="bg-black p-2 rounded-full hover:scale-110 transition"
            >
              <FaTiktok className="text-white" />
            </a>
            <a
              href="mailto:sskknnrr15@gmail.com"
              className="bg-red-500 p-2 rounded-full hover:scale-110 transition"
            >
              <FaEnvelope className="text-white" />
            </a>
          </div>
        </div>

        {/* 🔷 روابط الصفحات */}
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-6 text-2xl font-semibold">
            <Link href="/" className="hover:underline hover:text-[#000080]">
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="hover:underline hover:text-[#000080]"
            >
              من نحن
            </Link>
            <Link
              href="/services"
              className="hover:underline hover:text-[#000080]"
            >
              الخدمات
            </Link>
            <Link
              href="/products"
              className="hover:underline hover:text-[#000080]"
            >
              المنتجات
            </Link>
          </div>
        </div>

        {/* 👉 الشعار والنص */}
        <div className="flex flex-col items-end text-right ">
          <Image
            src="/images/Auto-logo-dunkelblau.png"
            alt="Logo"
            width={200}
            height={50}
            className="object-contain scale-[1.8]"
          />
          <p className="text-lg font-semibold mt-0 ">
            القبائلي – إكسسوارات تليق بسيارتك
          </p>
        </div>
      </div>
    </footer>
  );
}
