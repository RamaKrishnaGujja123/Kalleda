import React from "react";
import HeroBanner from "../components/HeroBanner";
import WelcomeSection from "../components/WelcomeSection";
import VillageHighlights from "../components/VillageHighlights";
import MapSection from "../components/MapSection";
import CTABanner from "../components/CTABanner"; // 🔥 import the CTA banner
import "../styles/pages/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <WelcomeSection />
      <VillageHighlights />
      <MapSection />
      <CTABanner />  
    </div>
  );
};

export default Home;
