import React from 'react';
import { Star, Package, Truck } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "زعفران نگین درجه یک",
      grade: "Grade A++",
      image: "https://images.unsplash.com/photo-1609501676725-7186f0a73f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["رنگ قرمز عمیق", "عطر قوی", "طعم ممتاز"],
      rating: 5
    },
    {
      id: 2,
      name: "زعفران پوشال مرغوب",
      grade: "Grade A+",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["کیفیت عالی", "قیمت مناسب", "حجم بالا"],
      rating: 5
    },
    {
      id: 3,
      name: "زعفران دسته‌ای",
      grade: "Grade A",
      image: "https://images.unsplash.com/photo-1593165661394-030d74de8afd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      features: ["تازه برداشت", "بسته‌بندی ویژه", "ارسال سریع"],
      rating: 4
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-saffron-600 font-medium mb-2">محصولات ما</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            انواع زعفران با
            <span className="text-saffron-600"> بالاترین کیفیت</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تمامی محصولات ما با دقت کامل انتخاب، فرآوری و بسته‌بندی شده‌اند تا بالاترین کیفیت را به دست شما برسانند.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-saffron-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.grade}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < product.rating ? 'text-saffron-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 mr-2">({product.rating}.0)</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-saffron-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 bg-saffron-500 text-white py-2 px-4 rounded-lg hover:bg-saffron-600 transition-colors font-medium flex items-center justify-center gap-2">
                    <Package className="w-4 h-4" />
                    سفارش
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    جزئیات
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Truck className="w-8 h-8 text-saffron-600" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">ارسال رایگان</h3>
                <p className="text-gray-600">برای سفارش‌های بالای ۱۰ کیلوگرم</p>
              </div>
            </div>
            <button className="bg-saffron-500 text-white px-8 py-3 rounded-lg hover:bg-saffron-600 transition-colors font-medium">
              مشاهده تمام محصولات
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
