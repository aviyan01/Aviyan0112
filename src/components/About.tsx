import React from 'react';
import { CheckCircle, Users, Truck, Shield, Quote, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "کیفیت تضمین شده",
      description: "تمامی محصولات ما با استانداردهای بین‌المللی ISO تولید می‌شوند"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "تیم متخصص",
      description: "تیمی از کارشناسان مجرب در تمامی مراحل تولید تا صادرات"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "حمل و نقل ایمن",
      description: "ارسال سریع و ایمن محصولات با بهترین شرکت‌های حمل و نقل"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "تضمین اصالت",
      description: "گواهی اصالت و کیفیت برای تمامی محصولات صادراتی"
    }
  ];

  const services = [
    {
      title: "مشاوره",
      description: "در کنار کشاورزان زحمتکش هستیم تا با دانش روز و احترام به سنت، بهترین محصول ممکن را پرورش دهند."
    },
    {
      title: "تولید", 
      description: "با نظارت دقیق و مستقیم، هر رشته زعفران را با وسواسی تحسین‌برانگیز، از گل جدا می‌کنیم."
    },
    {
      title: "بسته‌بندی",
      description: "هنر و اصالت ایرانی را در طراحی بسته‌بندی‌هایمان زنده می‌کنیم تا محصولی شایسته نام «ایران» را ارائه دهیم."
    },
    {
      title: "صادرات",
      description: "با افتخار، پرچم زعفران مرغوب ایرانی را در بیش از ۲۰ کشور جهان به اهتزاز درآورده‌ایم."
    },
    {
      title: "فروش",
      description: "امانت‌دارانی صادق برای مشتریان داخلی هستیم و کیفیت و رضایت شما، تنها معیار موفقیت ماست."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-saffron-600 font-medium mb-2">درباره شرکت ما</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            داستان
            <span className="text-saffron-600"> آویان</span>
          </h2>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Story Text */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-2xl p-8 border-r-4 border-saffron-500">
              <Quote className="w-8 h-8 text-saffron-600 mb-4" />
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  در دامنه کوه‌های آفتابگیر خراسان، روستایی کهن و آرام به نام «آویان» آرمیده است. جایی که بوی خاکش با عطر گل‌های زعفران آمیخته شده و هر وجب از آن، روایتگر رنج و عشق مردمانی است که با دستان پرزحمت خود، طلای سرخ را از دل زمین سخت بیرون می‌کشند.
                </p>
                <p>
                  پانزده سال پیش، «مهندس محمد شادمان»، که ریشه در همین خاک پربرکت داشت، با چشمانی پر از امید و قلبی مملو از عشق به زعفران ایرانی، پایه‌های آویان را بنا نهاد. او که از کودکی، صحنه رویش این گل بنفش جادویی و تبدیل آن به گران‌بهاترین ادویه جهان را به تماشا نشسته بود، رویایی بزرگ در سر می‌پروراند: اشتراک گذاری این گنجینه ملی با تمام دنیا، با حفظ اصالت، کیفیت و شرافتی که در هر مرحله از کشت تا برداشت، در آن نهفته است.
                </p>
                <p>
                  آویان تنها یک نام نیست؛ این نام، یک پیمان است. پیمانی با خاک، با کشاورز، و با مشتری. پیمانی که بر اساس آن، ما در آویان، خود را تنها یک تاجر نمی‌بینیم، بلکه حلقه اتصال مزرعه به سفره‌های جهانی هستیم.
                </p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="کشت زعفران در آویان" 
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1593165661394-030d74de8afd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="زعفران خشک آویان" 
                  className="w-full h-32 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1618477462146-eacdaef86a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="بسته‌بندی زعفران آویان" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border-r-4 border-saffron-500">
              <div className="text-2xl font-bold text-gray-800">۱۵</div>
              <div className="text-sm text-gray-600">سال تجربه</div>
            </div>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              <Heart className="w-6 h-6 text-saffron-600 inline-block mr-2" />
              سفر ما، سفر یک گل است
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 bg-saffron-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-bold text-gray-800">{service.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-saffron-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-saffron-500 to-amber-500 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg leading-relaxed">
              امروز، آویان به یاری خداوند و تلاش بی‌وقفت تیمش، به خانه‌ای امن برای زعفران اصیل خراسان تبدیل شده است. اما داستان ما به همینجا ختم نمی‌شود. این تنها آغاز راهی است که در آن، «کیفیت» شاه‌کلید تمام فرآیندهای ماست و «رضایت شما» اصلی‌ترین مقصدمان است.
            </p>
            <p className="text-xl font-bold">ما آویان هستیم؛ داستانمان را با زعفران می‌نویسیم</p>
            <div className="pt-4 border-t border-white/20">
              <p className="font-medium">مهندس محمد شادمان</p>
              <p className="text-saffron-100 text-sm">بنیانگذار و مدیر عامل برند آویان</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
