import React from 'react';
import { ArrowRight, Star, Building, Users, TrendingUp, Shield } from 'lucide-react';
import Footer from './Footer';

const Customers = () => {
  const testimonials = [
    {
      quote: "Our experience with this platform has been transformative. The intuitive design and robust features have significantly streamlined our workflows and boosted team productivity. It's truly a game-changer for our enterprise.",
      author: "Sarah Johnson",
      title: "Chief Technology Officer",
      company: "TechCorp Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face"
    }
  ];

  const industryLeaders = [
    {
      quote: "This solution has revolutionized our data management. We've seen a 30% increase in efficiency and much cleaner data insights. Highly recommended for any growing business.",
      author: "Mark Robinson",
      title: "VP of Operations",
      company: "DataFlow Inc",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      quote: "The support team is exceptional, always quick to respond and incredibly helpful. The product itself is robust and continuously evolving to meet our needs. Fantastic partnership!",
      author: "David Lee",
      title: "Chief Technology Officer",
      company: "InnovateTech",
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      quote: "Implementing this platform was seamless. The user interface is incredibly intuitive, leading to rapid adoption across our entire team. A truly empowering solution.",
      author: "David Kim",
      title: "Lead Data Scientist",
      company: "Analytics Pro",
      logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      quote: "Our investment in this product has paid dividends. The return on investment is clear, and it has become an indispensable part of our daily operations.",
      author: "Emily White",
      title: "Director of Finance",
      company: "FinanceFirst",
      logo: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  const caseStudies = [
    {
      title: "Streamlining Retail Operations at 'Urban Sprout'",
      description: "Learn how Urban Sprout, a fast-growing retail chain, leveraged our platform to optimize inventory management and streamline operations, leading to a 25% increase in efficiency.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      category: "Retail"
    },
    {
      title: "Accelerating Financial Growth for Apex Investments",
      description: "Discover how Apex Investments' journey to enhance their client portfolio management and automate compliance checks, resulting in improved efficiency gains.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      category: "Finance"
    },
    {
      title: "Digital Transformation in Healthcare at 'Vitality Clinics'",
      description: "Vitality Clinics shares their experience in digitizing patient records and scheduling, improving patient care coordination and reducing administrative overhead.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      category: "Healthcare"
    },
    {
      title: "Empowering Educators: 'Bright Minds Academy'",
      description: "Bright Minds Academy discusses how our e-learning tools fostered interactive learning environments and simplified curriculum delivery for thousands of students.",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      category: "Education"
    },
    {
      title: "Boosting Manufacturing Efficiency at 'Precision Works'",
      description: "Precision Works details their success in implementing our IoT solutions to monitor production lines, leading to predictive maintenance and reduced downtime.",
      image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      category: "Manufacturing"
    },
    {
      title: "Maximizing Impact for 'Hope for Tomorrow' Nonprofit",
      description: "See how Hope for Tomorrow optimized their donor management and volunteer coordination, expanding their reach and impact on critical social initiatives.",
      image: "https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      category: "Nonprofit"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            What Our Customers Say
          </h1>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
          >
            Discover how leading companies across industries are transforming their operations with Adople
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              data-aos-duration="800"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <blockquote className="text-xl lg:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.title}</p>
                <p className="text-blue-600 font-medium">{testimonial.company}</p>
              </div>
              <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-2 mx-auto">
                See Full Story
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryLeaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="700"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 italic mb-4">"{leader.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{leader.author}</p>
                        <p className="text-sm text-gray-600">{leader.title}</p>
                        <p className="text-sm text-blue-600 font-medium">{leader.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore How Teams Use Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-gray-900 text-center mb-4"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            Explore How Teams Use Us
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              Choose by Sector
            </button>
            <button
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              Filter by Team Function
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                data-aos="fade-up"
                data-aos-delay={index * 120}
                data-aos-duration="700"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
                    {study.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              data-aos="zoom-in"
              data-aos-delay="800"
              data-aos-duration="700"
            >
              Explore more →
            </button>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-white rounded-2xl p-8 shadow-lg"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Success Metrics</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-gray-600">Faster ticket resolution</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-4xl font-bold text-green-600 mb-2">70%</div>
                <div className="text-gray-600">Reduction in agent workload</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-gray-600">Improvement in search accuracy</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="text-4xl font-bold text-orange-600 mb-2">3x</div>
                <div className="text-gray-600">Boost in employee productivity</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Customers;