import React from "react";
import "./About.css";

import lingesh from "../assets/lingesh.jpg";
import sreeKumaran from "../assets/sree-kumaran.jpg";
import niranjanBalaji from "../assets/niranjan-balaji.jpg";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About GlowSkin</h1>
        <p>Natural care for your radiant skin</p>
      </header>

      <section className="about-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            At GlowSkin, we believe that healthy skin is the foundation of
            confidence. Founded in 2020, our journey began with a passion for
            natural ingredients and sustainable beauty. Every product is crafted
            with care to bring out the best in your skin.
          </p>
        </div>
        <div className="story-image">
          {}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJ3IAyPqwa1s-qcwCp-Mz6pas5hcKVFalbA&s"
            alt="Our Story"
          />
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We aim to provide high-quality skincare products that are both
          effective and eco-friendly. Our mission is to empower everyone to
          embrace their natural beauty while caring for the planet.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src={lingesh} alt="Lingesh Ram" />
            <h3>Lingesh Ram</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src={sreeKumaran} alt="Sree Kumaran" />
            <h3>Sree Kumaran</h3>
            <p>Co-Founder & Product Lead</p>
          </div>
          <div className="team-card">
            <img
              src={niranjanBalaji}
              alt="Niranjan Balaji"
              style={{ objectPosition: "center 22%" }}
            />
            <h3>Niranjan Balaji</h3>
            <p>Skin Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
