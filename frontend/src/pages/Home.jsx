import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import WorkProcessSection from '../components/WorkProcessSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkProcessSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
