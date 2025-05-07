// src/pages/Gallery.jsx
import React from "react";
import "../styles/pages/Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h2>Gallery</h2>
      <p>Images and videos showcasing the beauty of Kalleda Village and its surroundings.</p>
      <div className="gallery">
        <img src="./images/Hills.jpeg" alt="Village Hills" />
        <img src="./images/KolanuVenkateshwaraTemple.png" alt="Kolanu Venkateshwara Swamy Temple" />
        <img src="./images/KalledaGhadi.jpg" alt="Kalleda Ghadi" />
        <img src="./images/KRSStudents.jpg" alt="Students at Kalleda Rural School" />
        <img src="./images/BathukammaFestival.jpg" alt="Bathukamma Festival Celebration" />
        <img src="./images/BhadrakaliLake.jpg" alt="Bhadrakali Lake" />
        <img src="./images/RamappaTemple.jpg" alt="Ramappa Temple" />
        <img src="./images/WarangalFort.jpg" alt="Warangal Fort" />
        <img src="./images/PakhalLake.jpg" alt="Pakhal Lake" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Gallery;
