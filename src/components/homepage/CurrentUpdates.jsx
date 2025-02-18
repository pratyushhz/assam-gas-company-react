import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CurrentUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://167.71.235.8/agcl/public/api/home")
      .then((response) => response.json())
      .then((data) => {
        setUpdates(data.current_updates);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching updates:", error);
        setLoading(false);
      });
  }, []);

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
              {loading ? (
                <p>Loading updates...</p>
              ) : (
                <ul className="news-list">
                  {updates.map((update, index) => (
                    <li key={update.id}>
                      <Link to={update.link} target="_blank" rel="noopener">
                      Update {index + 1} : {update.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link to="#" className="view-all">
              View All <FaArrowRight className="icon-arrow-right" style={{fontSize:"90%", paddingBottom:"3px"}}/>
            </Link>
            <div className="quick-links-dropdown">
              <button className="dropdown-toggle">Quick Links</button>
              <ul className="quick-links-dropdown-menu">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to="#" key={quickLinks.id}>{link}</Link>
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
