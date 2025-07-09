"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
  FaEnvelope,
  FaHome,
  FaUserFriends,
  FaTools,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "/", icon: <FaHome /> },
    { name: "من نحن", href: "/about", icon: <FaUserFriends /> },
    { name: "الخدمات", href: "/services", icon: <FaTools /> },
    { name: "المنتجات", href: "/products", icon: <FaBoxOpen /> },
    { name: "موقعنا", href: "/location", icon: <FaMapMarkerAlt /> },
    { name: "السلة", href: "/cart", icon: <FaShoppingCart /> },
  ];

  return (
    <>
      {/* ✅ شريط ترحيب أعلى الصفحة */}
      <div className="bg-yellow-400 text-black py-1 px-2 flex items-center justify-center gap-2 text-sm font-semibold animate-pulse">
        {/* ✅ صورة السيارة */}
        <Image
          src="/images/car-line-logo.png"
          alt="car"
          width={60}
          height={30}
          className="object-contain"
        />
        <span className="blink-gold">
          عروض خاصة اليوم فقط على كماليات السيارات – اطلب الآن عبر واتساب!
        </span>
      </div>

      {/* ✅ الهيدر الرئيسي بخلفية Gradient */}
      <header className="bg-gradient-to-r from-[#000080] to-[#003366] px-4 sm:px-8 py-3 text-white">
        {/* ✅ Desktop Header */}
        <div className="hidden md:flex items-center justify-between">
          {/* ✅ روابط التنقل */}
          <nav className="flex gap-6 text-xl font-semibold">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="hover:underline hover:text-yellow-300 flex items-center gap-1"
              >
                <span className="text-xl">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ✅ لوجو كبير وبارز ومتجاوب على كل الشاشات */}
          <div className="relative min-w-[200px] h-[70px] sm:min-w-[220px] sm:h-[80px] md:min-w-[240px] md:h-[90px] lg:min-w-[260px] lg:h-[100px]">
            <Image
              src="/images/Auto-logo-Photoroom.png"
              alt="القبائلي"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* ✅ السوشيال ميديا */}
          <div className="flex flex-col items-end">
            <p className="text-lg underline mb-1">تواصل معنا</p>
            <div className="flex gap-2 text-xl">
              <a href="https://wa.me/218925881949" target="_blank" className="bg-green-500 p-2 rounded-full hover:scale-110 hover:rotate-3 transition"><FaWhatsapp /></a>
              <a href="https://facebook.com/slyman.kylany.193044" target="_blank" className="bg-blue-600 p-2 rounded-full hover:scale-110 hover:rotate-3 transition"><FaFacebookF /></a>
              <a href="https://www.tiktok.com/@sliman.kelane" target="_blank" className="bg-black p-2 rounded-full hover:scale-110 hover:rotate-3 transition"><FaTiktok /></a>
              <a href="mailto:sskknnrr15@gmail.com" className="bg-red-500 p-2 rounded-full hover:scale-110 hover:rotate-3 transition"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Header */}
        <div className="md:hidden flex justify-between items-center">
          {/* ✅ اللوجو للموبايل */}
          <div className="relative w-36 h-12">
            <Image
              src="/images/Auto-logo-Photoroom.png"
              alt="القبائلي"
              fill
              className="object-contain"
            />
          </div>

          {/* ✅ زر المينيو للموبايل */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {/* ✅ قائمة الموبايل المنسدلة */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-4">
            {/* ✅ روابط التنقل */}
            <div className="flex flex-col gap-3 text-xl font-semibold text-white">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-2 hover:underline"
                >
                  <span>{link.icon}</span>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* ✅ سوشيال ميديا للموبايل */}
            <div className="flex flex-col items-center gap-2 mt-4">
              <p className="text-lg underline text-white">تواصل معنا</p>
              <div className="flex gap-3 text-xl">
                <a href="https://wa.me/218925881949" target="_blank" className="bg-green-500 p-2 rounded-full hover:scale-110 hover:rotate-3 transition"><FaWhatsapp /></a>
                <a href="https://facebook.com/slyman.kylany.193044" target="_blank" className="bg-blue-600 p-2 rounded-full hover:scale-110 hover:rotate-3 transition"><FaFacebookF /></a>
                <a href="https://www.tiktok.com/@sliman.kelane" target="_blank" className="bg-black p-2 rounded-full hover:scale-110 hover:rotate-3 transition"><FaTiktok /></a>
                <a href="mailto:sskknnrr15@gmail.com" className="bg-red-500 p-2 rounded-full hover:scale-110 hover:rotate-3 transition"><FaEnvelope /></a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
