import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = ({ onAboutUsClick }) => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li onClick={() => navigate("/aboutus")}>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Partners</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>FAQs</li>
            <li onClick={() => navigate("/contactus")}>
              Contact Us
            </li>
            <li>Cancellation & Refund</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Security</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social links & Download</h3>

          <div className="social-icons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
              alt="Facebook"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
            <img
              src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg"
              alt="X"
            />
          </div>

          <div className="app-download">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
            />
            <img
              src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              alt="App Store"
            />
          </div>
        </div>

      </div>

      <p className="footer-bottom">© 2026 Foodie. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
