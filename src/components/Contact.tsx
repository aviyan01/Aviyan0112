import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "تلفن تماس",
      info: "+98 912 495 0227",
      subInfo: "۰۹۱۲ ۴۹۵ ۰۲۲۷"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "ایمیل",
      info: "info@aviyan-saffron.com",
      subInfo: "sales@aviyan-saffron.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "آدرس",
      info: "خراسان رضوی، شهرستان باخرز",
      subInfo: "روستای نمونه کشاورزی آویان، گروه آویان توسعه شرق"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "ساعات کاری",
      info: "شنبه تا پنج‌شنبه",
      subInfo: "۸:۰۰ تا ۱۷:۰۰"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-saffron-600 font-medium mb-2">تماس با ما</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            آماده
            <span className="text-saffron-600"> همکاری </span>
            با شما هستیم
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            برای دریافت مشاوره رایگان، استعلام قیمت یا هرگونه سوال، با ما در تماس باشید
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">فرم تماس</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800 mb-2">پیام شما ارسال شد!</h4>
                <p className="text-gray-600">ما در اسرع وقت با شما تماس خواهیم گرفت.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      شماره تماس *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors"
                      placeholder="۰۹۱۲ ۴۹۵ ۰۲۲۷"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ایمیل *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نام شرکت
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors"
                      placeholder="نام شرکت (اختیاری)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    پیام شما *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors resize-none"
                    placeholder="پیام خود را بنویسید..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-saffron-500 text-white py-3 px-6 rounded-lg hover:bg-saffron-600 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  ارسال پیام
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">اطلاعات تماس</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-saffron-600 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.info}</p>
                      {item.subInfo && (
                        <p className="text-gray-500 text-sm">{item.subInfo}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">موقعیت مکانی</h3>
              <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-lg h-64 flex items-center justify-center border-2 border-saffron-200">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-3 text-saffron-600" />
                  <p className="font-semibold text-lg mb-2">گروه آویان توسعه شرق</p>
                  <p className="text-sm">خراسان رضوی، شهرستان باخرز</p>
                  <p className="text-sm">روستای نمونه کشاورزی آویان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
