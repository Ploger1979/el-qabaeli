"use client";
import { FaFacebookF, FaWhatsapp, FaTiktok, FaEnvelope, FaHome, FaUserFriends, FaTools, FaBoxOpen, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative z-10 overflow-hidden text-white">
        {/* ✅ خلفية الصورة مع تغبيش وطبقة شفافة فوقها */}
        <img
          src="/images/montagat/autos-marken-min.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

        {/* ✅ المحتوى داخل الفوتر */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-right gap-6">
          {/* ✅ القسم الأول: تواصل معنا */}
          <div>
            <p className="text-xl underline mb-2">تواصل معنا</p>
            <div className="flex justify-center md:justify-start gap-3 text-2xl">
              <a href="https://wa.me/218925881949" target="_blank" className="bg-green-500 p-2 rounded-full hover:scale-110 transition"><FaWhatsapp /></a>
              <a href="https://facebook.com/slyman.kylany.193044" target="_blank" className="bg-blue-600 p-2 rounded-full hover:scale-110 transition"><FaFacebookF /></a>
              <a href="https://www.tiktok.com/@alqabayli" target="_blank" className="bg-black p-2 rounded-full hover:scale-110 transition"><FaTiktok /></a>
              <a href="mailto:sskknnrr15@gmail.com" className="bg-red-500 p-2 rounded-full hover:scale-110 transition"><FaEnvelope /></a>
            </div>
          </div>

          {/* ✅ القسم الثاني: روابط الصفحات + اللوجو + الجملة الختامية */}
          <div className="flex flex-col items-center gap-4">
            {/* ✅ روابط التنقل بالرموز */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 text-xl font-semibold">
              <Link href="/" className="hover:underline hover:text-yellow-300 flex items-center gap-1"><FaHome /> الرئيسية</Link>
              <Link href="/about" className="hover:underline hover:text-yellow-300 flex items-center gap-1"><FaUserFriends /> من نحن</Link>
              <Link href="/services" className="hover:underline hover:text-yellow-300 flex items-center gap-1"><FaTools /> الخدمات</Link>
              <Link href="/products" className="hover:underline hover:text-yellow-300 flex items-center gap-1"><FaBoxOpen /> المنتجات</Link>
              <Link href="/location" className="hover:underline hover:text-yellow-300 flex items-center gap-1"><FaMapMarkerAlt /> موقعنا</Link>
              <Link href="/cart" className="hover:underline hover:text-yellow-300 flex items-center gap-1"><FaShoppingCart /> السلة</Link>
            </div>

            {/* ✅ لوجو الموقع */}
            <div className="relative w-180 h-50">
              <Image
                src="/images/Auto-logo-dunkelblau.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* ✅ جملة ختامية بسيطة */}
            <p className="text-lg font-semibold mt-1">
              القبايلي – إكسسوارات تليق بسيارتك
            </p>
          </div>
        </div>
      </footer>

      {/* ✅ زر Scroll to Top يظهر عند التمرير للأسفل */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 bg-[#000080] text-white text-xl p-3 rounded-full shadow-lg hover:bg-[#001760] transition-all duration-300"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}
