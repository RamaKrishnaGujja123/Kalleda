// src/pages/About.jsx
import React from "react";
import "../styles/pages/About.css";

const About = () => {
  return (
    <div className="about-page">
      <h2>About Kalleda Village</h2>
      <p className="intro">
        Kalleda is a scenic and culturally rich village nestled in the Warangal
        district of Telangana, India. Known for its agricultural roots and
        vibrant community, Kalleda represents the heart of rural India.
      </p>

      <section className="about-section">
        <h3>🏛️ Historical Significance</h3>
        <p>
          Kalleda is home to the Kolanu Venkateshwara Swamy Temple, a
          12th-century marvel built during the Kakatiya dynasty. This temple
          stands as a living testament to the village's rich spiritual and
          cultural lineage.
        </p>
      </section>

      <section className="about-section">
        <h3>🌾 Agricultural Practices</h3>
        <p>
          Agriculture is the backbone of Kalleda’s economy. Villagers cultivate
          rice and cotton, with women playing an essential role in the
          transplantation and harvest processes. It’s a place where tradition
          and technique go hand in hand.
        </p>
      </section>

      <section className="about-section">
        <h3>🎓 Education and Empowerment</h3>
        <p>
          Thanks to the Rural Development Foundation (RDF), Kalleda has emerged
          as a beacon of rural education. Schools like Kalleda Rural School and
          Vanitha Achutha Pai Junior College foster holistic development with a
          strong focus on equality, character, and community upliftment.
        </p>
      </section>

      <section className="about-section">
        <h3>🎉 Cultural Festivals</h3>
        <p>
          The village comes alive during festivals such as Bathukamma, Bonalu,
          and Dussehra. These celebrations reflect the deep-rooted customs,
          color, and cohesion of the community.
        </p>
      </section>

      <section className="about-section">
        <h3>🏠 Community Life</h3>
        <p>
          Multi-generational homes, shared occupations like weaving and
          carpentry, and strong neighborly bonds define the village’s social
          fabric. Kalleda’s community life is close-knit and welcoming.
        </p>
      </section>

      <section className="about-section">
        <h3>🗺️ Location and Accessibility</h3>
        <p>
          Located about 40 km from Warangal city in Parvathagiri Mandal,
          Telangana, Kalleda is well connected by road, making it accessible yet
          serenely rural.
        </p>
      </section>
    </div>
  );
};

export default About;
