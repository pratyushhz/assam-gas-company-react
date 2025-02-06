import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowRight } from "react-icons/fa";
// import "slick-carousel/slick/slick-theme.css";

const Certifications = () => {

    const certificates = [
        {
          id: 1,
          img: "https://media.licdn.com/dms/image/C4E12AQGPJZawv8RmyA/article-cover_image-shrink_720_1280/0/1591475723384?e=2147483647&v=beta&t=jf1a2Uo6x45N7is1P236S3Wu9HrC-douB5xVGvW-qWs",
          title: "Quality Management System-qms(IS/ISO 9001: 2015)",
        },
        {
          id: 2,
          img: "https://www.qacqatar.com/wp-content/uploads/2021/06/ISO-14001.jpg",
          title: "Environment Management System-ems(IS/ISO 14001: 2015)",
        },
        {
          id: 3,
          img: "https://media.licdn.com/dms/image/D4D12AQFGS7j8V83V-w/article-cover_image-shrink_720_1280/0/1681384701227?e=2147483647&v=beta&t=mDP3hobpxPV8G0ET3wBKdtP87BlJyw8xdHEXM8b8B-k",
          title: "Occupational Health Safety Management System-ohsms(IS/ISO 45001:2018)",
        },
        {
            id: 4,
            img: "https://media.licdn.com/dms/image/D4D12AQFGS7j8V83V-w/article-cover_image-shrink_720_1280/0/1681384701227?e=2147483647&v=beta&t=mDP3hobpxPV8G0ET3wBKdtP87BlJyw8xdHEXM8b8B-k",
            title: "Occupational Health Safety Management System-ohsms(IS/ISO 45001:2018)",
        },
        {
            id: 5,
            img: "https://media.licdn.com/dms/image/D4D12AQFGS7j8V83V-w/article-cover_image-shrink_720_1280/0/1681384701227?e=2147483647&v=beta&t=mDP3hobpxPV8G0ET3wBKdtP87BlJyw8xdHEXM8b8B-k",
            title: "Occupational Health Safety Management System-ohsms(IS/ISO 45001:2018)",
        },
        {
            id: 6,
            img: "https://media.licdn.com/dms/image/D4D12AQFGS7j8V83V-w/article-cover_image-shrink_720_1280/0/1681384701227?e=2147483647&v=beta&t=mDP3hobpxPV8G0ET3wBKdtP87BlJyw8xdHEXM8b8B-k",
            title: "Occupational Health Safety Management System-ohsms(IS/ISO 45001:2018)",
        },
      ];
      
  
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="portfolio-layout2 certificate-main-container">
      <div className="container">
        <div
          className="row mb-40"
          style={{ position: "relative", zIndex: 10 }}
          data-aos="fade-up"
          data-aos-offset="0"
        >
          <div className="col-12">
            <span className="pre-title">Certifications</span>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7">
            <h3 className="heading__title" style={{ fontSize: "30px" }}>
              Certified for Excellence
            </h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 offset-lg-1">
            <a href="#" className="btn btn__primary btn__outlined btn__custom">
              <FaArrowRight className='icon-arrow-right'/>
              <span>View All</span>
            </a>
          </div>
        </div>

        <Slider {...settings}>
          {certificates.map((certificate, index) => (
            <div className="portfolio-item" key={certificate.id} style={{ width: "360px" }}>
              <div className="portfolio__img">
                <img src={certificate.img} alt={`Certificate ${index + 1}`} />
                <div className="steps">
                  <span>{index + 1}</span>
                </div>
              </div>
              <div className="portfolio__body_2">
                <h4 className="portfolio__title">
                  <a href="#">{certificate.title}</a>
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Certifications
