import React from "react";
import { Link } from "react-router-dom";

const VerticalCategory = ({ verticalCategoryData }) => {
  // console.log("Props received in VerticalCategory:", verticalCategoryData );

  return (
    <div className="feature-item">
      <div className="services-img">
        <img src={verticalCategoryData.img} alt={verticalCategoryData.title} />
      </div>
      <div className="banner-bottom-slider-content">
        <h4 className="feature__title">{verticalCategoryData.title}</h4>
        <p className="feature__desc">{verticalCategoryData.desc}</p>
        <Link to="#" className="btn__link">
          <i className="icon-arrow-right icon-filled"></i>
          <span>Explore More</span>
        </Link>
      </div>
    </div>
  )
};

export default VerticalCategory;
