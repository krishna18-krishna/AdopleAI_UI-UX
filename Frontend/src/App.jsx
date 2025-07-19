import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Customers from './components/Customers';
import Pricing from './components/Pricing';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ✅ You must import the styles

const Home = () => (
  <>
    <Hero />
    <Features />
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 0,       // animation duration
      once: false,           // animate only once
      easing: 'ease-in-out' // animation easing
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
