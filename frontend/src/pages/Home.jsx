import React from "react";
import HeroBanner from "../components/HeroBanner";
import "../styles/pages/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <div className="content">
        <p>Explore Kalleda, a place filled with rich heritage, culture, and nature.</p>
      </div>
    </div>
  );
};

export default Home;
