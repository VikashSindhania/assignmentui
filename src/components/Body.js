import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <main className="body">
      {/* Hero Section */}

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat">
          <div className="stat-value">100+</div>
          <div className="stat-label">
            Cities Around
            <br />
            the World
          </div>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <div className="stat-value">10,000+</div>
          <div className="stat-label">
            Parents
            <br />
            Attended
          </div>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <div className="stat-value">2000+</div>
          <div className="stat-label">
            Kids Became
            <br />
            Fabreaders
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="reviews-left">
          <div className="reviews-stars-svg">
            {[...Array(5)].map((_, i) => (
              <span className="star-square" key={i}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#00e6b8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    stroke="#00e6b8"
                    strokeWidth="0.5"
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  />
                </svg>
              </span>
            ))}
          </div>
          <div className="review-note">BASED ON 800 REVIEWS</div>
        </div>
        <div className="reviews-right">
          <span className="excellent">Excellent</span>{" "}
          <span className="rating">4.7</span>{" "}
          <span className="out-of">out of 5</span>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section">
        <div className="countdown-title">
          REGISTRATION FOR THE NEXT
          <br />
          MASTERCLASS CLOSES SOON
        </div>
        <div className="countdown-timer">
          <div className="timer-box">30</div>
          <div className="timer-box">14</div>
          <div className="timer-box">28</div>
          <div className="timer-box">20</div>
        </div>
        <div className="timer-labels">
          <span>DAYS</span>
          <span>HOURS</span>
          <span>MINUTES</span>
          <span>SECONDS</span>
        </div>
        <button className="body-cta">RESERVE YOUR SPOT – RS.499</button>
      </section>
    </main>
  );
};

export default Body;
