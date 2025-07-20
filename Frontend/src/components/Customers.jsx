import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Star,
  Building,
  Users,
  TrendingUp,
  Shield,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Footer from "./Footer";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.6,
    },
  },
};

const Customers = () => {
  const [showAllCaseStudies, setShowAllCaseStudies] = useState(false);
  const [expandedCards, setExpandedCards] = useState(new Set());

  const toggleCardExpansion = (index) => {
    const newExpandedCards = new Set(expandedCards);
    if (newExpandedCards.has(index)) {
      newExpandedCards.delete(index);
    } else {
      newExpandedCards.add(index);
    }
    setExpandedCards(newExpandedCards);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

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
      image:
        "https://ik.imagekit.io/wildxv7xr/logo8.avif?updatedAt=1752927923262",
      category: "Healthcare, Government",
    },
    {
      title: "Evolving ESG rules challenge real-time portfolio decisions.",
      description:
        "Developed Element 6, a platform that uses deep learning to analyze news sentiment and topics, assigning environmental scores to help asset managers manage ESG risks and optimize portfolios.",
      image:
        "https://ik.imagekit.io/wildxv7xr/logo13.avif?updatedAt=1752927924240",
      category: "Finance, Environmental Risk Analytics",
    },
    {
      title:
        "Manual contract processes create inefficiencies and compliance risks.",
      description:
        "Developed a GPT-3.5-powered contract management system that automates extraction of key data, identifies risks, compares contracts, and generates structured outputs—reducing manual effort and enhancing compliance.",
      image:
        "https://ik.imagekit.io/wildxv7xr/logo2.avif?updatedAt=1752927920104",
      category: "Legal, Telecommunications",
    },
    {
      title:
        "Manual resume screening is slow, biased, and misses top talent matches.",
      description:
        "Built an AI-powered platform that automates resume and job description matching by extracting key features, using semantic similarity algorithms, and scoring fit. It generates detailed match reports and includes a feedback loop for continuous improvement.",
      image:
        "https://ik.imagekit.io/wildxv7xr/logo7.avif?updatedAt=1752927920081",
      category: "Human Resources, Recruitment",
    },
    {
      title: "Users need empathetic, data-backed mental health support.",
      description:
        "Developed a chat-based mental health assistant powered by GPT-3.5 and advanced NLU, integrated with healthcare databases for accurate, context-aware responses. Continuously improves through user feedback to enhance support quality and personalization.",
      image:
        "https://ik.imagekit.io/wildxv7xr/image.png?updatedAt=1752927919500",
      category: "Healthcare, Digital Mental Health",
    },
    {
      title: "Automated video creation for digital learning content.",
      description:
        "Developed a Text2Video system that transforms educational text into narrated, comic-style videos by integrating OpenAI Azure, DALL·E for image generation, Google gTTS for text-to-speech, and MoviePy for video assembly. Includes a user-friendly Gradio interface for seamless content creation.",
      image:
        "https://ik.imagekit.io/wildxv7xr/logo12.avif?updatedAt=1752927923836",
      category: "EdTech, Digital Publishing, Media",
    },
    {
      title: "AI tools for faster, smarter video production.",
      description:
        "Built an AI-powered video editor using Whisper and MoviePy with auto transcription, translation, silence removal, transcript-based editing, and content insights like sentiment and topics.",
      image:
        "https://ik.imagekit.io/wildxv7xr/image%20(1).png?updatedAt=1752927919517",
      category: "Media, Social Networking, Video Technology",
    },
    {
      title: "Telecoms use AI for smarter customer engagement",
      description:
        "Designed a scalable Dutch-language chatbot system using LSTM/GRU models and Word2Vec to automate intent detection and sentiment analysis. Integrated directly into CRM platforms to enhance response accuracy, speed up issue resolution, and improve overall customer experience.",
      image:
        "https://ik.imagekit.io/wildxv7xr/image%20(2).png?updatedAt=1752927919519",
      category: "Telecommunications, Customer Support",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-40 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-12 h-12 bg-green-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20"
        animate={{
          y: [0, -30, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            What Our Customers Say
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Discover how leading companies across industries are transforming
            their operations with Adople
          </motion.p>
        </div>
      </motion.section>

      {/* Trusted by Industry Leaders */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            variants={fadeInUp}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {industryLeaders.map((leader, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Building className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <div className="flex-1">
                    <motion.p
                      className="text-gray-700 italic mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      "{leader.quote}"
                    </motion.p>
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Users className="w-5 h-5 text-gray-600" />
                      </motion.div>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Explore How Teams Use Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Explore How Teams Use Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {(showAllCaseStudies ? caseStudies : caseStudies.slice(0, 6)).map(
              (study, index) => {
                const isExpanded = expandedCards.has(index);
                const shouldTruncate = study.description.length > 120;

                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out transform"
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
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
                      <motion.div
                        initial={false}
                        animate={{ height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {isExpanded || !shouldTruncate
                            ? study.description
                            : truncateText(study.description, 120)}
                        </p>
                      </motion.div>

                      {shouldTruncate && (
                        <button
                          onClick={() => toggleCardExpansion(index)}
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                        >
                          {isExpanded ? (
                            <>
                              See less <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              See more <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>

          {/* Toggle button */}
          {caseStudies.length > 6 && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setShowAllCaseStudies(!showAllCaseStudies)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 5px 15px rgba(37, 99, 235, 0.2)",
                    "0 8px 25px rgba(37, 99, 235, 0.3)",
                    "0 5px 15px rgba(37, 99, 235, 0.2)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
              >
                {showAllCaseStudies ? "Show Less ↑" : "Explore more ↓"}
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Success Metrics */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInFromBottom}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 text-center mb-8"
              variants={fadeInUp}
            >
              Success Metrics
            </motion.h3>
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              {[
                {
                  value: "60%",
                  label: "Faster ticket resolution",
                  color: "text-blue-600",
                },
                {
                  value: "70%",
                  label: "Reduction in agent workload",
                  color: "text-green-600",
                },
                {
                  value: "40%",
                  label: "Improvement in search accuracy",
                  color: "text-purple-600",
                },
                {
                  value: "3x",
                  label: "Boost in employee productivity",
                  color: "text-orange-600",
                },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={bounceIn}
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <motion.div
                    className={`text-4xl font-bold ${metric.color} mb-2`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      delay: index * 0.1,
                    }}
                  >
                    {metric.value}
                  </motion.div>
                  <motion.div
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {metric.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Customers;
