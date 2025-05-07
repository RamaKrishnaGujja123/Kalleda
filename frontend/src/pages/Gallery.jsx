import React from "react";
import "../styles/pages/Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h2>Gallery</h2>
      <p>Images and videos showcasing the beauty of Kalleda Village.</p>
      <div className="gallery">
        <img src="../static/festival1.jpg" alt="Festival Celebration" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Gallery;
