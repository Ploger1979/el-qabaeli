export type ProductType = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image?: string;
    images?: string[];
    variantButtons?: {
      label: string;
      image: string;
      price?: number;
      variantKey?: string;
    }[];
    description?: string;
    features?: string[];
  };
  
  export const products: ProductType[] = [
    {
      id: 1,
      name: "منظف رغوي متعدد الاستخدام  Flamingo 650ML",
      price: 25,
      quantity: 1,
      image: "/images/montagat/WebP/flamingo_foam.webp",
      description:
        "منظف فوم فعّال ومثالي للسيارات، القوارب، والمنازل. يعيد اللون والمظهر الطبيعي بفضل رغوته العميقة.",
      features: [
        "رج العلبة جيدًا قبل الاستخدام.",
        "رشّ الرغوة على السطح مباشرة.",
        "امسح بإسفنجة أو قطعة قماش نظيفة.",
      ],
    },
    {
      id: 2,
      name: "ملمع إطارات فائق اللمعان - Tire Shine",
      price: 25,
      quantity: 1,
      image: "/images/montagat/WebP/tire_shine.webp",
      description:
        "احصل على إطارات لامعة بمظهر غني وأسود ساحر! يمنح الإطار مظهرًا نظيفًا واحترافيًا.",
      features: [
        "رج العبوة جيدًا قبل الاستخدام.",
        "رش من مسافة مناسبة على إطار نظيف.",
        "اتركه ليجف دون مسح.",
      ],
    },
    {
      id: 3,
      name: "منظف تكييف الهواء - Flamingo A/C Pro (500ml)",
      price: 25,
      quantity: 1,
      image: "/images/montagat/WebP/flamingo_ac.webp",
      description:
        "منظف خاص بفتحات التكييف لإزالة الروائح والبكتيريا وتنقية الهواء الداخلي.",
      features: [
        "أطفئ السيارة وشغّل المروحة فقط.",
        "رش في فتحات التكييف واتركه ينتشر.",
        "تهوية السيارة لمدة 10 دقائق.",
      ],
    },
    {
      id: 4,
      name: "ملمّع الطبلون - Flamingo Dashboard Polish (450ml)",
      price: 20,
      quantity: 1,
      image: "/images/montagat/WebP/dashboard_polish.webp",
      description:
        "ملمع للطبلون والأسطح البلاستيكية يحافظ على مظهرها ويمنحها لمسة لامعة ويحميها من التشقق.",
      features: [
        "رج العلبة جيدًا.",
        "رش على سطح نظيف.",
        "امسح باستخدام قطعة قماش ناعمة.",
      ],
    },
    {
      id: 5,
      name: "منظف حاقن الوقود - Flamingo Fuel Injector Cleaner (250ml)",
      price: 25,
      quantity: 1,
      image: "/images/montagat/WebP/fuel_injector_cleaner.webp",
      description: "",
    },
    {
      id: 6,
      name: "",
      price: 130,
      quantity: 1,
      image: "/images/montagat/WebP/led_lens_5d.webp",
      description: "",
    },
    {
      id: 7,
      name: "",
      price: 250,
      quantity: 1,
      image: "/images/montagat/WebP/seat_cover_beige_red.webp",
      description: "",
    },
    {
      id: 8,
      name: "",
      price: 150,
      quantity: 1,
      image: "/images/montagat/WebP/seat_cover_fabric_beige.webp",
      description: "",
    },
    {
      id: 9,
      name: "",
      price: 160,
      quantity: 1,
      image: "/images/montagat/WebP/seat_cover_black_green.webp",
      description: "",
    },
    {
      id: 10,
      name: "",
      price: 350,
      quantity: 1,
      image: "/images/montagat/WebP/seat_cover_leather_brown_black.webp",
      description: "",
    },
    {
      id: 11,
      name: "",
      price: 300,
      quantity: 1,
      image: "/images/montagat/WebP/copper-leather-seat-cover.webp",
      description: "",
    },
    {
      id: 12,
      name: "",
      price: 70,
      quantity: 1,
      image: "/images/montagat/WebP/car-curtain.webp",
      description: "",
    },
    {
      id: 13,
      name: "",
      price: 60,
      quantity: 1,
      image: "/images/montagat/WebP/bmw-curtain.webp",
      description: "",
    },
    {
      id: 14,
      name: "",
      price: 450,
      quantity: 1,
      image: "/images/montagat/WebP/pioneer-speakers.webp",
      description: "",
    },
    {
      id: 15,
      name: "",
      price: 600,
      quantity: 1,
      image: "/images/montagat/WebP/pioneer-oval.webp",
      description: "",
    },
    {
      id: 16,
      name: "",
      price: 180,
      quantity: 1,
      image: "/images/montagat/WebP/pioneer-speaker-round.webp",
      description: "",
    },
    {
      id: 17,
      name: "",
      price: 120,
      quantity: 1,
      description: "",
    },
    {
      id: 18,
      name: "",
      price: 60,
      quantity: 1,
      image: "/images/montagat/WebP/bmw-floor-mat.webp",
      description: "",
    },
    {
      id: 19,
      name: "",
      price: 55,
      quantity: 1,
      image: "/images/montagat/WebP/floor-mat-silver.webp",
      description: "",
    },
    {
      id: 20,
      name: "",
      price: 65,
      quantity: 1,
      image: "/images/montagat/WebP/toyota-floor-mat.webp",
      description: "",
    },
    {
      id: 21,
      name: "",
      price: 70,
      quantity: 1,
      image: "/images/montagat/WebP/mazda-floor-mat.webp",
      description: "",
    },
    {
      id: 22,
      name: "",
      price: 70,
      quantity: 1,
      image: "/images/montagat/WebP/toyota-floor-mat1.webp",
      description: "",
    },
    {
      id: 23,
      name: "",
      price: 120,
      quantity: 1,
      image: "/images/montagat/WebP/hyundai-floor-full.webp",
      description: "",
    },
    {
      id: 24,
      name: "",
      price: 70,
      quantity: 1,
      image: "/images/montagat/WebP/beige-muchkey-5d.webp",
      description: "",
    },
    {
      id: 25,
      name: "",
      price: 35,
      quantity: 1,
      image: "/images/montagat/WebP/holder-gt13.webp",
      description: "",
    },
    {
      id: 26,
      name: "",
      price: 35,
      quantity: 1,
      image: "/images/montagat/WebP/wireless-holder-15w.webp",
      description: "",
    },
    {
      id: 27,
      name: "",
      price: 35,
      quantity: 1,
      images: [
        "/images/montagat/WebP/wireless-holder-1.webp",
        "/images/montagat/WebP/wireless-holder-2.webp",
        "/images/montagat/WebP/wireless-holder-3.webp",
        "/images/montagat/WebP/wireless-holder-4.webp",
      ],
      description: "",
    },
    {
      id: 28,
      name: "",
      price: 35,
      quantity: 1,
      images: [
        "/images/montagat/WebP/handy-auto.webp",
        "/images/montagat/WebP/handy-auto2.webp",
      ],
      description: "",
    },
    {
      id: 29,
      name: "",
      price: 140,
      quantity: 1,
      images: [
        "/images/montagat/WebP/portable-fridge-open.webp",
        "/images/montagat/WebP/portable-fridge-box.webp",
        "/images/montagat/WebP/kühlschrank-1.webp",
        "/images/montagat/WebP/kühlschrank-2.webp",
      ],
      description: "",
    },
    {
      id: 30,
      name: "",
      price: 55, // السعر الأساسي، هنغيره حسب الاختيار داخل الزر
      quantity: 1,
      images: [
        "/images/montagat/WebP/fire-extinguisher-group.webp",
        "/images/montagat/WebP/fire-extinguisher-sizes.webp",
        "/images/montagat/WebP/fire-extinguisher1.webp",
        "/images/montagat/WebP/fire-extinguisher2.webp",
      ],
      description: "",
      variantButtons: [
        {
          label: "🔥 1 كيلو - 55 د.ل",
          image: "/images/montagat/WebP/fire-extinguisher-1kg.webp",
          price: 55,
          variantKey: "1kg",
        },
        {
          label: "🔥 2 كيلو - 65 د.ل",
          image: "/images/montagat/WebP/fire-extinguisher-2kg.webp",
          price: 65,
          variantKey: "2kg",
        },
        {
          label: "🔥 3 كيلو - 80 د.ل",
          image: "/images/montagat/WebP/fire-extinguisher-3kg.webp",
          price: 80,
          variantKey: "3kg",
        },
      ],
    },
    {
      id: 31,
      name: "",
      price: 70,
      quantity: 1,
      images: [
        "/images/montagat/WebP/booster-cable-main.webp",
        "/images/montagat/WebP/booster-cable-clamps.webp",
        "/images/montagat/WebP/booster-cable-use1.webp",
        "/images/montagat/WebP/booster-cable-use2.webp",
      ],
      description: "",
    },
    {
      id: 32,
      name: "",
      price: 120,
      quantity: 1,
      images: [
        "/images/montagat/WebP/car-cover-features.webp",
        "/images/montagat/WebP/car-cover-black.webp",
        "/images/montagat/WebP/car-cover-white2.webp",
        "/images/montagat/WebP/car-cover-diagram.webp",
      ],
      description: "",
      variantButtons: [
        {
          label: "فضي (Silver)",
          image: "/images/montagat/WebP/car-cover-white1.webp",
        },
        {
          label: "أسود (Black)",
          image: "/images/montagat/WebP/car-cover-black.webp",
        },
      ],
    },
    {
      id: 33,
      name: "",
      price: 80, 
      quantity: 1,
      images: [
        "/images/montagat/WebP/air-compressor-1piston.webp",
        "/images/montagat/WebP/air-compressor-2piston.webp",
      ],
      description: "",
      variantButtons: [],
    },
    {
      id: 34,
      name: "",
      price: 45,
      quantity: 1,
      images: [],
      description: "",
    },
  ];
  
