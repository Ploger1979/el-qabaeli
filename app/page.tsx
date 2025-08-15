import Image from "next/image";

export default function Home() {
  return (
    <main dir="rtl" className="bg-white text-white min-h-screen font-cairo">
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/WebP2/Rot-Auto.webp"
          alt="خلفية سيارة"
          fill
          priority
          className="object-cover object-[center_top] sm:object-center"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-between text-center px-4 pt-10 pb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-relaxed">
            ✨مرحباً بك في القبائلي لكماليات السيارات✨
          </h1>

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
