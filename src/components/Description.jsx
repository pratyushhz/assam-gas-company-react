import React from 'react'
import PropTypes from 'prop-types';


const Description = ({ title, paragraphs }) => {
  return (
    <section className="pt-0 pb-0 who-we-are">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <h5 className="title-left-border text__block-title">{title}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text__block-desc">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

Description.propTypes = {
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Description
