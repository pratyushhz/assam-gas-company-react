import React from "react";

const CurrentUpdates = () => {
  const updates = [
    "Update 1: New management policy announced.",
    "Update 2: Safety measures strengthened for employees.",
    "Update 3: Expansion plans for 2024 confirmed.",
    "Update 4: Employee awards ceremony held successfully.",
  ];

  const quickLinks = ["Link 1", "Link 2", "Link 3"];

  return (
    <section className="pt-0">
      <div className="container">
        <div className="agcl-updates-bar">
          <div className="updates-container">
            <span className="updates-label">Current Updates</span>
            <button className="pause-btn">
              <i className="icon-pause"></i>
            </button>
            <div className="scrolling-news marquee1">
              <ul className="news-list">
                {updates.map((update, index) => (
                  <li key={index}>
                    <a href="#">{update}</a>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#" className="view-all">
              View All <i className="icon-arrow-right"></i>
            </a>
            <div className="quick-links-dropdown">
              <button className="dropdown-toggle">Quick Links</button>
              <ul className="quick-links-dropdown-menu">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentUpdates;
