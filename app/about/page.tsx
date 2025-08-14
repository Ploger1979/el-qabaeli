export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="bg-cover bg-center text-white min-h-screen px-4 sm:px-6 py-10 font-cairo"
      style={{
        backgroundImage:
          "url('/images/schneider_autohaus_innen_aussen_bearbeitet-1-7.jpg')",
      }}
    >
      {/* طبقة سوداء شفافة لتوضيح النص */}
      <div className="bg-black/70 backdrop-blur-sm p-4 sm:p-8 lg:p-10 rounded-xl max-w-5xl mx-auto text-right">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 border-b-2 border-white pb-2 w-fit">
          من نحن
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6">
          تأسست محلات <strong>القبايلي للسيارات</strong> عام 1987 في سوق
          التوانسة، ومنذ ذلك الحين نعمل بخبرة طويلة في خدمات وتطوير السيارات،
          واضعين راحة ورضا العميل في قلب أولوياتنا.
        </p>

        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6">
          نحرص على تقديم <strong>خدمات متميزة بأسعار مناسبة</strong>، مع توفير
          منتجات ذات جودة عالية، تلبي احتياجات جميع عملائنا.
        </p>

        <div className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-6">
          يضم فريقنا مجموعة من المتخصصين في أنظمة أمان السيارات، بالإضافة إلى
          خبراء في:
          <ul className="list-disc pr-6 mt-4 text-base sm:text-lg leading-loose">
            <li>تصميم وتركيب الاستيكرات والطباعة وتغليف المقاعد.</li>
            <li>إصلاح التكييف وكهرباء السيارات.</li>
            <li>الأقفال وفتحات السقف.</li>
          </ul>
        </div>

        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-center">
          نحن لا نقدم خدمة فقط، بل نخلق تجربة ترضي العميل وتمنحه الثقة في كل
          زيارة.
          <br />
          <strong className="text-[#ffcc00] block mt-4 blink-gold">
            هدفنا بسيط وواضح
            <br />
            راحة العميل وجودة الخدمة
          </strong>
        </p>
      </div>
    </main>
  );
}
