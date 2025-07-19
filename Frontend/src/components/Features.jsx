import React from 'react';
import {
  MessageCircle, Search, Users, Bot,
  Shield, Globe, BarChart3, Settings
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Conversational AI Interface',
      description: 'Interact with enterprise systems using natural language. No complex commands or training required.',
      color: 'blue'
    },
    {
      icon: Search,
      title: 'Unified Knowledge Access',
      description: 'Instantly search across documents, tickets, SOPs, and databases from a single interface.',
      color: 'green'
    },
    {
      icon: Bot,
      title: 'Auto Ticket Resolution',
      description: 'Reduce response time with autonomous support that resolves common issues automatically.',
      color: 'purple'
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Serve global teams with seamless multilingual AI that understands context in any language.',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enterprise-grade encryption and access controls keep your data safe and compliant.',
      color: 'red'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track performance, identify trends, and optimize workflows with detailed analytics.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            Everything You Need for
            <span className="block text-blue-600" data-aos="fade-right" data-aos-delay="200">Enterprise AI</span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="700"
          >
            Powerful features that integrate seamlessly with your existing tools and workflows
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-200 hover:bg-white border border-transparent hover:border-gray-200"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="700"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${getColorClasses(feature.color)}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
