export default function LocationPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-black font-cairo p-6">
      <h1 className="text-6xl font-bold text-[#20438a] mb-4 text-center underline">
        موقعنا
      </h1>
      <br />

      <section className="max-w-3xl mx-auto bg-white/80 rounded-lg p-6 shadow-md text-2xl hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
        <p className="text-2xl font-bold mb-4">العنوان:</p>
        <p className="mb-6 text-[#000080] font-semibold leading-relaxed">
          محل رقم 27 – سوق الحديقة
          <br />
          بجوار نادي الهلال
          <br />
          بنغازي – ليبيا
        </p>

        <h2 className="text-2xl font-bold mb-4">موقعنا على الخريطة:</h2>
        <div className="w-full h-[300px] rounded overflow-hidden shadow">
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
      </section>
    </main>
  );
}
