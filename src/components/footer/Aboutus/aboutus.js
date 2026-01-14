import React from "react";
import "./Aboutus.css";
import { useNavigate } from "react-router-dom";

const AboutUs = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="about-overlay">
      <div className="about-container">
      <button className="close-btn-aboutus" onClick={() => navigate("/")} > X </button>
      <h1 className="about-title">About Foodie</h1>

      <p className="about-text">
        Foodie is a modern food discovery and delivery platform designed to
        connect people with their favorite restaurants and cuisines. We aim to
        make food ordering simple, fast, and delightful.
      </p>

      <p className="about-text">
        From local street food vendors to premium restaurants, Foodie helps
        users explore a wide range of dining options with transparent pricing,
        real reviews, and seamless ordering.
      </p>

      <div className="about-sections">
        <div className="about-card">
          <h3>🍽️ Our Mission</h3>
          <p>
            To empower restaurants and delight customers by delivering quality
            food experiences anytime, anywhere.
          </p>
        </div>

        <div className="about-card">
          <h3>🚀 Our Vision</h3>
          <p>
            To become the most trusted and user-friendly food platform across
            cities and communities.
          </p>
        </div>

        <div className="about-card">
          <h3>❤️ Our Values</h3>
          <p>
            Customer satisfaction, food safety, innovation, and community
            growth.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
