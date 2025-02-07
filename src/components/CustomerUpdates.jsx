import React, { useEffect, useState } from "react";
import CustomerUpdateBg from "../assets/new-images/about-us-img.jpg"
import { FaArrowRight } from "react-icons/fa"

const CustomerUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://167.71.235.8/agcl/public/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.customer_updates)
        setUpdates(data.customer_updates);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching customer updates:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="col-sm-12 col-md-12 col-lg-4">
      <div className="customer-service-section-2">
        <div className="widget widget-help bg-overlay bg-overlay-2 bg-overlay-primary">
          <div className="bg-img">
            <img src={CustomerUpdateBg} alt="banner" />
          </div>
          <div className="widget__content">
            <h3
              className="cta__title color-white"
              style={{
                background: "#459e37",
                color: "#fff",
                padding: "4px 20px",
                fontSize: "24px",
                borderRadius: "20px",
                lineHeight: "28px",
              }}
            >
              Customer Updates
            </h3>
            <div className="marquee-container">
              <div className="marquee">
                {loading ? (
                  <p>Loading updates...</p>
                ) : (
                  <ul className="imp-updates list-unstyled">
                    {updates.map((update) => (
                      <li key={update.id}>
                        <a
                          href={update.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {/* <i className="icon-arrow-right"></i>{" "} */}
                          <FaArrowRight className="icon-arrow-right" />{" "}
                          <span>{update.description}</span>
                        </a>
                        <hr />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <a
              href="request-quote.html"
              className="btn btn__primary btn__primary-style2 mr-30 mt-4"
            >
              <FaArrowRight className="icon-filled" />
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerUpdates;
