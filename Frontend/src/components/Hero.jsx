import React from "react";
import { ArrowRight, Play, Bot, Zap, Shield, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 pt-32"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Unlock Innovation with Multi-Agent
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Systems and Generative AI
            </span>
          </h1>

          {/* Animated description */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            From automating support tickets to simplifying knowledge discovery,
            Adople empowers your teams to get work done faster using natural
            language conversations.
          </p>
          <div className="text-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 font-semibold flex items-center justify-center gap-2 transition mx-auto"
              onClick={() => (window.location.href = "/pricing")}
            >
              Buy now
            </button>
          </div>
          {/* Animated feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 group"
              data-aos="fade-left"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-blue-600 group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                60% Faster
              </h3>
              <p className="text-gray-600">
                Ticket resolution with AI automation
              </p>
            </div>

            <div
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 group"
              data-aos="fade-up"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-green-600 group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enterprise Ready
              </h3>
              <p className="text-gray-600">
                Built for scalability and security
              </p>
            </div>

            <div
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-900 group"
              data-aos="fade-right"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-purple-600 group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Global Scale
              </h3>
              <p className="text-gray-600">
                Multi-language support for worldwide teams
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating background elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-10 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-80 left-20 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      ></div>
      <div
        className="absolute bottom-60 right-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
      ></div>
    </section>
  );
};

export default Hero;
