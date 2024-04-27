// About.jsx

import React from "react";
import "../styles/about.css";
import Footer from "../components/Footer/Footer";
import backgroundImage from "../assets/images/about.jpg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <img src={backgroundImage} alt="Voyage Sage" className="about-image" />
          <h1 className="about-title">About Us</h1>
        </div>
        <div className="about-content">
          <p>
            Voyage Sage, a premier travel guidance platform, empowers millions of travelers worldwide to embark on unforgettable journeys. From meticulously planning itineraries to booking accommodations and exploring destinations, Voyage Sage is your trusted companion every step of the way.
          </p>
          <p>
            Our platform curates invaluable insights from seasoned travelers, offering comprehensive guidance on where to stay, what to do, and where to dine based on authentic reviews and recommendations. Voyage Sage ensures you make informed decisions that enhance your travel experiences.
          </p>
          <p>
            Voyage Sage simplifies travel planning for every type of journey. Whether you seek adventure in distant lands, relaxation in serene retreats, or cultural immersion in vibrant cities, Voyage Sage is your ultimate travel companion.
          </p>
          <p>
            Explore the world with confidence, discover hidden gems, and create lasting memories with Voyage Sage. Join our community of passionate travelers and let's embark on extraordinary adventures together.
          </p>
        </div>
        <div className="key-features">
          <h2>Key Features</h2>
          <ul>
            <li>Authorization and authentication for secure access to personalized content.</li>
            <li>Tours page showcasing a diverse range of curated travel experiences.</li>
            <li>Explore page featuring an interactive map highlighting recommended destinations.</li>
            <li>Real-time currency converter for seamless financial transactions.</li>
            <li>Weather checking functionality to assist in itinerary planning.</li>
            <li>Language translator for effortless communication in diverse locales.</li>
          </ul>
        </div>
        <div className="team-section">
          <h2>Our Team</h2>
          <div className="team-member">
            <h3>Sarthak Mishra</h3>
            {/* <p>Role: Lead Developer</p> */}
            {/* <p>Contribution: Frontend development, API integration</p> */}
          </div>
          <div className="team-member">
            <h3>Priyansh Rastogi</h3>
            {/* <p>Role: UI/UX Designer</p> */}
            {/* <p>Contribution: Designing user interfaces, creating wireframes</p> */}
          </div>
          <div className="team-member">
            <h3>Kartik Patel</h3>
            {/* <p>Role: Backend Developer</p> */}
            {/* <p>Contribution: Implementing server-side logic, database management</p> */}
          </div>
          <div className="team-member">
            <h3>Ayush Yadav</h3>
            {/* <p>Role: Content Creator</p> */}
            {/* <p>Contribution: Writing blog posts, managing social media</p> */}
          </div>
          <div className="team-member">
            <h3>Aaditya Nayak</h3>
            {/* <p>Role: QA Tester</p>
            <p>Contribution: Testing website functionality, identifying bugs</p> */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
