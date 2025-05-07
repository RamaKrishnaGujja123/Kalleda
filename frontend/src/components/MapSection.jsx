import React from "react";
import "../styles/components/MapSection.css";

const MapSection = () => (
  <section className="map-section">
    <h2>Where is Kalleda?</h2>

    {/* Google Maps Embed Option */}
    <div className="map-iframe-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60806.77426275552!2d79.65310656879635!3d17.72467880853834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34a1cc6a063b89%3A0x8d96417446a531d6!2sKalleda%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1746592442573!5m2!1sen!2sus"
        title="Kalleda Map"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
);

export default MapSection;
