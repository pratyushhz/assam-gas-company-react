import React from 'react'

const Vertical = () => {
  return (
    <div className="service-item">
        <div className="service__img">
            <img src="https://assamgas.org/index_files/vlb_images1/26022024/public_meeting/public_meeting7.jpg"
            alt="service" loading="lazy" />
        </div>
        <div className="service__body">
            <h4 className="service__title">Gas Transmission</h4>
            <p className="service__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sequi!</p>
            <a href="services-single-service.html" className="btn btn__secondary btn__outlined btn__custom">
            <span>Read More</span>
            <i className="icon-arrow-right"></i>
            </a>
        </div>
    </div>
  )
}

export default Vertical
