import React from "react";
import "./Header.css";
import headerImg from "../assets/Parents School.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header-bg-image" src={headerImg} alt="Background" />
        <div className="header-top">
          <div className="header-date">
            13th and 14th May 2025 6:00 pm - 7:30 pm
          </div>
          <div className="header-menu">
            {/* <span className="menu-icon">&#9776;</span> */}
          </div>
        </div>
        <div className="header-content">
          <div className="header-title">
            YOUR CHILD CAN START READING
            <br />
            AT HOME – EVEN BEFORE AGE 3
          </div>
          <button className="header-cta">RESERVE YOUR SPOT – RS.499</button>
          <div className="header-proof">(proof below)</div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-text">
          <p className="hero-desc">
            Join the World's{" "}
            <span className="highlight">Highest-Rated Online Masterclass</span>{" "}
            (for Parents)! Learn simple, science backed techniques to teach your
            child to read – in just 15 minutes a day.
          </p>
        </div>
        <div className="hero-img">
          {/* Placeholder image */}
          {/* <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=200"
            alt="Parent and child reading"
          /> */}
        </div>
      </section>
    </>
  );
};

export default Header;
