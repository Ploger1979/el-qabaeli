"use client";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white text-black font-cairo px-4 py-10"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-[#20438a] mb-8 text-center underline">
        موقعنا
      </h1>

      <section className="max-w-4xl mx-auto bg-white/90 rounded-xl p-6 md:p-10 shadow-xl text-2xl hover:scale-[1.02] transition-transform duration-300 border border-transparent hover:border-[#000080]">
        {/* ✅ العنوان مع أيقونة */}
        <div className="mb-8">
          <p className="text-3xl font-bold mb-4 text-[#000080] flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-600 text-3xl animate-bounce" />
            العنوان:
          </p>
          <p className="leading-relaxed text-xl md:text-2xl text-gray-800 font-semibold">
            محل رقم 27 – سوق الحديقة
            <br />
            بجوار نادي الهلال
            <br />
            بنغازي – ليبيا
          </p>
        </div>

        {/* ✅ أوقات العمل مع ساعة تنبض */}
        <div className="bg-blue-50 text-blue-900 rounded-lg p-4 mt-6 text-xl shadow-md flex items-start gap-3">
          <span className="animate-pulse text-blue-700 text-2xl">🕒</span>
          <span>
            نحن متواجدون <strong>يوميًا من الساعة 9 صباحًا حتى 7 مساءً</strong>،
            <br />
            باستثناء يوم الجمعة (إجازة أسبوعية).
          </span>
        </div>

        {/* ✅ الخريطة */}
        <div className="mt-10">
          <p className="text-3xl font-bold mb-4 text-[#000080]">موقعنا على الخريطة:</p>
          <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.7638856201574!2d20.07526831478884!3d32.10931198118451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a8e1e319c95ad9%3A0x52d72b5f2299290b!2z2KzYp9ix2LPYqSDYp9mE2YXYt9mK2YbYqSDYp9mE2YXYt9io2YrYqQ!5e0!3m2!1sar!2sly!4v1720000000000!5m2!1sar!2sly"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* ✅ زر لفتح الخريطة مباشرة */}
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/place/%D8%B3%D9%88%D9%82+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D9%82%D8%A9%E2%80%AD/@32.1093119,20.0752683,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#000080] text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition text-lg font-semibold shadow-md"
            >
              افتح الموقع على Google Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
