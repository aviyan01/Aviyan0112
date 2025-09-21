import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-amber-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+98 912 495 0227</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>info@aviyan-saffron.com</span>
            </div>
          </div>
          <div>
            <span>صادرات زعفران خراسان به سراسر جهان</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="ml-4">
                <img 
                  src="https://images.unsplash.com/photo-1730983215028-b89dd4ff5ef7?w=400&h=300&fit=crop&crop=center" 
                  alt="لوگوی آویان" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">گروه آویان توسعه شرق</h1>
                <p className="text-sm text-gray-600">محصولات با کیفیت ممتاز</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#home" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">خانه</a>
              <a href="#about" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">درباره ما</a>
              <a href="#products" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">محصولات</a>
              <a href="#services" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">خدمات</a>
              <a href="#contact" className="text-gray-700 hover:text-saffron-600 font-medium transition-colors">تماس با ما</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-saffron-500 text-white px-6 py-2 rounded-lg hover:bg-saffron-600 transition-colors font-medium">
                درخواست قیمت
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="#home" className="text-gray-700 hover:text-saffron-600 font-medium">خانه</a>
                <a href="#about" className="text-gray-700 hover:text-saffron-600 font-medium">درباره ما</a>
                <a href="#products" className="text-gray-700 hover:text-saffron-600 font-medium">محصولات</a>
                <a href="#services" className="text-gray-700 hover:text-saffron-600 font-medium">خدمات</a>
                <a href="#contact" className="text-gray-700 hover:text-saffron-600 font-medium">تماس با ما</a>
                <button className="bg-saffron-500 text-white px-6 py-2 rounded-lg hover:bg-saffron-600 transition-colors font-medium w-fit">
                  درخواست قیمت
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
