import Footer from "./components/Footer";
export default function Home() {
  return (
    <main dir="rtl" className="bg-white text-white min-h-screen font-cairo">
      {/* صورة الترحيب */}
      <section
        className="bg-cover bg-center text-center relative"
        style={{
          backgroundImage: "url('/images/Orange-Auto.jpg')",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-5 w-full">
          <h1 className="text-6xl font-bold text-black">
            ✨مرحباً بك في القبائلي لكماليات السيارات✨
          </h1>
        </div>
        <div className="absolute bottom-0 w-full px-4">
          <p className="text-3xl">
            نحن وجهتك الأولى لتجهيز سيارتك بأفضل الإكسسوارات
          </p>
          <p className="text-3xl mt-2">
            خدماتنا تشمل: تركيب إكسسوارات، تلميع سيارات، أنظمة صوت، كشّافات،
            والمزيد
          </p>
          <p className="text-3xl mt-2">
            الجودة والذوق الرفيع هو شعارنا، ورضاك هو هدفنا
          </p>
        </div>
      </section>
    </main>
  );
}
