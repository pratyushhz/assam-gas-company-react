// import React from 'react';

// eslint-disable-next-line react/prop-types
const Vertical = ({ title, shortDescription, image, link }) => {
  return (
    <div className="service-item">
      <div className="service__img">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="service__body">
        <h4 className="service__title">{title}</h4>
        <p className="service__desc">{shortDescription}</p>
        <a href={link} className="btn btn__secondary btn__outlined btn__custom">
          <span>Read More</span>
          <i className="icon-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Vertical;
