/* eslint-disable react/prop-types */
// import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const VerticalCategory = ({ verticalCategoryData }) => {
  console.log("Props received in Subverticals:", verticalCategoryData );

  return (
    <div className="feature-item">
      <div className="services-img">
        <img src={verticalCategoryData.image} alt={verticalCategoryData.title} />
      </div>
      <div className="banner-bottom-slider-content">
        <h4 className="feature__title">{verticalCategoryData.title}</h4>
        <p className="feature__desc">{verticalCategoryData.shortDescription}</p>
        <Link to="#" className="btn__link">
          {/* <i className="icon-arrow-right icon-filled"></i> */}
          <FaArrowRight className="icon-filled" />
          <span>Explore More</span>
        </Link>
      </div>
    </div>
  )
};

export default VerticalCategory;
