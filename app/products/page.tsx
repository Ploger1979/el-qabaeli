export default function ProductsPage() {
  return (
    <main
      dir="rtl"
      className="bg-white text-black font-cairo min-h-screen px-6 py-12"
    >
      {/* العنوان الرئيسي */}
      <section className="text-center mb-12">
        <h1 className="text-6xl font-bold text-[#20438a] mb-4">منتجاتنا</h1>
        <p className="text-3xl font-bold text-gray-700">
          اكتشف مجموعتنا المميزة من كماليات السيارات
        </p>
      </section>

      {/* شبكة المنتجات */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* منتج 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <img
            src="/images/motagat/flamingo_foam.jpg"
            alt="منظف فلامنغو"
            className="rounded mb-4"
          />

          <h2 className="text-2xl font-bold mb-2 text-pink-700">
            منظف رغوي متعدد الاستخدام
            <br />
            <span className="text-[#20438a]">Flamingo 650ML</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            منظف فوم فعّال ومثالي للسيارات، القوارب، والمنازل. ينظف الأسطح مثل
            المفروشات، الفينيل، الأرضيات، السجاد والجلد. يعيد اللون والمظهر
            الطبيعي بفضل رغوته العميقة.
          </p>

          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>طريقة الاستخدام:</strong>
            <br />
            1. رج العلبة جيدًا.
            <br />
            2. رش مباشرة على السطح.
            <br />
            3. انتظر 30–40 ثانية.
            <br />
            4. امسح بقطعة مبللة أو اسفنجة.
            <br />
            5. جفف السطح.
            <br />
            6. امسح الزائد من الزجاج أو الطلاء فورًا.
          </p>

          <p className="text-xl text-red-600 font-bold">السعر : 25 د.ل</p>
        </div>

        {/* منتج 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <img
            src="/images/motagat/tire_shine.jpg"
            alt="ملمع الإطارات"
            className="rounded mb-4"
          />

          <h2 className="text-2xl font-bold mb-2 text-pink-700">
            ملمع إطارات فائق اللمعان
            <br />
            <span className=" text-[#20438a]">Tire Shine</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            احصل على إطارات لامعة بمظهر غني وأسود ساحر! يحتوي المنتج على معززات
            لمعان قوية تمنح الإطار مظهراً نظيفاً واحترافياً دون جذب الأوساخ أو
            غبار الفرامل. التطبيق الدقيق يضمن توزيعاً متساوياً بدون فوضى أو رش
            زائد.
          </p>

          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>المميزات:</strong>
            <br />
            1. لمعان ناعم ومتساوٍ بفضل معززات اللمعان الخاصة.
            <br />
            2. يغذي الإطار ويحافظ على مظهره الأسود الطبيعي.
            <br />
            3. فوهة دقيقة لتقليل الرش الزائد وتحقيق توزيع متوازن.
          </p>

          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>طريقة الاستخدام:</strong>
            <br />
            1. رج العبوة جيدًا قبل الاستخدام.
            <br />
            2. رش من مسافة 8 إلى 12 بوصة على إطار نظيف وجاف.
            <br />
            3. اتركه يجف لمدة 5 دقائق على الأقل – لا تمسح.
            <br />
            4. أي خطوط أو قطرات ستختفي تلقائيًا، وتترك لمعانًا رائعًا.
          </p>

          <p className="text-xl text-red-600 font-bold">السعر: 25 د.ل</p>
        </div>

        {/* منتج 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <img
            src="/images/motagat/flamingo_ac.jpg"
            alt="منظف تكييف الهواء"
            className="rounded mb-4"
          />

          <h2 className="text-2xl font-bold mb-2 text-pink-700">
            منظف تكييف الهواء <br />
            <span className=" text-[#20438a]">Flamingo A/C Pro (500ml)</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <span className="text-2xl font-bold blink-gold">
              استرجع انتعاش التكييف في دقائق <br />
              <span className="flex items-center gap-2 text-2xl font-bold blink-gold">
                بلمسة واحدة!
                <img
                  src="/images/motagat/pinklike_116094.ico" // ← تأكد إن الأيقونة في مجلد public/images
                  alt="Thumb icon"
                  className="w-6 h-6"
                />
              </span>
            </span>
            <br />
            منتج متخصص لتنظيف مكيف الهواء وإعادة كفاءة التبريد بسرعة وفعالية.
            مناسب للسيارات والمنازل، حيث يزيل الروائح الكريهة والبكتيريا من
            فتحات التهوية ويمنحك هواءً نقيًا ومنعشًا. عبوة عملية بحجم 500 مل –
            مستورد بجودة عالية.
          </p>

          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>طريقة الاستخدام:</strong>
            <br />
            1. رج العلبة جيدًا قبل الاستخدام.
            <br />
            2. رش مباشرة داخل فتحات التكييف أثناء تشغيل المروحة فقط.
            <br />
            3. اترك المكيف يعمل لمدة 5–10 دقائق بدون ركاب أو تواجد داخل السيارة.
            <br />
            4. استمتع بأداء تبريد أقوى وهواء أنقى.
          </p>

          <p className="text-xl text-red-600 font-bold">السعر: 25 د.ل</p>
        </div>

        {/* منتج 4 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <img
              src="/images/motagat/dashboard_polish.jpg"
              alt="Flamingo Polish جميع الروائح"
              className="rounded shadow"
            />
            <img
              src="/images/motagat/dashboard_polish_car.jpg"
              alt="Flamingo Polish داخل السيارة"
              className="rounded shadow"
            />
          </div>

          <h2 className="text-2xl font-bold mb-2 text-pink-700">
            ملمّع الطبلون <br />
            <span className=" text-[#20438a]">
              Flamingo Dashboard Polish (450ml)
            </span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            احصل على طبلون لامع بمظهر أنيق مع ملمّع Flamingo المصمم لحماية
            وتنظيف أسطح السيارة الداخلية. مناسب للطبلون، البلاستيك، الجلد،
            المطاط، والڤينيل – ويمنح مظهراً "رطباً" يدوم طويلاً.
            <br />
            متوفر بـ <strong>6 روائح رائعة:</strong>
            <br />
            <span className="block mt-2 space-y-1 text-lg">
              <span className="text-pink-600">🍓 فراولة</span> <br />
              <span className="text-yellow-500">🍋 ليمون</span> <br />
              <span className="text-purple-600">🌸 ياسمين</span> <br />
              <span className="text-orange-500">🍑 خوخ</span> <br />
              <span className="text-gray-700">🪵 عود</span> <br />
              <span className="text-blue-700">🧊 بلاك آيس</span>
            </span>
          </p>

          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>المميزات:</strong>
            <br />
            • تنظيف ولمعان يدومان لفترة طويلة.
            <br />
            • حماية ضد الغبار والجفاف.
            <br />
            • اختيار الرائحة حسب الذوق الشخصي.
            <br />• عبوة 450ml سهلة الاستخدام.
          </p>

          <p className="text-xl text-red-600 font-bold">
            السعر: 20 د.ل ( <span className=" text-[#20438a]">لكل عبوة </span>)
          </p>
        </div>

        {/* منتج 5 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <img
            src="/images/motagat/fuel_injector_cleaner.jpg"
            alt="منظف حاقن الوقود فلامنغو"
            className="rounded mb-4"
          />

          <h2 className="text-2xl font-bold mb-2 text-pink-700">
            منظف حاقن الوقود <br />
            <span className=" text-[#20438a]">
              Flamingo Fuel Injector Cleaner (250ml)
            </span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            منظف حاقن الوقود من Flamingo هو الحل الأمثل لتحسين كفاءة المحرك
            وتقليل استهلاك الوقود. تركيبته المتقدمة تعمل على إزالة الرواسب ومنع
            التآكل وتقليل الاحتكاك، مما يطيل عمر الحاقن ويحسّن أداء السيارة بشكل
            ملحوظ.
          </p>

          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>المميزات:</strong>
            <br />
            • يحسّن تسارع واستجابة المحرك
            <br />
            • يقلل استهلاك الوقود ويوفر المال
            <br />
            • يقلل الانبعاثات ويحافظ على البيئة
            <br />
            • يمنع التآكل ويطيل عمر نظام الحقن الداخلي
            <br />• سهل الاستخدام – عبوة واحدة تكفي لخزان وقود كامل.
          </p>

          <p className="text-xl text-red-600 font-bold">السعر: 25 د.ل</p>
        </div>

        {/* منتج 6 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <img
            src="/images/motagat/led_lens_5d.jpg"
            alt="عدسة أمامية LED عالية الأداء"
            className="rounded mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-pink-700">
            منظومة عدسة أمامية <br />
            <span className=" text-[#20438a]">5D LED – 2×60W</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            منظومة عدسة LED 5D عالية الكفاءة، تمنحك إضاءة مركزة وقوية بنسبة سطوع
            تصل إلى 300% مقارنةً بالمصابيح التقليدية. مثالية لتحسين الرؤية
            الليلية، مع تصميم متين ومروحة تبريد فعالة لضمان ثبات الإضاءة وحماية
            ضد السخونة.
          </p>

          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>المواصفات التقنية:</strong>
            <br />
            • القوة: 2×60 واط <br />
            • شدة الإضاءة: 12000 لومن
            <br />
            • الجهد الكهربائي: 12V – 24V
            <br />
            • ألوان متوفرة: أصفر، أبيض، أزرق
            <br />• نظام تبريد مدمج + مقاوم للماء والغبار.
          </p>

          <p className="text-xl text-red-600 font-bold">السعر: 130 د.ل</p>
        </div>

        {/* منتج 7 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <img
            src="/images/motagat/seat_cover_beige_red.jpg"
            alt="غطاء كراسي بيج × أحمر"
            className="rounded mb-4"
          />

          <h2 className="text-2xl font-bold mb-2 text-pink-700">
            غطاء كراسي جلد فاخر <br />{" "}
            <span className=" text-[#20438a]">Beige & Red</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            غطاء كراسي بتصميم أنيق ومتين يضيف لمسة فاخرة لداخل سيارتك. مصنوع من
            جلد صناعي عالي الجودة مقاوم للماء، الغبار والخدوش. يتميز ببطانة
            مريحة وتفصيل دقيق يناسب معظم أنواع السيارات.
          </p>

          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>المميزات:</strong>
            <br />
            • تصميم مميز بلون بيج × أحمر يعطي لمسة رياضية وفخمة
            <br />
            • حماية كاملة للمقاعد من التلف والبقع
            <br />
            • خامات ناعمة ومريحة للجلوس في الرحلات الطويلة
            <br />
            • سهل التركيب والفك، بدون أدوات
            <br />• يناسب معظم السيارات السيدان والدفع الرباعي.
          </p>

          <p className="text-xl text-red-600 font-bold">السعر: 250 د.ل</p>
        </div>

        {/* منتج 8 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <img
            src="/images/motagat/seat_cover_fabric_beige.jpg"
            alt="طقم كراسي قماش بيج"
            className="rounded mb-4"
          />

          <h2 className="text-2xl font-bold mb-2 text-pink-700">
            طقم كراسي قماش فاخر <br />
            <span className=" text-[#20438a]">Dark Beige</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            غطِّي مقاعد سيارتك بطقم فاخر من القماش الناعم والمبطن، يمنحك راحة
            فريدة ولمسة أنيقة داخل المقصورة. يوفر الحماية من البقع والغبار
            والتآكل، مع تصميم كلاسيكي بلون بيج يناسب أغلب السيارات العائلية
            والفخمة.
          </p>

          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>المميزات:</strong>
            <br />
            • قماش ناعم عالي الجودة ومقاوم للتآكل
            <br />
            • تصميم مبطن مريح للرحلات الطويلة
            <br />
            • حماية كاملة للمقاعد من الاتساخ والخدوش
            <br />
            • سهل الفك والتركيب – بدون أدوات
            <br />• يشمل: غطاء للمقاعد الأمامية والخلفية + مخدات دعم.
          </p>

          <p className="text-xl text-red-600 font-bold">السعر: 150 د.ل</p>
        </div>

        {/* منتج 9 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <img
            src="/images/motagat/seat_cover_black_green.jpg"
            alt="غطاء كراسي أسود × أخضر"
            className="rounded mb-4"
          />

          <h2 className="text-2xl font-bold mb-2 text-pink-700">
            غطاء كراسي قماش رياضي <br />
            <span className=" text-[#20438a]">Black & Green</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            غطاء عصري بتصميم رياضي فاخر يمنح سيارتك مظهرًا جريئًا وأنيقًا في نفس
            الوقت. مصنوع من خامات قماش متينة، ومبطن بطبقات إسفنجية لراحة الجلوس
            وحماية كاملة للمقاعد من التآكل والخدوش.
          </p>

          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>المميزات:</strong>
            <br />
            • خامة قماشية عالية الجودة مع لمسة جلدية <br />
            • تصميم رياضي بلون أخضر مميز يناسب الذوق العصري
            <br />
            • تغطية شاملة للمقاعد الأمامية والخلفية + مساند الرأس
            <br />
            • سهل التنظيف والتركيب بدون أدوات
            <br />• مناسب للسيارات السيدان والدفع الرباعي.
          </p>

          <p className="text-xl text-red-600 font-bold">السعر: 160 د.ل</p>
        </div>

        {/* منتج 10 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <img
            src="/images/motagat/seat_cover_leather_brown_black.jpg"
            alt="غطاء كراسي جلد فاخر بني وأسود"
            className="rounded mb-4"
          />

          <h2 className="text-2xl font-bold mb-2 text-pink-700">
            غطاء كراسي جلد فاخر
            <br />
            <span className=" text-[#20438a]"> Brown & Black</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            طقم مقاعد جلد فاخر بتصميم احترافي يغطي الكراسي الأمامية والخلفية
            بالكامل. يمنح السيارة مظهراً فخماً ويحافظ على الكراسي الأصلية من
            التآكل والاتساخ. مصنوع من خامات جلد صناعي متينة، ومبطّن بطبقة مريحة
            للجلوس.
          </p>

          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>المميزات:</strong>
            <br />
            • خامة جلد مقاومة للماء والبقع والخدوش
            <br />
            • تصميم أنيق بخياطة مضلعة يمنح مظهر احترافي
            <br />
            • تركيب سهل بدون أدوات – مع تغطية كاملة
            <br />
            • يناسب معظم أنواع السيارات السيدان والـ SUV
            <br />• يوفر الراحة التامة أثناء القيادة الطويلة.
          </p>

          <p className="text-xl text-red-600 font-bold">السعر: 350 د.ل</p>
        </div>

        {/* منتج 11 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <img
            src="/images/motagat/copper-leather-seat-cover.jpg" // ← اسم الصورة احفظها عندك كده
            alt="غطاء كراسي جلد - Copper × Black"
            className="w-full h-auto rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-pink-700 leading-snug">
            غطاء كراسي جلد فاخر
            <br />
            <span className=" text-[#20438a]">Copper & Black</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            غطاء الكراسي الجلدي بلون <strong> نحاسي × أسود </strong> مصمم ليمنح
            سيارتك لمسة من الفخامة والأناقة مع حماية فائقة للمقاعد.
          </p>
          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>المميزات:</strong>
            <br />
            • تصميم أنيق بخطوط ماسية تضيف لمسة فاخرة
            <br />
            • خامات جلد صناعي عالية الجودة مقاومة للتآكل والبقع
            <br />
            • حماية شاملة للمقاعد من الخدوش والانسكابات
            <br />
            • سهولة في التركيب والفك – مناسب لمعظم أنواع السيارات
            <br />• دعم لراحة الظهر والرقبة مع وسائد مدمجة مريحة
          </p>
          <p className="text-xl text-red-600 font-bold">
            السعر: 300 دينار ليبي
          </p>
        </div>

        {/* منتج 12 */}
        <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300 border-1 border-transparent hover:border-[#000080]">
          <img
            src="/images/motagat/holder-gt13.jpg"
            alt="حامل نقال GERLAX GT-13"
            className="w-full h-auto rounded-md mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-pink-700 leading-snug">
            حامل نقال أصلي
            <br />
            <span className="text-[#20438a]">GERLAX GT-13</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            حامل الهاتف المتحرك الأصلي من GERLAX موديل <strong>GT-13</strong>{" "}
            يأتي بتصميم أنيق عملي، قابل للطي ومناسب لجميع الهواتف الذكية.
          </p>
          <p className="text-md text-gray-600 mb-4 leading-relaxed">
            <strong>المميزات:</strong>
            <br />
            • دوران 360 درجة لزاوية مشاهدة مثالية
            <br />
            • سطح كاربون فايبر أنيق ضد الانزلاق
            <br />
            • قاعدة ثابتة ومفصل قوي لتثبيت الهاتف
            <br />• تصميم مدمج – مثالي للمكتب أو السيارة أو المنزل
          </p>
          <p className="text-xl text-red-600 font-bold">السعر: 35 دينار ليبي</p>
        </div>
      </section>
    </main>
  );
}
