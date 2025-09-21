import React from 'react';
import { ArrowLeft, Star, Globe, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-saffron-50 to-amber-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-saffron-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-amber-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-saffron-200 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-saffron-600">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-medium">برترین کیفیت زعفران ایران</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                زعفران
                <span className="text-saffron-600"> ممتاز </span>
                برای جهان
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                ما بیش از ۲۰ سال در زمینه تولید، فرآوری و صادرات زعفران با بالاترین کیفیت فعالیت می‌کنیم. 
                محصولات ما با استانداردهای بین‌المللی تولید شده و به بیش از ۳۵ کشور جهان صادر می‌شود.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-saffron-500 text-white px-8 py-4 rounded-xl hover:bg-saffron-600 transition-all duration-300 font-medium flex items-center justify-center gap-2 group">
                مشاهده محصولات
                <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-saffron-500 text-saffron-600 px-8 py-4 rounded-xl hover:bg-saffron-500 hover:text-white transition-all duration-300 font-medium">
                درخواست مشاوره
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-6 h-6 text-saffron-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">۳۵+</div>
                <div className="text-sm text-gray-600">کشور مقصد</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-saffron-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">۲۰+</div>
                <div className="text-sm text-gray-600">سال تجربه</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-saffron-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">A++</div>
                <div className="text-sm text-gray-600">کیفیت محصول</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1609501676725-7186f0a73f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="زعفران ممتاز ایرانی" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Quality Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-800">کیفیت تائید شده</span>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border-t-4 border-saffron-500">
              <div className="text-sm text-gray-600">ارسال به</div>
              <div className="text-lg font-bold text-gray-800">سراسر جهان</div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-saffron-500 text-white rounded-xl p-4 shadow-xl">
              <div className="text-sm opacity-90">تضمین کیفیت</div>
              <div className="text-lg font-bold">۱۰۰٪</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
