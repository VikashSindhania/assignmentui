import React from "react";
import "./Footer.css";

const RainbowSVG = () => (
  <svg
    width="120"
    height="100"
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 90 Q60 10 110 90"
      stroke="#E53935"
      strokeWidth="10"
      fill="none"
    />
    <path
      d="M20 90 Q60 30 100 90"
      stroke="#FFEB3B"
      strokeWidth="10"
      fill="none"
    />
    <path
      d="M30 90 Q60 50 90 90"
      stroke="#4FC3F7"
      strokeWidth="10"
      fill="none"
    />
    <ellipse cx="200" cy="190" rx="18" ry="18" fill="#fff" />
    <ellipse cx="200" cy="190" rx="18" ry="18" fill="#fff" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-rainbow left">
        <RainbowSVG />
      </div>
      <div className="footer-main-content">
        <div className="footer-section footer-about">
          <div className="footer-title">ABOUT US</div>
          <ul>
            <li>Who We Are</li>
            <li>FAB Masterclass</li>
            <li>Testimonials</li>
            <li>Refund Policy</li>
            <li>FAQS</li>
          </ul>
        </div>
        <div className="footer-section footer-center">
          <div className="footer-tagline">
            The #1 Family-Centred Ed-Tech
            <br />
            Provider in India
          </div>
          <hr className="footer-divider" />
          <div className="footer-copyright-row">
            <span className="footer-copyright">Copyright @ 2025 INREAL</span>
            <span className="footer-links">
              All Rights Reserved | Terms & Conditions | Privacy Policy
            </span>
          </div>
        </div>
        <div className="footer-section footer-contact">
          <div className="footer-title">CONTACT US</div>
          <ul>
            <li>
              <span role="img" aria-label="email">
                ✉️
              </span>{" "}
              info@inreal.com
            </li>
            <li>
              <span role="img" aria-label="phone">
                📞
              </span>{" "}
              +91-7045013337
            </li>
            <li>
              <span role="img" aria-label="location">
                📍
              </span>{" "}
              Test Assignment
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-rainbow right">
        <RainbowSVG />
      </div>
    </footer>
  );
};

export default Footer;
