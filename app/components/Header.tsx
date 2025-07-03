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
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/Auto-logo-Photoroom.png"
            alt="القبائلي"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {/* Navigation – Desktop */}
        <nav className="hidden md:flex gap-6 text-lg font-semibold">
          <Link href="/" className="hover:underline hover:text-blue-300">
            الرئيسية
          </Link>
          <Link href="/about" className="hover:underline hover:text-blue-300">
            من نحن
          </Link>
          <Link
            href="/services"
            className="hover:underline hover:text-blue-300"
          >
            الخدمات
          </Link>
          <Link
            href="/products"
            className="hover:underline hover:text-blue-300"
          >
            المنتجات
          </Link>
          <Link
            href="/location"
            className="hover:underline hover:text-blue-300"
          >
            موقعنا
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation + Social */}
      <div
        className={`flex-col md:flex-row md:flex justify-between items-center mt-4 ${
          menuOpen ? "flex" : "hidden"
        } md:mt-0`}
      >
        {/* Navigation – Mobile */}
        <nav className="flex flex-col md:hidden gap-4 text-lg mb-4">
          <Link href="/" className="hover:underline hover:text-blue-300">
            الرئيسية
          </Link>
          <Link href="/about" className="hover:underline hover:text-blue-300">
            من نحن
          </Link>
          <Link
            href="/services"
            className="hover:underline hover:text-blue-300"
          >
            الخدمات
          </Link>
          <Link
            href="/products"
            className="hover:underline hover:text-blue-300"
          >
            المنتجات
          </Link>
          <Link
            href="/location"
            className="hover:underline hover:text-blue-300"
          >
            موقعنا
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-2 justify-center text-xl">
          <a
            href="https://wa.me/00218925881949"
            target="_blank"
            className="bg-green-500 p-2 rounded-full hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com/slymn.kyln"
            target="_blank"
            className="bg-blue-600 p-2 rounded-full hover:scale-110 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.tiktok.com/sliman kelane"
            target="_blank"
            className="bg-black p-2 rounded-full hover:scale-110 transition"
          >
            <FaTiktok />
          </a>
          <a
            href="mailto:sskknnrr15@gmail.com"
            className="bg-red-500 p-2 rounded-full hover:scale-110 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
}
