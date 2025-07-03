export default function Home() {
  return (
    <main dir="rtl" className="bg-white text-white min-h-screen font-cairo">
      {/* صورة الترحيب */}
      <section
        className="relative bg-center bg-cover text-center"
        style={{
          backgroundImage: "url('/images/Orange-Auto.jpg')",
          minHeight: "100vh",
        }}
      >
        {/* العنوان */}
        <div className="absolute top-10 w-full px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black leading-relaxed">
            ✨مرحباً بك في القبائلي لكماليات السيارات✨
          </h1>
        </div>

        {/* الفقرات */}
        <div className="absolute bottom-10 w-full px-4 sm:px-10">
          <div className="text-xl sm:text-2xl md:text-3xl text-white leading-loose space-y-4">
            <p>نحن وجهتك الأولى لتجهيز سيارتك بأفضل الإكسسوارات</p>
            <p>
              خدماتنا تشمل: تركيب إكسسوارات، تلميع سيارات، أنظمة صوت، كشّافات،
              والمزيد
            </p>
            <p>الجودة والذوق الرفيع هو شعارنا، ورضاك هو هدفنا</p>
          </div>
        </div>
      </section>
    </main>
  );
}
