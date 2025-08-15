'use client';
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "./products-data";
import { useEffect } from "react";
import Image from 'next/image';

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState<number | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "القبايلي",
      "url": "https://el-qabaeli.com/products",
      "image": "https://el-qabaeli.com/images/opengraph-products.jpg",
      "description": "اكسسوارات سيارات عالية الجودة – كماليات، فرش، تغطيات، قطع غيار.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "بنغازي",
        "addressCountry": "LY",
      },
      "sameAs": [
        "https://www.facebook.com/alqabaeli",
        "https://www.instagram.com/alqabaeli"
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <>
      <main dir="rtl" className="bg-white text-black font-cairo min-h-screen px-4 sm:px-6 py-10">
        <section className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#20438a] mb-4 underline">
            منتجاتنا
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-gray-700">
            اكتشف مجموعتنا المميزة من كماليات السيارات
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:scale-[1.02] transition-transform duration-300 border border-transparent hover:border-[#000080]"
            >
              {/* ✅ الصور */}
              {product.id === 4 ? (
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Image
                    src="/images/montagat/WebP/dashboard_polish.webp"
                    alt="Flamingo Polish جميع الروائح"
                    width={500}
                    height={500}
                    className="rounded shadow w-full h-auto object-cover"
                  />
                  <Image
                    src="/images/montagat/WebP/dashboard_polish_car.webp"
                    alt="Flamingo Polish داخل السيارة"
                    width={500}
                    height={500}
                    className="rounded shadow w-full h-auto object-cover"
                  />
                </div>
              ) : product.images ? (
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {product.images.map((src, index) => (
                    <Image
                      key={index}
                      src={`/images/montagat/WebP/${src.split('/').pop()?.replace(/\.(jpg|png)$/i, '.webp')}`}
                      alt={`${product.name} صورة ${index + 1}`}
                      width={500}
                      height={500}
                      className="rounded w-full h-auto object-cover"
                    />
                  ))}
                </div>
              ) : product.image ? (
                <div className="mb-4">
                  <Image
                    src={`/images/montagat/WebP/${product.image.split('/').pop()?.replace(/\.(jpg|png)$/i, '.webp')}`}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="rounded w-full h-auto object-cover"
                  />
                </div>
              ) : null}


              {/* ✅ الاسم */}
              <h2 className="text-2xl font-bold mb-2 text-pink-700 leading-snug">
                {[1, 2, 3, 4, 5].includes(product.id) ? (
                  <>
                    {product.name.split(" - ")[0]} <br />
                    <span className="text-[#20438a]">
                      {product.name.split(" - ")[1]}
                    </span>
                  </>
                ) : (
                  product.name
                )}
              </h2>

              {/* ✅ وصف خاص لمنتج رقم 3 */}
              {product.id === 3 ? (
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <span className="text-2xl font-bold blink-gold">
                    استرجع انتعاش التكييف في دقائق
                    <br />
                    <span className="flex items-center gap-2 text-2xl font-bold blink-gold">
                      بلمسة واحدة!
                      <Image
                        src="/images/montagat/WebP/pinklike_116094.webp"
                        alt="Thumb icon"
                        width={24}
                        height={24}
                        className="inline-block"
                      />
                    </span>
                  </span>
                  <br />
                  {product.description}
                </p>
              ) : product.id === 4 ? (
                <p className="text-lg text-black-700 leading-relaxed mb-4">
                  احصل على طبلون لامع بمظهر أنيق مع ملمّع <strong>Flamingo</strong> المصمم لحماية وتنظيف أسطح السيارة الداخلية.
                  مناسب للطبلون، البلاستيك، الجلد، المطاط، والڤينيل – ويمنح مظهراً "رطباً" يدوم طويلاً.
                </p>
              ) : product.description && (
                <p className="text-lg text-black-700 leading-relaxed mb-4">
                  {product.description}
                </p>
              )}

              {/* ✅ روائح المنتج رقم 4 */}
              {product.id === 4 && (
                <p className="text-md text-black-600 mb-2 leading-relaxed">
                  <strong>متوفر بـ 6 روائح رائعة:</strong><br />
                  🍓 فراولة<br />
                  🍋 ليمون<br />
                  🌸 ياسمين<br />
                  🍑 خوخ<br />
                  🪵 عود<br />
                  🧊 بلاك آيس
                </p>
              )}

              {/* ✅ المميزات أو طريقة الاستخدام */}
              {product.features && (
                <div className="text-md text-black-600 mb-4 leading-relaxed">
                  <strong className="block mb-1">
                    {[1, 2, 3, 4].includes(product.id)
                      ? "طريقة الاستخدام:"
                      : "المميزات:"}
                  </strong>
                  <ul className="list-disc pr-5">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ✅ وصف خاص للمنتج رقم 5 */}
              {product.id === 5 && (
                <>
                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    منظف حاقن الوقود من <strong>Flamingo</strong> هو الحل الأمثل لتحسين كفاءة المحرك وتقليل استهلاك الوقود.
                    تركيبته المتقدمة تعمل على إزالة الرواسب ومنع التآكل وتقليل الاحتكاك، مما يطيل عمر الحاقن ويحسّن أداء السيارة بشكل ملحوظ.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>يحسّن تسارع واستجابة المحرك</li>
                    <li>يقلل استهلاك الوقود ويوفر المال</li>
                    <li>يقلل الانبعاثات ويحافظ على البيئة</li>
                    <li>يمنع التآكل ويطيل عمر نظام الحقن الداخلي</li>
                    <li>سهل الاستخدام – عبوة واحدة تكفي لخزان وقود كامل</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 6 */}
              {product.id === 6 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    منظومة عدسة أمامية <br />
                    <span className="text-[#20438a]">5D LED – 2×60W</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    منظومة عدسة <strong>LED 5D</strong> عالية الكفاءة، تمنحك إضاءة مركزة وقوية بنسبة سطوع تصل إلى <strong>300%</strong> مقارنةً بالمصابيح التقليدية.
                    مثالية لتحسين الرؤية الليلية، مع تصميم متين ومروحة تبريد فعالة لضمان ثبات الإضاءة وحماية ضد السخونة.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المواصفات التقنية:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>القوة: 2×60 واط</li>
                    <li>شدة الإضاءة: 12000 لومن</li>
                    <li>الجهد الكهربائي: 12V – 24V</li>
                    <li>الألوان المتوفرة: أصفر، أبيض، أزرق</li>
                    <li>نظام تبريد مدمج + مقاوم للماء والغبار</li>
                  </ul>
                </>
              )}
              {/* ✅ وصف خاص للمنتج رقم 7 */}
              {product.id === 7 ? (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    غطاء كراسي جلد فاخر <br />
                    <span className="text-[#20438a]">Beige & Red</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    غطاء كراسي بتصميم أنيق ومتين يضيف لمسة فاخرة لداخل سيارتك.
                    مصنوع من جلد صناعي عالي الجودة مقاوم للماء، الغبار والخدوش.
                    يتميز ببطانة مريحة وتفصيل دقيق يناسب معظم أنواع السيارات.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>تصميم مميز بلون بيج × أحمر يعطي لمسة رياضية وفخمة</li>
                    <li>حماية كاملة للمقاعد من التلف والبقع</li>
                    <li>خامات ناعمة ومريحة للجلوس في الرحلات الطويلة</li>
                    <li>سهل التركيب والفك، بدون أدوات</li>
                    <li>يناسب معظم السيارات السيدان والدفع الرباعي</li>
                  </ul>
                </>
              ) : null}

              {/* ✅ وصف خاص للمنتج رقم 8 */}
              {product.id === 8 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    طقم كراسي قماش فاخر <br />
                    <span className="text-[#20438a]">Dark Beige</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    غطِّي مقاعد سيارتك بطقم فاخر من القماش الناعم والمبطن، يمنحك راحة فريدة ولمسة أنيقة داخل المقصورة.
                    يوفر الحماية من البقع والغبار والتآكل، مع تصميم كلاسيكي بلون بيج يناسب أغلب السيارات العائلية والفخمة.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>قماش ناعم عالي الجودة ومقاوم للتآكل</li>
                    <li>تصميم مبطن مريح للرحلات الطويلة</li>
                    <li>حماية كاملة للمقاعد من الاتساخ والخدوش</li>
                    <li>سهل الفك والتركيب – بدون أدوات</li>
                    <li>يشمل: غطاء للمقاعد الأمامية والخلفية + مخدات دعم</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 9 */}
              {product.id === 9 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    غطاء كراسي قماش رياضي <br />
                    <span className="text-[#20438a]">Black & Green</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    غطاء عصري بتصميم رياضي فاخر يمنح سيارتك مظهرًا جريئًا وأنيقًا في نفس الوقت.
                    مصنوع من خامات قماش متينة، ومبطن بطبقات إسفنجية لراحة الجلوس وحماية كاملة للمقاعد من التآكل والخدوش.
                  </p>

                  <div className="text-md text-black-600 mb-4 leading-relaxed">
                    <strong className="block mb-1">المميزات:</strong>
                    <ul className="list-disc pr-5">
                      <li>خامة قماشية عالية الجودة مع لمسة جلدية</li>
                      <li>تصميم رياضي بلون أخضر مميز يناسب الذوق العصري</li>
                      <li>تغطية شاملة للمقاعد الأمامية والخلفية + مساند الرأس</li>
                      <li>سهل التنظيف والتركيب بدون أدوات</li>
                      <li>مناسب للسيارات السيدان والدفع الرباعي</li>
                    </ul>
                  </div>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 10 */}
              {product.id === 10 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    غطاء كراسي جلد فاخر <br />
                    <span className="text-[#20438a]">Brown & Black</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    طقم مقاعد جلد فاخر بتصميم احترافي يغطي الكراسي الأمامية والخلفية بالكامل.
                    يمنح السيارة مظهراً فخماً ويحافظ على الكراسي الأصلية من التآكل والاتساخ.
                    مصنوع من خامات جلد صناعي متينة، ومبطّن بطبقة مريحة للجلوس.
                  </p>

                  <div className="text-md text-black-600 mb-4 leading-relaxed">
                    <strong className="block mb-1">المميزات:</strong>
                    <ul className="list-disc pr-5">
                      <li>خامة جلد مقاومة للماء والبقع والخدوش</li>
                      <li>تصميم أنيق بخياطة مضلعة يمنح مظهر احترافي</li>
                      <li>تركيب سهل بدون أدوات – مع تغطية كاملة</li>
                      <li>يناسب معظم أنواع السيارات السيدان والـ SUV</li>
                      <li>يوفر الراحة التامة أثناء القيادة الطويلة</li>
                    </ul>
                  </div>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 11 */}
              {product.id === 11 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700 leading-snug">
                    غطاء كراسي جلد فاخر <br />
                    <span className="text-[#20438a]">Copper & Black</span>
                  </h2>

                  <p className=" text-lg text-black-700 leading-relaxed mb-4">
                    غطاء الكراسي الجلدي بلون <strong>نحاسي × أسود</strong> مصمم ليمنح
                    سيارتك لمسة من الفخامة والأناقة مع حماية فائقة للمقاعد.
                  </p>

                  <div className="text-md text-black-600 mb-4 leading-relaxed">
                    <strong className="block mb-1">المميزات:</strong>
                    <ul className="list-disc pr-5">
                      <li>تصميم أنيق بخطوط ماسية تضيف لمسة فاخرة</li>
                      <li>خامات جلد صناعي عالية الجودة مقاومة للتآكل والبقع</li>
                      <li>حماية شاملة للمقاعد من الخدوش والانسكابات</li>
                      <li>سهولة في التركيب والفك – مناسب لمعظم أنواع السيارات</li>
                      <li>دعم لراحة الظهر والرقبة مع وسائد مدمجة مريحة</li>
                    </ul>
                  </div>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 12 */}
              {product.id === 12 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    ستائر نافذة جانبية مزدوجة السحاب <br />
                    <span className="text-[#20438a]">(2 طرف)</span>
                  </h2>
                  <p className="text-lg text-black-700 leading-relaxed mb-2">
                    حماية خصوصيتك بأناقة – مثالية للعائلات.
                  </p>
                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    ستائر أنيقة وعملية تحجب أشعة الشمس وتحافظ على خصوصيتك داخل السيارة.
                    مثالية للرحلات الطويلة، والنوم داخل السيارة، وحماية الركاب من الحرارة والوهج.
                  </p>

                  <div className="text-md text-black-600 mb-4 leading-relaxed">
                    <strong className="block mb-1">المميزات:</strong>
                    <ul className="list-disc pr-5">
                      <li>تصميم سحاب مزدوج لسهولة الاستخدام مع إمكانية الفتح والغلق من الجانبين</li>
                      <li>مصنوعة من قماش متين وخفيف في نفس الوقت</li>
                      <li>سهلة التركيب والإزالة بدون أدوات</li>
                    </ul>
                  </div>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 13 */}
              {product.id === 13 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    ستارة نافذة جانبية قابلة للطي <br />
                    <span className="text-[#20438a]">
                      تصميم <span className="text-2xl font-bold blink-gold">BMW</span> عالمي (قطعتان)
                    </span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    مظلة شمسية مبتكرة وعملية بتصميم عصري مستوحى من BMW، توفر حماية فعّالة من أشعة الشمس
                    وتُضفي لمسة راقية على سيارتك. مثالية للرحلات اليومية وتوفر الخصوصية للركاب.
                  </p>

                  <div className="text-md text-black-600 mb-4 leading-relaxed">
                    <strong className="block mb-1">المميزات:</strong>
                    <ul className="list-disc pr-5">
                      <li>تصميم قابل للسحب لسهولة الاستخدام والتخزين</li>
                      <li>يحجب حرارة الشمس ويمنع الأشعة فوق البنفسجية الضارة</li>
                      <li>تركيب سهل عبر لاصق أو مشبك – بدون الحاجة لأدوات</li>
                      <li>يناسب معظم نوافذ السيارات (Universal Fit)</li>
                      <li>خامة متينة وأنيقة تدوم طويلاً</li>
                    </ul>
                  </div>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 14 */}
              {product.id === 14 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    سماعات بايونير جانبية للسيارة<br />
                    <span className="text-[#20438a]">Pioneer High Performance</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    استمتع بتجربة صوتية مذهلة داخل سيارتك مع سماعات <strong>Pioneer</strong> عالية الأداء.
                    تصميم أنيق وصوت نقي يمنحك جودة صوت احترافية في كل رحلة، سواء للاستماع إلى الموسيقى أو المكالمات.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>قوة صوتية مذهلة بقدرة تصل إلى <strong>400 واط</strong></li>
                    <li>صوت قوي وواضح بتقنية متعددة الطبقات لتوزيع الصوت</li>
                    <li>قدرة عالية على التعامل مع الترددات المختلفة (Bass و Treble)</li>
                    <li>تصميم متين وأنيق يدوم طويلاً مع استخدام يومي</li>
                    <li>تركيب سهل ومناسب لمعظم السيارات الحديثة</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 15 */}
              {product.id === 15 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    سماعات بايونير بيضاوية الشكل للسيارة<br />
                    <span className="text-[#20438a]">Pioneer Oval Series</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    احصل على أداء صوتي استثنائي مع سماعات <strong>بايونير البيضاوية</strong> عالية الجودة.
                    تصميم عصري وقوة تحمل ممتازة تمنحك تجربة صوتية غنية وواضحة حتى في أعلى درجات الصوت.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>تصميم بيضاوي مميز لتعزيز توزيع الصوت</li>
                    <li>قوة صوت تصل إلى <strong>600 واط</strong> لأداء فائق</li>
                    <li>صوت جهير (Bass) عميق وصوت عالي نقي وواضح</li>
                    <li>مقاومة عالية للحرارة والرطوبة – مناسبة لكل الظروف المناخية</li>
                    <li>سهلة التركيب ومتوافقة مع أغلب أنواع السيارات</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 16 */}
              {product.id === 16 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    سماعات بايونير الأصلية <br />
                    <span className="text-[#20438a]">نقاء صوت مع ضمان</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    ارتقِ بتجربة الصوت في سيارتك مع سماعات <strong>بايونير الأصلية</strong>.
                    توفر أداءً قويًا ونقاء صوت لا مثيل له، مما يجعل كل لحظة قيادة أكثر متعة.
                    مثالية لعشاق الموسيقى ومضمونة بجودة عالية مع ضمان موثوق.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>جودة صوت عالية مع تفاصيل دقيقة في الترددات</li>
                    <li>تصميم دائري أنيق وسهل التركيب</li>
                    <li>خامات مقاومة للاهتزاز والحرارة لضمان أداء طويل الأمد</li>
                    <li>مزودة بضمان رسمي ضد عيوب التصنيع</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 17 */}
              {product.id === 17 && (
                <>
                  {/* ✅ صور المنتج */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <Image
                      src="/images/montagat/WebP/floor-mat-darkbrown.webp"
                      alt="Dark Brown"
                      width={500}
                      height={500}
                      className="rounded w-full h-auto object-cover"
                    />
                    <Image
                      src="/images/montagat/WebP/floor-mat-lightbeige.webp"
                      alt="Light Beige"
                      width={500}
                      height={500}
                      className="rounded w-full h-auto object-cover"
                    />
                  </div>

                  {/* ✅ العنوان */}
                  <h2 className="text-2xl font-bold mb-4 text-pink-700 text-center">
                    فرش أرضية فاخر بالكامل بلونين <br />
                    <span className="text-[#20438a]">Dark Brown</span> <br />او{" "}
                    <span className="text-[#20438a]"> Light Beige</span>
                  </h2>

                  {/* ✅ الوصف */}
                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    طقم فرش فاخر يغطي الأرضية بالكامل بتصميم 5D أنيق ومتين.
                    مصنوع من جلد صناعي عالي الجودة، مقاوم للماء والغبار والانزلاق، ويضيف لمسة راقية لمقصورة سيارتك.
                  </p>

                  {/* ✅ المميزات */}
                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>تغطية شاملة للكراسي الأمامية والخلفية + القطعة الوسطى</li>
                    <li>خامة جلد ناعمة مقاومة للماء والبقع</li>
                    <li>طبقة سفلية مانعة للانزلاق</li>
                    <li>تصميم أنيق يناسب معظم السيارات</li>
                    <li>سهل التركيب والفك – بدون أدوات</li>
                  </ul>

                  {/* ✅ السعر قبل الأزرار */}
                  <p className="text-xl text-red-600 font-bold mb-2 text-center">
                    💰 السعر: 120 د.ل
                  </p>

                  {/* ✅ الأزرار */}
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                    <button
                      onClick={() =>
                        addToCart({
                          ...product,
                          image: "/images/montagat/WebP/floor-mat-darkbrown.webp",
                        })
                      }
                      className="bg-[#5a3212] text-[#00FFFF] px-6 py-2 rounded hover:bg-[#3e210b] transition text-base font-semibold w-[180px] text-center shadow-md"
                    >
                      أضف إلى السلة البني الغامق DarkBrown
                    </button>

                    <button
                      onClick={() =>
                        addToCart({
                          ...product,
                          image: "/images/montagat/WebP/floor-mat-lightbeige.webp",
                        })
                      }
                      className="bg-[#c6b394] text-[#00FFFF] px-6 py-2 rounded hover:bg-[#aa977b] transition text-base font-semibold w-[180px] text-center shadow-md"
                    >
                      أضف إلى السلة البيج الفاتح LightBeige
                    </button>
                  </div>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 18 */}
              {product.id === 18 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    فرش أرضية فاخر <br />
                    <span className="text-[#20438a]">
                      تصميم <span className="text-2xl font-bold blink-gold">BMW</span> خامة ممتازة
                    </span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    فرش أرضية مطاطي عالي الجودة يوفر حماية كاملة لأرضية السيارة من الأوساخ والماء.
                    يتميز بتصميم عملي مضاد للانزلاق وخامة قوية تدوم طويلًا. مناسب للاستخدام اليومي
                    لجميع فصول السنة – تصميم رياضي أنيق يلائم سيارات BMW.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>خامة مطاطية سميكة مضادة للماء والانزلاق</li>
                    <li>تصميم مخصص بتفاصيل شعار BMW</li>
                    <li>سهل التنظيف – يمكن غسله بالماء أو المسح</li>
                    <li>يناسب جميع سيارات BMW السيدان والدفع الرباعي</li>
                    <li>عبوة تشمل: 2 قطع (أمامية + خلفية)</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 19 */}
              {product.id === 19 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    فرش أرضية مطاطي <br />
                    <span className="text-[#20438a]">تصميم فضي أنيق – 4 قطع</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    طقم فرش أرضي فاخر مصنوع من المطاط عالي الجودة مع لمسات من الفضة اللامعة لراحة وأناقة أكبر داخل السيارة.
                    يتميز بسطح مانع للانزلاق ومتين، مقاوم للماء والغبار وسهل التنظيف. مثالي للاستخدام اليومي في جميع الفصول.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>تصميم عصري باللون الفضي لمنح السيارة مظهرًا راقيًا</li>
                    <li>سطح مطاطي مانع للانزلاق</li>
                    <li>سهل الغسيل والتنظيف</li>
                    <li>متوافق مع أغلب أنواع السيارات</li>
                    <li>4 قطع: 2 أمامي + 2 خلفي</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 20 */}
              {product.id === 20 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    فرش أرضية 5 قطع <br />
                    <span className="text-[#20438a]">
                      بتصميم <span className="text-2xl font-bold blink-gold">Toyota</span> الأنيق
                    </span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    طقم فرش أنيق مكوّن من 5 قطع بتصميم فاخر لشعار تويوتا. مصمم ليمنحك مظهر داخلي مميز وحماية قصوى من الغبار والرطوبة.
                    مناسب للسيارات العائلية والموديلات الحديثة.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>5 قطع: 2 أمامي + 2 خلفي + قطعة وسط</li>
                    <li>خامة مطاطية متينة وسهلة التنظيف</li>
                    <li>تصميم فاخر بلون أسود ولمسات بيضاء</li>
                    <li>مضاد للانزلاق ومقاوم للماء</li>
                    <li>شعار تويوتا بارز بدقة عالية</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 21 */}
              {product.id === 21 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    طقم فرش أرضية سيارة <br />
                    <span className="text-[#20438a]">
                      4 قطع <span className="text-2xl font-bold blink-gold">ماركه Mazda</span>
                    </span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    أضف لمسة من الأناقة والحماية لمقصورة سيارتك مع فرش الأرضية المطاطي الأصلي من <strong>Mazda</strong>.
                    مصمم بجودة عالية ليدوم طويلًا، ويمنحك تغطية شاملة ضد الأوساخ والطين والانسكابات.
                    يوفر سطحًا مانعًا للانزلاق وثباتًا عاليًا أثناء القيادة.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>خامة مطاطية عالية الجودة مقاومة للتآكل</li>
                    <li>تصميم رياضي مزوّد بشعار Mazda الرسمي</li>
                    <li>حماية شاملة لأرضية السيارة من الأتربة والرطوبة</li>
                    <li>سهل التنظيف – فقط اغسله بالماء ويمسح</li>
                    <li>يناسب معظم سيارات Mazda (Universal Fit)</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 22 */}
              {product.id === 22 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    طقم فرش أرضية سيارة <br />
                    <span className="text-[#20438a]">
                      4 قطع <span className="text-2xl font-bold blink-gold">ماركه Toyota</span>
                    </span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    حافظ على نظافة وأناقة سيارتك مع طقم فرش الأرضية الأصلي من <strong>Toyota</strong>.
                    مصمم بدقة ليناسب أرضية السيارة ويوفر حماية كاملة من الأتربة والسوائل والبقع اليومية.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>خامات مطاطية عالية الجودة مقاومة للتآكل والحرارة</li>
                    <li>تصميم أنيق يحمل شعار Toyota الأصلي</li>
                    <li>تركيب سهل وتغطية كاملة للمقاعد الأمامية والخلفية</li>
                    <li>سهل التنظيف – فقط اغسل بالماء واتركه يجف</li>
                    <li>مناسب لمعظم سيارات تويوتا (Universal Fit)</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 23 */}
              {product.id === 23 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    فرش أرضية فاخر كامل للسيارة <br />
                    <span className="text-[#20438a]">
                      <span className="text-2xl font-bold blink-gold">Hyundai</span> Red Premium Edition
                    </span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    فرش أرضية كامل فاخر من <strong>Hyundai</strong> بلون أحمر أنيق وخياطة ماسية فخمة.
                    يوفر حماية شاملة لأرضية السيارة بفضل تصميمه المرتفع الذي يغطي الجوانب الداخلية، ويمنح مظهرًا راقٍ لمقصورة سيارتك.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>تصميم ثلاثي الأبعاد يغطي الأرضية بالكامل والجوانب</li>
                    <li>خامات جلد صناعي + طبقة سجاد ناعمة قابلة للإزالة</li>
                    <li>مقاوم للماء والغبار والانسكابات اليومية</li>
                    <li>تركيب محكم بدون أدوات – يناسب معظم سيارات Hyundai</li>
                    <li>سهل التنظيف – فقط امسح أو اشطف بالماء</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 24 */}
              {product.id === 24 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    فرش أرضية 5 قطع Beige فاخر <br />
                    <span className="text-[#20438a]">Muchkey 5D Floor Mats</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    طقم فرش أرضية فاخر من <strong>Muchkey</strong>، تصميم 5D أنيق بلون بيچ يناسب السيارات الفخمة والعائلية.
                    يمنحك حماية كاملة للأرضية مع خامات مقاومة للماء والانزلاق.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>5 قطع تشمل الكراسي الأمامية والخلفية + قطعة تغطية للمنتصف</li>
                    <li>تصميم مرتفع لحماية الجوانب</li>
                    <li>طبقة جلد صناعي فاخرة مقاومة للغبار والماء</li>
                    <li>قاعدة مانعة للانزلاق – سهلة التركيب والتنظيف</li>
                    <li>لون بيچ أنيق يضيف لمسة راقية لمقصورة السيارة</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 25 */}
              {product.id === 25 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700 leading-snug">
                    حامل نقال أصلي
                    <br />
                    <span className="text-[#20438a]">GERLAX GT-13</span>
                  </h2>

                  <p className="text-black-700 leading-relaxed mb-4">
                    حامل الهاتف المتحرك الأصلي من GERLAX موديل <strong>GT-13</strong> يأتي
                    بتصميم أنيق وعملي، قابل للطي ومناسب لجميع الهواتف الذكية.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>دوران 360 درجة لزاوية مشاهدة مثالية</li>
                    <li>سطح كاربون فايبر أنيق ضد الانزلاق</li>
                    <li>قاعدة ثابتة ومفصل قوي لتثبيت الهاتف</li>
                    <li>تصميم مدمج – مثالي للمكتب أو السيارة أو المنزل</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 26 */}
              {product.id === 26 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    حامل هاتف مع شحن لاسلكي سريع <br />
                    <span className="text-[#20438a]">15W Wireless Charging Holder</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    استمتع بقيادة آمنة وشحن سريع في نفس الوقت مع هذا الحامل الذكي المزوّد بشحن لاسلكي بقوة
                    <strong className="text-[#20438a]"> 15 واط</strong>. الحامل مزود بتقنية القفل التلقائي لمزيد من الثبات، ويدعم
                    <span className="text-[#20438a] font-semibold"> أجهزة iOS و Android</span> بكل سهولة.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>شحن لاسلكي سريع بقوة 15 واط</li>
                    <li>دعم لجميع الأجهزة التي تدعم الشحن اللاسلكي (iPhone / Samsung / Huawei...)</li>
                    <li>قفل كهربائي تلقائي بمجرد وضع الهاتف</li>
                    <li>تثبيت آمن على فتحة التكييف – بدون اهتزاز</li>
                    <li>تصميم أنيق وإضاءة LED جانبية</li>
                    <li>حماية للهاتف من الحرارة والجهد الزائد</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 27 */}
              {product.id === 27 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    حامل نقال ذكي مع شحن لاسلكي سريع <br />
                    <span className="text-[#20438a]">Wireless Smart Holder</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    حامل هاتف أنيق بتصميم عصري يدعم الشحن اللاسلكي السريع بقوة <strong className="text-[#20438a]">15 W</strong>.
                    متوافق مع <span className="text-[#20438a] font-semibold">أجهزة iOS و Android</span>، ويتميز بنظام تثبيت ذكي للتعرف على الجهاز تلقائيًا.
                    يأتي بعدة ألوان ويُركب بسهولة على الطبلون، الزجاج الأمامي أو فتحات التكييف.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>شحن سريع لاسلكي بقوة 15 واط</li>
                    <li>تثبيت تلقائي بفضل التعرف الذكي على الهاتف</li>
                    <li>3 طرق للتركيب: على الطبلون، الزجاج الأمامي، فتحات التكييف</li>
                    <li>متوافق مع جميع الهواتف الذكية</li>
                    <li>تصميم مضحك بوجه LED ولون مميز لكل ذوق</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 28 */}
              {product.id === 28 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    حامل نقال ذكي مع شحن لاسلكي سريع <br />
                    <span className="text-[#20438a]">15W Fast Wireless Charging</span>
                  </h2>
                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    استمتع بتجربة قيادة أكثر راحة مع هذا الحامل الذكي للهاتف المحمول. مزود بخاصية القفل التلقائي عند الاقتراب
                    وشحن لاسلكي سريع بقوة <strong>15W</strong>. متوافق مع جميع هواتف iOS وAndroid.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>قفل كهربائي تلقائي عند وضع الهاتف، وفتح بزرين جانبيين</li>
                    <li>شحن لاسلكي سريع بدون تلف للبطارية</li>
                    <li>تركيب سهل على فتحة التكييف أو الزجاج الأمامي</li>
                    <li>دعم لاستخدام الهاتف بيد واحدة أثناء القيادة</li>
                    <li>متوافق مع جميع الهواتف الداعمة للشحن اللاسلكي</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 29 */}
              {product.id === 29 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    ثلاجة سيارة محمولة <br />
                    <span className="text-[#20438a]">سعة 7.5 لتر – تبريد وتسخين</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    <br />
                    ثلاجة إلكترونية محمولة مصممة للاستخدام في السيارة، الرحلات أو المكاتب .
                  </p>
                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    توفر تبريد أو تسخين حسب الحاجة، بسعة 7.5 لتر تكفي للمشروبات، الفواكه أو حتى الوجبات الخفيفة.
                  </p>
                
                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>قفل كهربائي تلقائي عند وضع الهاتف، وفتح بزرين جانبيين</li>
                    <li>شحن لاسلكي سريع بدون تلف للبطارية</li>
                    <li>تركيب سهل على فتحة التكييف أو الزجاج الأمامي</li>
                    <li>دعم لاستخدام الهاتف بيد واحدة أثناء القيادة</li>
                    <li>متوافق مع جميع الهواتف الداعمة للشحن اللاسلكي</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 30 */}
              {product.id === 30 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    طفاية حريق متعددة الأحجام <br />
                    <span className="text-[#20438a]">1 كجم / 2 كجم / 3 كجم</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    احمِ نفسك وسيارتك أو منزلك مع طفاية حريق عالية الجودة متوفرة بثلاثة أحجام.
                    سهلة الاستخدام وسريعة الاستجابة للحوادث الطارئة.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>تصميم معدني متين مقاوم للحرارة</li>
                    <li>رأس ضغط سريع التشغيل</li>
                    <li>مناسبة لجميع أنواع الحرائق الصغيرة</li>
                    <li>حجم عملي مع إمكانية التخزين بسهولة</li>
                    <li>متوفرة بثلاثة أحجام لتناسب احتياجاتك</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 31 */}
              {product.id === 31 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    كابل توليع احترافي <br />
                    <span className="text-[#20438a]">مقابض نحاس + طول 12 قدم</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    كابل توليع بطارية عالي الجودة مزود بمقابض نحاسية قوية لضمان توصيل مثالي وسريع للطاقة. مناسب للسيارات الخاصة والشاحنات الصغيرة، ويمنحك أمان وكفاءة في حالات الطوارئ.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>مقابض نحاس نقية لثبات التوصيل وعدم التآكل</li>
                    <li>قوة عالية تدعم 4GA – طول الكابل 12 قدم (حوالي 3.6 متر)</li>
                    <li>عزل حراري مقاوم للحرارة والأحوال الجوية</li>
                    <li>تصميم مرن وسهل اللف والتخزين</li>
                    <li>مثالي للرحلات، الطوارئ، وشحن السيارات الفارغة</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 32 */}
              {product.id === 32 && (
                <>
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    غطاء خارجي للسيارة <br />
                    <span className="text-[#20438a]">مقاوم للشمس والغبار والمطر</span>
                  </h2>

                  {/* ✅ توضيح السعر حسب المقاس */}
                  <p className="text-md text-red-700 font-semibold mb-3 blink-gold">
                    متوفر بمقاسات مختلفة و الأسعار حسب المقاس
                  </p>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    غطاء حماية خارجي بتصميم قوي لحماية سيارتك من عوامل الطقس المختلفة:
                    أشعة الشمس، المطر، الغبار، الخدوش وفضلات الطيور. متوفر بلونين أنيقين (فضي وأسود) ويأتي بمقاسات تناسب أغلب السيارات.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>خامة مقاومة للماء وعاكسة للشمس</li>
                    <li>مقاومة للغبار وفضلات الطيور وأوراق الشجر</li>
                    <li>رباط سفلي لتثبيت الغطاء وعدم تحريكه بالرياح</li>
                    <li>أشرطة عاكسة للسلامة الليلية</li>
                    <li>سهل الفك والتركيب، وخفيف الوزن</li>
                  </ul>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 33 */}
              {product.id === 33 && (
                <>
                  <br />
                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    كمبروسر هواء للسيارة<br />
                    <span className="text-[#20438a]">بمكبس واحد أو مكبسين</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    كمبروسر قوي لنفخ إطارات السيارة بسرعة وكفاءة. متوفر بنوعين:
                    <strong> <br />1 بسطون </strong> مناسب للاستخدام البسيط،<br />
                    و<strong> 2 بسطون </strong> بقوة أكبر للإطارات الكبيرة.
                  </p>
                     <br />
                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>محرك قوي يعمل على ولاعة السيارة 12V</li>
                    <li>عداد ضغط هواء مدمج لقراءة دقيقة</li>
                    <li>جسم معدني متين ومقاوم للحرارة</li>
                    <li>وصلة طويلة تسهّل الوصول للإطارات الأربعة</li>
                  </ul>
                  <br />
                  <p className="text-xl text-red-600 font-bold mb-2  text-center">
                    💰 السعر: {" "}
                  </p>

                  {/* ✅ عرض الأزرار مع إضافة مباشرة للسلة حسب كل نوع */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                    <button
                      onClick={() =>
                        addToCart({
                          id: 331, // رقم مميز
                          name: "كمبروسر هواء - 1 بسطون",
                          price: 80,
                          quantity: 1,
                          image: "",
                        })
                      }
                      className="bg-[#000080] text-white px-6 py-2 rounded hover:bg-blue-800 transition text-base font-semibold w-[180px] text-center shadow-md"
                    >
                      1 بسطون – 80 د.ل
                    </button>

                    <button
                      onClick={() =>
                        addToCart({
                          id: 332, // رقم مميز آخر
                          name: "كمبروسر هواء - 2 بسطون",
                          price: 120,
                          quantity: 1,
                          image: "",
                        })
                      }
                      className="bg-[#000080] text-white px-6 py-2 rounded hover:bg-blue-800 transition text-base font-semibold w-[180px] text-center shadow-md"
                    >
                      2 بسطون – 120 د.ل
                    </button>
                  </div>
                </>
              )}

              {/* ✅ وصف خاص للمنتج رقم 34 */}
              {product.id === 34 && (
                <>
                  {/* ✅ الصور: 3 فوق + 2 تحت متساويين */}
                  <div className="flex flex-col gap-3 mb-4">
                    {/* ✅ الصف الأول: 3 صور */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Image
                        src="/images/montagat/WebP/sunshade1.webp"
                        alt="صورة 1"
                        width={500}
                        height={300}
                        className="rounded w-full h-auto object-cover"
                      />
                      <Image
                        src="/images/montagat/WebP/sunshade3.webp"
                        alt="صورة 2"
                        width={500}
                        height={300}
                        className="rounded w-full h-auto object-cover"
                      />
                      <Image
                        src="/images/montagat/WebP/sunshade2.webp"
                        alt="صورة 3"
                        width={500}
                        height={300}
                        className="rounded w-full h-auto object-cover"
                      />
                    </div>

                    {/* ✅ الصف الثاني: صورتين فقط – كل واحدة تأخذ نصف العرض */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Image
                        src="/images/montagat/WebP/sunshade4.webp"
                        alt="صورة 4"
                        width={500}
                        height={300}
                        className="rounded w-full h-auto object-cover"
                      />
                      <Image
                        src="/images/montagat/WebP/sunshade5.webp"
                        alt="صورة 5"
                        width={500}
                        height={300}
                        className="rounded w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-2 text-pink-700">
                    ستارة أمامية عازلة للشمس <br />
                    <span className="text-[#20438a]">حماية متكاملة لزجاج السيارة الأمامي</span>
                  </h2>

                  <p className="text-lg text-black-700 leading-relaxed mb-4">
                    ستارة أمامية مميزة لحماية الزجاج الأمامي من أشعة الشمس الحارقة، تقلل من حرارة السيارة وتحمي التابلوه من التلف والتشققات.
                    مصنوعة من خامة عاكسة مقاومة للحرارة، سهلة الطي والتركيب، وتتوفر بمقاسين يناسبان أغلب أنواع السيارات.
                  </p>

                  <strong className="block text-md text-black-600 mb-2">المميزات:</strong>
                  <ul className="list-disc pr-5 leading-relaxed text-black-600 text-md mb-4">
                    <li>خامة عازلة للحرارة تعكس أشعة الشمس وتقلل من حرارة المقصورة الداخلية</li>
                    <li>تصميم قابل للطي – يشبه المظلة لتسهيل التخزين</li>
                    <li>تثبيت سهل باستخدام الأربطة الجانبية</li>
                    <li>مقاس يناسب أغلب السيارات: 145×110 سم أو 125×65 سم</li>
                    <li>شكل أنيق ولون مميز يضيف لمسة جمالية لواجهة السيارة</li>
                  </ul>
                </>
              )}

             {/**********************************************************************/}
              
              {/* ✅ عرض مخصص لبعض المنتجات اللي ليها Variants (مثل 32، 33) */}
              {[32, 33].includes(product.id) ? (
                <>
                  {/* ✅ عرض سعر خاص لو المنتج 32 */}
                  {product.id === 32 && (
                    <p className="text-xl text-red-600 font-bold mb-2 text-center">
                      💰 السعر: من 120 حتى 160 د.ل حسب المقاس
                    </p>
                  )}

                  {/* ✅ زرّين في وسط الكرت بشكل احترافي */}
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                    {product.variantButtons?.map((variant, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          addToCart({
                            ...product,
                            image: variant.image,
                            price: variant.price ?? product.price,
                            id: parseInt(`${product.id}${idx}`), // ID مميز للتمييز بين الأنواع
                            name: `${product.name || "منتج"} - ${variant.label}`
                          })
                        }
                        className="bg-[#000080] text-white px-6 py-2 rounded hover:bg-blue-800 transition text-base font-semibold w-[180px] text-center shadow-md"
                      >
                        {variant.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* ✅ السعر العادي لباقي المنتجات */}
                  {product.id !== 17 && (
                    <p className="text-xl text-red-600 font-bold mb-2  text-center">
                      💰 السعر: {product.price} د.ل{" "}
                      {product.id === 4 && (
                        <span className="text-[#20438a]">(لكل عبوة)</span>
                      )}
                    </p>
                  )}

                  {/* ✅ زر عادي لإضافة للسلة */}
                  {product.id !== 17 && (
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => {
                          addToCart({ ...product, image: product.image! });
                          setAddedProductId(product.id);
                          setTimeout(() => setAddedProductId(null), 2000);
                        }}
                        className="bg-[#000080] text-white px-4 py-2 rounded hover:bg-blue-800 transition w-full"
                      >
                        أضف إلى السلة
                      </button>

                      {/* ✅ الرسالة تظهر فقط لهذا المنتج */}
                      {addedProductId === product.id && (
                        <div className="text-green-600 font-semibold mt-2">
                          ✅ 🛒تم إضافة المنتج إلى السلة
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
