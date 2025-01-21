import React from 'react'
import CustomerUpdateBg from "../assets/new-images/about-us-img.jpg"


const CustomerUpdates = () => {
  return (
    <div className="col-sm-12 col-md-12 col-lg-4">
      <div className="customer-service-section-2">
        <div className="widget widget-help bg-overlay bg-overlay-primary">
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
                <ul className="imp-updates list-unstyled">
                  {[
                    "Lorem ipsum dolor sit amet consectetur.",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, illo.",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, illo.",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, illo.",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, illo.",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, illo.",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, illo.",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, illo.",
                  ].map((update, index) => (
                    <li key={index}>
                      <a href="#">
                        <i className="icon-arrow-right"></i>{" "}
                        <span>{update}</span>
                      </a>
                      <hr />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href="request-quote.html"
              className="btn btn__primary btn__primary-style2 mr-30 mt-4"
            >
              <i className="icon-arrow-right"></i>
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerUpdates
