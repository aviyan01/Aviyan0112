import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "خانه", href: "#home" },
    { name: "درباره ما", href: "#about" },
    { name: "محصولات", href: "#products" },
    { name: "خدمات", href: "#services" },
    { name: "تماس با ما", href: "#contact" }
  ];

  const products = [
    { name: "زعفران نگین", href: "#" },
    { name: "زعفران پوشال", href: "#" },
    { name: "زعفران دسته‌ای", href: "#" },
    { name: "زعفران سرگل", href: "#" }
  ];

  const services = [
    { name: "صادرات بین‌المللی", href: "#" },
    { name: "کنترل کیفیت", href: "#" },
    { name: "بسته‌بندی", href: "#" },
    { name: "مشاوره تخصصی", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="ml-4">
                <img 
                  src="https://images.unsplash.com/photo-1730983215028-b89dd4ff5ef7?w=300&h=200&fit=crop&crop=center" 
                  alt="لوگوی آویان" 
                  className="h-14 w-auto object-contain bg-white rounded-lg p-2"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">گروه آویان توسعه شرق</h3>
                <p className="text-gray-400 text-sm">محصولات با کیفیت ممتاز</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              گروه آویان توسعه شرق با بیش از ۱۵ سال تجربه در تولید و صادرات بهترین زعفران خراسان به سراسر جهان. 
              ما متعهد به ارائه بالاترین کیفیت و بهترین خدمات هستیم.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-saffron-500" />
                <span>+98 912 495 0227</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-saffron-500" />
                <span>info@aviyan-saffron.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-saffron-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div>ایران، خراسان رضوی، شهرستان باخرز</div>
                  <div className="text-sm">روستای نمونه کشاورزی آویان، گروه آویان توسعه شرق</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">دسترسی سریع</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-saffron-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">محصولات</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.href} 
                    className="text-gray-300 hover:text-saffron-400 transition-colors"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدمات</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-gray-300 hover:text-saffron-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} گروه آویان توسعه شرق. تمامی حقوق محفوظ است.
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm ml-4">ما را دنبال کنید:</span>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-saffron-500 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-saffron-500 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-saffron-500 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-saffron-500 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
