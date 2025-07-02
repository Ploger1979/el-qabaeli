"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaTiktok, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-[#000080] px-8 py-2 flex items-center justify-between text-white">
      {/* الروابط – اليمين */}
      <nav className="flex gap-6 text-white text-2xl font-semibold">
        <Link href="/" className="hover:underline hover:text-blue-300">
          الرئيسية
        </Link>
        <Link href="/about" className="hover:underline hover:text-blue-300">
          من نحن
        </Link>
        <Link href="/services" className="hover:underline hover:text-blue-300">
          الخدمات
        </Link>
        <Link href="/products" className="hover:underline hover:text-blue-300">
          المنتجات
        </Link>
      </nav>

      {/* اللوجو – في النص */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/Auto-logo-Photoroom.png"
          alt="القبائلي"
          width={160}
          height={50}
          className="object-contain scale-[2.5]"
        />
      </div>

      {/* تواصل اجتماعي – اليسار */}
      <div className="flex flex-col items-center gap-1 text-white text-xl">
        <p className="text-lg mb-1">تواصل معنا</p>
        <div className="flex gap-2">
          <a
            href="https://wa.me/00218925881949"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-2 rounded-full hover:scale-110 transition"
          >
            <FaWhatsapp className="text-white" />
          </a>

          <a
            href="https://facebook.com/ayman.elamin.90"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-2 rounded-full hover:scale-110 transition"
          >
            <FaFacebookF className="text-white" />
          </a>

          <a
            href="https://www.tiktok.com/@alqabayli"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black p-2 rounded-full hover:scale-110 transition"
          >
            <FaTiktok className="text-white" />
          </a>
          {/* Email Icon */}
          <a
            href="mailto:sskknnrr15@gmail.com"
            className="bg-red-500 p-2 rounded-full hover:scale-110 transition"
          >
            <FaEnvelope className="text-white" />
          </a>
        </div>
      </div>
    </header>
  );
}
