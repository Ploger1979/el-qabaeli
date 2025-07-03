"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaTiktok, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#000080] px-4 sm:px-8 py-3 text-white">
      {/* ✅ Desktop Header */}
      <div className="hidden md:flex items-center justify-between">
        {/* اليمين: المنيو */}
        <nav className="flex gap-6 text-xl font-semibold">
          <Link href="/" className="hover:underline hover:text-blue-300">الرئيسية</Link>
          <Link href="/about" className="hover:underline hover:text-blue-300">من نحن</Link>
          <Link href="/services" className="hover:underline hover:text-blue-300">الخدمات</Link>
          <Link href="/products" className="hover:underline hover:text-blue-300">المنتجات</Link>
          <Link href="/location" className="hover:underline hover:text-blue-300">موقعنا</Link>
        </nav>

        {/* اللوجو في النص */}
        <div className="relative w-180 h-50">
          <Image
            src="/images/Auto-logo-Photoroom.png"
            alt="القبائلي"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* السوشيال ميديا */}
        <p className="text-lg underline mb-1">تواصل معنا</p>
        <div className="flex gap-2 text-xl">
          <a href="https://wa.me/218925881949" target="_blank" className="bg-green-500 p-2 rounded-full hover:scale-110 transition"><FaWhatsapp /></a>
          <a href="https://facebook.com/slyman.kylany.193044" target="_blank" className="bg-blue-600 p-2 rounded-full hover:scale-110 transition"><FaFacebookF /></a>
          <a href="https://www.tiktok.com/@sliman.kelane" target="_blank" className="bg-black p-2 rounded-full hover:scale-110 transition"><FaTiktok /></a>
          <a href="mailto:sskknnrr15@gmail.com" className="bg-red-500 p-2 rounded-full hover:scale-110 transition"><FaEnvelope /></a>
        </div>
      </div>

      {/* ✅ Mobile Header */}
      <div className="md:hidden flex justify-between items-center">
        <div className="relative w-32 h-10">
          <Image
            src="/images/Auto-logo-Photoroom.png"
            alt="القبائلي"
            fill
            className="object-contain"
          />
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* ✅ Mobile Menu & Social */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4">
          {/* المنيو */}
          <nav className="flex flex-col gap-3 text-lg font-semibold">
            <Link href="/" className="hover:underline hover:text-blue-300">الرئيسية</Link>
            <Link href="/about" className="hover:underline hover:text-blue-300">من نحن</Link>
            <Link href="/services" className="hover:underline hover:text-blue-300">الخدمات</Link>
            <Link href="/products" className="hover:underline hover:text-blue-300">المنتجات</Link>
            <Link href="/location" className="hover:underline hover:text-blue-300">موقعنا</Link>
          </nav>

          {/* سوشيال ميديا */}
          <div className="flex gap-3 text-xl">
            <a href="https://wa.me/218925881949" target="_blank" className="bg-green-500 p-2 rounded-full hover:scale-110 transition"><FaWhatsapp /></a>
            <a href="https://facebook.com/slyman.kylany.193044" target="_blank" className="bg-blue-600 p-2 rounded-full hover:scale-110 transition"><FaFacebookF /></a>
            <a href="https://www.tiktok.com/@sliman.kelane" target="_blank" className="bg-black p-2 rounded-full hover:scale-110 transition"><FaTiktok /></a>
            <a href="mailto:sskknnrr15@gmail.com" className="bg-red-500 p-2 rounded-full hover:scale-110 transition"><FaEnvelope /></a>
          </div>
        </div>
      )}
    </header>
  );
}
