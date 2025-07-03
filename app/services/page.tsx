export default function ServicesPage() {
  return (
    <main
      dir="rtl"
      className="relative min-h-screen text-white font-cairo"
      style={{
        backgroundImage: "url('/images/ayman-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* طبقة سوداء شفافة لتوضيح النص */}
      <div className="bg-black/60 min-h-screen px-4 sm:px-6 py-16 flex flex-col items-center text-center">
        {/* العنوان والشعار */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            القبائلي
          </h1>
          <p className="text-lg sm:text-2xl lg:text-3xl leading-relaxed">
            هدفنا بسيط وواضح
            <br />
            راحة العميل وجودة الخدمة
          </p>
        </div>

        {/* وصف الخدمة العام */}
        <section className="mb-12">
          <p className="text-lg sm:text-xl lg:text-3xl max-w-3xl leading-relaxed text-white">
            نقدم مجموعة متكاملة من الخدمات التي تجعل سيارتك مميزة
          </p>
        </section>

        {/* قائمة الخدمات */}
        <section className="bg-white/90 text-black rounded-xl p-6 sm:p-8 lg:p-10 w-full max-w-4xl shadow-lg animate-fade-in-up">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#20438a] mb-6 text-right">
            خدماتنا تشمل:
          </h3>
          <ul className="space-y-4 text-base sm:text-xl lg:text-2xl leading-loose text-right">
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
