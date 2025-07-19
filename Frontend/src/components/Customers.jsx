import React, { useState } from "react";
import {
  ArrowRight,
  Star,
  Building,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";
import Footer from "./Footer";

const Customers = () => {
  const [showAllCaseStudies, setShowAllCaseStudies] = useState(false);

  const industryLeaders = [
    {
      quote:
        "This solution has revolutionized our data management. We've seen a 30% increase in efficiency and much cleaner data insights. Highly recommended for any growing business.",
      author: "Mark Robinson",
      title: "VP of Operations",
      company: "DataFlow Inc",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      quote:
        "The support team is exceptional, always quick to respond and incredibly helpful. The product itself is robust and continuously evolving to meet our needs. Fantastic partnership!",
      author: "David Lee",
      title: "Chief Technology Officer",
      company: "InnovateTech",
      logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      quote:
        "Implementing this platform was seamless. The user interface is incredibly intuitive, leading to rapid adoption across our entire team. A truly empowering solution.",
      author: "David Kim",
      title: "Lead Data Scientist",
      company: "Analytics Pro",
      logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      quote:
        "Our investment in this product has paid dividends. The return on investment is clear, and it has become an indispensable part of our daily operations.",
      author: "Emily White",
      title: "Director of Finance",
      company: "FinanceFirst",
      logo: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
  ];

  const caseStudies = [
    {
      title: "Fragmented healthcare data delays critical insights.",
      description:
        "Built a QA chatbot that fetches info from PDFs, websites, and databases using chunking, embeddings, and Pinecone for fast retrieval, with generative AI for accurate, real-time answers.",
      image: "../../public/images/image/logo8.avif",
      category: "Healthcare, Government",
    },
    {
      title: "Evolving ESG rules challenge real-time portfolio decisions.",
      description:
        "Developed Element 6, a platform that uses deep learning to analyze news sentiment and topics, assigning environmental scores to help asset managers manage ESG risks and optimize portfolios.",
      image: "../../public/images/image/logo13.avif",
      category: "Finance, Environmental Risk Analytics",
    },
    {
      title:
        "Manual contract processes create inefficiencies and compliance risks.",
      description:
        "Developed a GPT-3.5-powered contract management system that automates extraction of key data, identifies risks, compares contracts, and generates structured outputs—reducing manual effort and enhancing compliance.",
      image: "../../public/images/image/logo2.avif",
      category: "Legal, Telecommunications",
    },
    {
      title:
        "Manual resume screening is slow, biased, and misses top talent matches.",
      description:
        "Built an AI-powered platform that automates resume and job description matching by extracting key features, using semantic similarity algorithms, and scoring fit. It generates detailed match reports and includes a feedback loop for continuous improvement.",
      image: "../../public/images/image/logo7.avif",
      category: "Human Resources, Recruitment",
    },
    {
      title: "Users need empathetic, data-backed mental health support.",
      description:
        "Developed a chat-based mental health assistant powered by GPT-3.5 and advanced NLU, integrated with healthcare databases for accurate, context-aware responses. Continuously improves through user feedback to enhance support quality and personalization.",
      image: "../../public/images/image/image.png",
      category: "Healthcare, Digital Mental Health",
    },
    {
      title: "Automated video creation for digital learning content.",
      description:
        "Developed a Text2Video system that transforms educational text into narrated, comic-style videos by integrating OpenAI Azure, DALL·E for image generation, Google gTTS for text-to-speech, and MoviePy for video assembly. Includes a user-friendly Gradio interface for seamless content creation.",
      image: "../../public/images/image/logo12.avif",
      category: "EdTech, Digital Publishing, Media",
    },
    {
      title: "AI tools for faster, smarter video production.",
      description:
        "Built an AI-powered video editor using Whisper and MoviePy with auto transcription, translation, silence removal, transcript-based editing, and content insights like sentiment and topics.",
      image: "../../public/images/image/image (1).png",
      category: "Media, Social Networking, Video Technology",
    },
    {
      title: "Telecoms use AI for smarter customer engagement",
      description:
        "Designed a scalable Dutch-language chatbot system using LSTM/GRU models and Word2Vec to automate intent detection and sentiment analysis. Integrated directly into CRM platforms to enhance response accuracy, speed up issue resolution, and improve overall customer experience.",
      image: "../../public/images/image/image (2).png",
      category: "Telecommunications, Customer Support",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading companies across industries are transforming
            their operations with Adople
          </p>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryLeaders.map((leader, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 italic mb-4">
                      "{leader.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {leader.author}
                        </p>
                        <p className="text-sm text-gray-600">{leader.title}</p>
                        <p className="text-sm text-blue-600 font-medium">
                          {leader.company}
                        </p>
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Explore How Teams Use Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {(showAllCaseStudies ? caseStudies : caseStudies.slice(0, 6)).map(
              (study, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="bg-white h-[100px] flex items-center justify-center rounded-xl">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
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
                  </div>
                </div>
              )
            )}
          </div>

          {/* Toggle button */}
          {caseStudies.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllCaseStudies(!showAllCaseStudies)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                {showAllCaseStudies ? "Show Less ↑" : "Explore more ↓"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Success Metrics
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-gray-600">Faster ticket resolution</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  70%
                </div>
                <div className="text-gray-600">Reduction in agent workload</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  40%
                </div>
                <div className="text-gray-600">
                  Improvement in search accuracy
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  3x
                </div>
                <div className="text-gray-600">
                  Boost in employee productivity
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Customers;
