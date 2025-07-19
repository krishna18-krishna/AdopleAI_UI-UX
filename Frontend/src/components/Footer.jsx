import React from 'react';
import { Bot, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Footer = () => {
  return (
    <>
      {/* Product Gallery Carousel */}
      <div
        className="mt-24"
        data-aos="zoom-in"
        data-aos-delay="800"
        data-aos-duration="800"
      >
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Product Gallery</h3>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          className="w-full"
        >
          {[...Array(14)].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={`/images/image/${i + 1}.avif`}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Adople</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered enterprise assistant that transforms how teams work, communicate, and solve problems.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">API</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Press</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@adople.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Adople. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
