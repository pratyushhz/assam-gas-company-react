import React from 'react'
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const Banner = ({ title, breadcrumbs, backgroundImage }) => {

    const bannerRef = useRef();

    useEffect(() => {
      // Apply the background image using inline styles
      if (bannerRef.current) {
        bannerRef.current.style.backgroundImage = `url(${backgroundImage})`;
        bannerRef.current.style.backgroundSize = "cover";
        bannerRef.current.style.backgroundPosition = "center";
      }
    }, [backgroundImage]);

  return (
    <section
      ref={bannerRef}
      className="page-title page-title-layout2 bg-overlay bg-overlay-2 bg-parallax"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h1 className="pagetitle__heading mb-0">{title}</h1>
            <div className="d-flex align-items-center mt-30">
              <a href="#" className="btn btn__white">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb-wrapper bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                  {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="breadcrumb-item">
                      {index === breadcrumbs.length - 1 ? (
                        <span>{crumb.label}</span>
                      ) : (
                        <a href={crumb.path}>{crumb.label}</a>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
