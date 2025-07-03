import { FaFacebookF, FaWhatsapp, FaTiktok, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden text-white">
      {/* خلفية */}
      <img
        src="/images/motagat/autos-marken-min.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

      {/* المحتوى */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col gap-6 md:flex-row justify-between items-center text-center md:text-right">
        {/* تواصل اجتماعي */}
        <div>
          <p className="text-xl underline mb-2">تواصل معنا</p>
          <div className="flex justify-center md:justify-start gap-3 text-2xl">
            <a href="https://wa.me/218925881949" target="_blank" className="bg-green-500 p-2 rounded-full hover:scale-110 transition"><FaWhatsapp /></a>
            <a href="https://facebook.com/ayman.elamin.90" target="_blank" className="bg-blue-600 p-2 rounded-full hover:scale-110 transition"><FaFacebookF /></a>
            <a href="https://www.tiktok.com/@alqabayli" target="_blank" className="bg-black p-2 rounded-full hover:scale-110 transition"><FaTiktok /></a>
            <a href="mailto:sskknnrr15@gmail.com" className="bg-red-500 p-2 rounded-full hover:scale-110 transition"><FaEnvelope /></a>
          </div>
        </div>

        {/* روابط الصفحات */}
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col sm:flex-row gap-4 text-xl font-semibold">
            <Link href="/" className="hover:underline hover:text-[#000080]">الرئيسية</Link>
            <Link href="/about" className="hover:underline hover:text-[#000080]">من نحن</Link>
            <Link href="/services" className="hover:underline hover:text-[#000080]">الخدمات</Link>
            <Link href="/products" className="hover:underline hover:text-[#000080]">المنتجات</Link>
            <Link href="/location" className="hover:underline hover:text-[#000080]">موقعنا</Link>
          </div>

          <div className="relative w-180 h-50 ">
            <Image
              src="/images/Auto-logo-dunkelblau.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="text-lg font-semibold mt-1">
            القبايلي – إكسسوارات تليق بسيارتك
          </p>
        </div>
      </div>
    </footer>
  );
}
