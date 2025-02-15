import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OurLeadership = ({ data }) => {
  console.log("Leadership data", data);


  return (

    <section className="pt-70 who-we-are">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h5 className="title-left-border text__block-title">Board of Directors</h5>
          </div>
        </div>
        <div className="row row-no-gutter mt-10 leadership-card">
          <div className="profile-container">
            {data?.our_leadership?.map((leader, index) => (
              <div key={leader.id || `leader-${index}`} className={`profile-card ${index % 2 !== 0 ? "even" : ""}`}>
                <div className="profile-image">
                  <img src={leader.image} alt={leader.name} loading="lazy" />
                </div>
                <div className="profile-text">
                  <div className="profile-title">{leader.name}</div>
                  <h6>{leader.designation}</h6>
                  <span>{leader.short_description}</span>
                  <div className="leadership-btn">
                    <a href="#" className="btn btn__white btn__white-style2 mt-20">
                      <FaArrowRight className="icon-filled icon-arrow-left" />
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLeadership;
