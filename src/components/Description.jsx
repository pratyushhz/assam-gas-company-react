import React from 'react'
import PropTypes from 'prop-types';

const Description = ({content}) => {
  return (
    <section className="pt-0 pb-0 who-we-are">
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  )
}

Description.propTypes = {
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Description
