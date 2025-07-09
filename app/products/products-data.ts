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
      image: "/images/montagat/flamingo_foam.jpg",
      description: "منظف فوم فعّال ومثالي للسيارات، القوارب، والمنازل. يعيد اللون والمظهر الطبيعي بفضل رغوته العميقة.",
      features: ["رج العلبة جيدًا قبل الاستخدام.", "رشّ الرغوة على السطح مباشرة.", "امسح بإسفنجة أو قطعة قماش نظيفة."]
    },
    {
      id: 2,
      name: "ملمع إطارات فائق اللمعان - Tire Shine",
      price: 25,
      quantity: 1,
      image: "/images/montagat/tire_shine.jpg",
      description: "احصل على إطارات لامعة بمظهر غني وأسود ساحر! يمنح الإطار مظهرًا نظيفًا واحترافيًا.",
      features: ["رج العبوة جيدًا قبل الاستخدام.", "رش من مسافة مناسبة على إطار نظيف.", "اتركه ليجف دون مسح."]
    },
    {
      id: 3,
      name: "منظف تكييف الهواء - Flamingo A/C Pro (500ml)",
      price: 25,
      quantity: 1,
      image: "/images/montagat/flamingo_ac.jpg",
      description: "منظف خاص بفتحات التكييف لإزالة الروائح والبكتيريا وتنقية الهواء الداخلي.",
      features: ["أطفئ السيارة وشغّل المروحة فقط.", "رش في فتحات التكييف واتركه ينتشر.", "تهوية السيارة لمدة 10 دقائق."]
    },
    {
      id: 4,
      name: "ملمّع الطبلون - Flamingo Dashboard Polish (450ml)",
      price: 20,
      quantity: 1,
      image: "/images/montagat/dashboard_polish.jpg",
      description: "ملمع للطبلون والأسطح البلاستيكية يحافظ على مظهرها ويمنحها لمسة لامعة ويحميها من التشقق.",
      features: ["رج العلبة جيدًا.", "رش على سطح نظيف.", "امسح باستخدام قطعة قماش ناعمة."]
    },
    {
      id: 5,
      name: "منظف حاقن الوقود - Flamingo Fuel Injector Cleaner (250ml)",
      price: 25,
      quantity: 1,
      image: "/images/montagat/fuel_injector_cleaner.jpg",
      description: "",
    },
    {
        id: 6,
        name: "",
        price: 130,
        quantity: 1,
        image: "/images/montagat/led_lens_5d.jpg",
        description: ""
   
    },
    {
      id: 7,
      name: "",
      price: 250,
      quantity: 1,
      image: "/images/montagat/seat_cover_beige_red.jpg",
      description: "",
     
    },
    {
      id: 8,
      name: "",
      price: 150,
      quantity: 1,
      image: "/images/montagat/seat_cover_fabric_beige.jpg",
      description: "",

    },
    {
      id: 9,
      name: "",
      price: 160,
      quantity: 1,
      image: "/images/montagat/seat_cover_black_green.jpg",
      description: ""
    },
    {
      id: 10,
      name: "",
      price: 350,
      quantity: 1,
      image: "/images/montagat/seat_cover_leather_brown_black.jpg",
      description: ""
      
    },
    {
      id: 11,
      name: "",
      price: 300,
      quantity: 1,
      image: "/images/montagat/copper-leather-seat-cover.jpg",
      description: "",

    },
    {
        id: 12,
        name: "",
        price: 70,
        quantity: 1,
        image: "/images/montagat/car-curtain.jpg",
        description: "",
      
    },
    { 
        id: 13,
        name: "",
        price: 60,
        quantity: 1,
        image: "/images/montagat/bmw-curtain.jpg",
        description: ""
    },
    {
        id: 14,
        name: "",
        price: 450,
        quantity: 1,
        image: "/images/montagat/pioneer-speakers.jpg",
        description: ""
          
    },
    {
        id: 15,
        name: "",
        price: 600,
        quantity: 1,
        image: "/images/montagat/pioneer-oval.jpg",
        description: ""
    },
    {
        id: 16,
        name: "",
        price: 180,
        quantity: 1,
        image: "/images/montagat/pioneer-speaker-round.jpg",
        description: ""
    },
    {
        id: 17,
        name: "",
        price: 120,
        quantity: 1,
        description: ""
    },
    {
      id: 18,
      name: "",
      price: 60,
      quantity: 1,
      image: "/images/montagat/bmw-floor-mat.jpg",
      description: "",
      
    },
    {
      id: 19,
      name: "",
      price: 55,
      quantity: 1,
      image: "/images/montagat/floor-mat-silver.jpg",
      description: ""
      
    },
    {
      id: 20,
      name: "",
      price: 65,
      quantity: 1,
      image: "/images/montagat/toyota-floor-mat.jpg",
      description: ""
    },
    {
      id: 21,
      name: "",
      price: 70,
      quantity: 1,
      image: "/images/montagat/mazda-floor-mat.jpg",
      description: ""
    },
    {
      id: 22,
      name: "",
      price: 70,
      quantity: 1,
      image: "/images/montagat/toyota-floor-mat1.jpg",
      description: ""
    },
    {
      id: 23,
      name: "",
      price: 120,
      quantity: 1,
      image: "/images/montagat/hyundai-floor-full.jpg",
      description: ""
    },
    {
      id: 24,
      name: "",
      price: 70,
      quantity: 1,
      image: "/images/montagat/beige-muchkey-5d.jpg",
      description: ""
    },
    {
        id: 25,
        name: "",
        price: 35,
        quantity: 1,
        image: "/images/montagat/holder-gt13.jpg",
        description: ""
       
    },
    {
      id: 26,
      name: "",
      price: 35,
      quantity: 1,
      image: "/images/montagat/wireless-holder-15w.jpg",
      description: ""
      
    },
    {
      id: 27,
      name: "",
      price: 35,
      quantity: 1,
      images: [
        "/images/montagat/wireless-holder-1.jpg",
        "/images/montagat/wireless-holder-2.jpg",
        "/images/montagat/wireless-holder-3.jpg",
        "/images/montagat/wireless-holder-4.jpg"
      ],
      description: ""
    },
    {
      id: 28,
      name: "",
      price: 35,
      quantity: 1,
      images: [
        "/images/montagat/handy-auto.jpg",
        "/images/montagat/handy-auto2.jpg"
      ],
      description: ""
    },
    {
      id: 29,
      name: "",
      price: 140,
      quantity: 1,
      images: [
        "/images/montagat/portable-fridge-open.jpg",
        "/images/montagat/portable-fridge-box.jpg",
         "/images/montagat/kühlschrank-1.png",
          "/images/montagat/kühlschrank-2.png"
      ],
      description: ""
    },
    {
      id: 30,
      name: "",
      price: 55, // السعر الأساسي، هنغيره حسب الاختيار داخل الزر
      quantity: 1,
      images: [
        "/images/montagat/fire-extinguisher-group.jpg",
        "/images/montagat/fire-extinguisher-sizes.jpg",
        "/images/montagat/fire-extinguisher1.jpg",
        "/images/montagat/fire-extinguisher2.jpg"


      ],
      description: "",
      variantButtons: [
        {
          label: "🔥 1 كيلو - 55 د.ل",
          image: "/images/montagat/fire-extinguisher-1kg.jpg",
          price: 55,
          variantKey: "1kg"
        },
        {
          label: "🔥 2 كيلو - 65 د.ل",
          image: "/images/montagat/fire-extinguisher-2kg.jpg",
          price: 65,
          variantKey: "2kg"
        },
        {
          label: "🔥 3 كيلو - 80 د.ل",
          image: "/images/montagat/fire-extinguisher-3kg.jpg",
          price: 80,
          variantKey: "3kg"
        }
      ]
    },
    {
      id: 31,
      name: "",
      price: 70,
      quantity: 1,
      images: [
        "/images/montagat/booster-cable-main.jpg",
        "/images/montagat/booster-cable-clamps.jpg",
        "/images/montagat/booster-cable-use1.jpg",
        "/images/montagat/booster-cable-use2.jpg"
      ],
      description: ""
    },
    {
      id: 32,
      name: "",
      price: 120,
      quantity: 1,
      images: [
        "/images/montagat/car-cover-features.jpg",
        "/images/montagat/car-cover-black.jpg",
        "/images/montagat/car-cover-white2.jpg",
        "/images/montagat/car-cover-diagram.jpg"
      ],
      description: "",
      variantButtons: [
        {
          label: "فضي (Silver)",
          image: "/images/montagat/car-cover-white1.jpg"
        },
        {
          label: "أسود (Black)",
          image: "/images/montagat/car-cover-black.jpg"
        }
      ]
    },{
      id: 33,
      name: "",
      price: 80, // السعر الابتدائي
      quantity: 1,
      images: [
        "/images/montagat/air-compressor-1piston.jpg",
        "/images/montagat/air-compressor-2piston.jpg"
      ],
      description: "",
      variantButtons: [
       
      ]
    },{
      id: 34,
      name: "",
      price: 45,
      quantity: 1,
      images: [
        
      ],
      description: ""
    }
    
    
    
    
    
    
  ];
  
