import React from "react";
import "./About.css"; // Make sure this CSS file exists

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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJ3IAyPqwa1s-qcwCp-Mz6pas5hcKVFalbA&s" alt="Our Story" />
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
            <img src="/images/myself.jpg" alt="Founder" />
            <h3>Geethu Priya J</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-card">
            <img src="/images/niki3.jpg" alt="Co-Founder" />
            <h3>Nikhil Kumar</h3>
            <p>Co-Founder & Product Lead</p>
          </div>
          <div className="team-card">
            <img src="/images/kani.jpg" alt="Skin Expert" />
            <h3>Kanishka Sharma</h3>
            <p>Skin Specialist</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
