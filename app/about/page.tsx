export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="bg-cover bg-center text-white min-h-screen px-6 py-10 text-right font-cairo"
      style={{
        backgroundImage:
          "url('/images/schneider_autohaus_innen_aussen_bearbeitet-1-7.jpg')",
      }}
    >
      <div className="bg-[#000000a0] p-6 rounded-xl max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 border-b-2 border-white pb-2 w-fit">
          من نحن
        </h1>

        <p className="text-3xl leading-relaxed mb-6">
          تأسست محلات <strong>القبايلي للسيارات</strong> عام 1987 في سوق
          الحديقة، ومنذ ذلك الحين نعمل بخبرة طويلة في خدمات وتطوير السيارات،
          واضعين راحة ورضا العميل في قلب أولوياتنا.
        </p>

        <p className="text-3xl leading-relaxed mb-6">
          نحرص على تقديم <strong>خدمات متميزة بأسعار مناسبة</strong>، مع توفير
          منتجات ذات جودة عالية، تلبي احتياجات جميع عملائنا.
        </p>

        <div className="text-3xl leading-relaxed mb-6">
          يضم فريقنا مجموعة من المتخصصين في أنظمة أمان السيارات، بالإضافة إلى
          خبراء في:
          <ul className="list-disc pr-6 mt-4 text-2xl leading-loose">
            <li>تصميم وتركيب الاستيكرات والطباعة وتغليف المقاعد.</li>
            <li>إصلاح التكييف وكهرباء السيارات.</li>
            <li>الأقفال وفتحات السقف.</li>
          </ul>
        </div>

        <p className="text-3xl leading-relaxed">
          نحن لا نقدم خدمة فقط، بل نخلق تجربة ترضي العميل وتمنحه الثقة في كل
          زيارة.
          <br />
          <strong>هدفنا بسيط وواضح: راحة العميل وجودة الخدمة.</strong>
        </p>
      </div>
    </main>
  );
}
