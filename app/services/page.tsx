export default function ServicesPage() {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen text-white font-cairo"
      style={{
        backgroundImage: "url('/images/ayman-1.png')", // صورتك كخلفية
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* غطاء غامق شفاف لتوضيح النص */}
      <div className="bg-black/60 min-h-screen px-6 py-20 flex flex-col items-center text-center">

        {/* اللوجو والنص */}
        <div className="mb-12">
        <h1 className="text-6xl font-bold text-white mb-2 ">
             القبائلي
        </h1>
          <p className="text-5xl text-white leading-relaxed">
            هدفنا بسيط وواضح<br />
            راحة العميل وجودة الخدمة
          </p>
        </div>

        {/* العنوان الرئيسي */}
        <section className="mb-16">
          
          <p className="text-5xl">
            نقدم مجموعة متكاملة من الخدمات التي تجعل سيارتك مميزة
          </p>
        </section>

        {/* قائمة الخدمات */}
        <section className="bg-white/90 text-black rounded-xl p-8 w-full max-w-4xl shadow-lg animate-fade-in-up">
  <h3 className="text-5xl font-semibold text-[#20438a] mb-6 text-right">
   خدماتنا تشمل: 
  </h3>
  <ul className="space-y-4 text-3xl leading-loose text-right">
    <li>✨ تركيب إكسسوارات داخلية وخارجية</li>
    <li>✨ تلميع خارجي وداخلي احترافي</li>
    <li>✨ تركيب أنظمة صوت عالية الجودة</li>
    <li>✨ تركيب كشافات وأضواء LED</li>
    <li>✨ تجهيز سيارات العرسان والمناسبات</li>
  </ul>
</section>

      </div>
    </main>
  );
}
