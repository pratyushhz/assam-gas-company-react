import React from 'react';
import Img from "../../assets/new-images/about-us-img.jpg"


const AboutCompany = () => {
  return (
    <section className="about-layout1 pt-60 pb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-5 features-layout5" style={{ marginRight: 0 }}>
            <div className="about__text">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="heading__layout2 mb-30 section-title"
                    data-aos="fade-up"
                    data-aos-offset="0"
                  >
                    <h2 className="heading__subtitle">
                      <span className="heading-badge" style={{ color: '#fff' }}>About</span> COMPANY
                    </h2>
                    <h3 className="heading__title mt-20">Pioneering Energy Solutions for Assam</h3>
                  </div>
                </div>
              </div>

              <p className="heading__desc mb-0" style={{ textAlign: 'justify' }}>
                Assam Gas Company Ltd., a Govt. of Assam Undertaking was incorporated on March 31, 1962 in Shillong as a limited company wholly owned by the Government of Assam to carry out all kinds of business related to natural gas in India.
              </p>
              <p className="heading__desc mb-20" style={{ textAlign: 'justify' }}>
                The first gas transportation business started in the year 1967 with the supply of natural gas to Namrup Thermal Power Station of ASEB. Subsequently, the company grew from strength to strength and stands today as one of the premier natural gas distribution companies in India.
              </p>
              <div className="d-flex align-items-center mt-0 new-btn feature-item">
                <a href="#" className="btn__link mr-30 mt-0">
                  <i className="icon-arrow-right icon-filled"></i>
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7">
            <div className="video-banner-layout2">
              <img
                src={Img}
                alt="about"
                className="w-100"
                style={{ height: '420px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
