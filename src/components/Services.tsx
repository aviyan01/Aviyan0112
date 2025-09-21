import React from 'react';
import { Globe, Truck, Shield, Users, Clock, Award } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "صادرات بین‌المللی",
      description: "ارسال به تمامی کشورهای جهان با مجوزهای معتبر صادراتی",
      features: ["۳۵+ کشور مقصد", "مجوزهای کامل", "تضمین کیفیت"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "کنترل کیفیت",
      description: "آزمایش و کنترل کیفیت در تمامی مراحل تولید و بسته‌بندی",
      features: ["آزمایشگاه مجهز", "گواهی‌نامه‌های معتبر", "استاندارد ISO"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "حمل و نقل",
      description: "ارسال ایمن و سریع با بهترین شرکت‌های حمل و نقل بین‌المللی",
      features: ["بسته‌بندی ویژه", "ردیابی محموله", "تحویل به موقع"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "مشاوره تخصصی",
      description: "ارائه مشاوره رایگان در انتخاب محصول و نحوه خرید",
      features: ["کارشناسان مجرب", "مشاوره ۲۴/۷", "پشتیبانی فنی"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "سفارش‌گیری سریع",
      description: "پردازش سریع سفارشات و آماده‌سازی در کمترین زمان ممکن",
      features: ["پردازش فوری", "آماده‌سازی سریع", "اطلاع‌رسانی مداوم"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "ضمانت کیفیت",
      description: "تضمین کیفیت محصولات و امکان بازگشت در صورت عدم رضایت",
      features: ["ضمانت کامل", "بازگشت وجه", "رضایت ۱۰۰٪"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-saffron-600 font-medium mb-2">خدمات ما</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            خدمات
            <span className="text-saffron-600"> حرفه‌ای و جامع</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ما از مرحله کاشت تا تحویل نهایی محصول، خدمات کاملی به مشتریان ارائه می‌دهیم
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-saffron-200"
            >
              {/* Icon */}
              <div className="text-saffron-600 group-hover:scale-110 transition-transform duration-300 mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-saffron-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-saffron-600 font-medium hover:text-saffron-700 transition-colors">
                  اطلاعات بیشتر ←
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-saffron-500 to-amber-500 rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">۲۰+</div>
              <div className="text-saffron-100">سال تجربه</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">۳۵+</div>
              <div className="text-saffron-100">کشور مقصد</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">۱۰۰۰+</div>
              <div className="text-saffron-100">مشتری راضی</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">۲۴/۷</div>
              <div className="text-saffron-100">پشتیبانی</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
