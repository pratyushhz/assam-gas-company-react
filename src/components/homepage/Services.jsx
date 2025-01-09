import React from "react";
import Slider from "react-slick";

const Services = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const features = [
    {
      title: "DOMESTIC GAS",
      desc: "AGCL enhances daily living by powering kitchen stoves, water heaters, and other home appliances",
      img: "https://www.mining.com/wp-content/uploads/2024/09/AdobeStock_190981046-scaled-e1726776699418.jpeg",
    },
    {
      title: "COMMERCIAL GAS",
      desc: "Specializing in commercial gas services, AGCL powers industries, businesses, and institutions with clean and cost-effective energy",
      img: "https://m.economictimes.com/thumb/msid-87674079,width-1200,height-900,resizemode-4,imgsize-105748/piped-gas-getty.jpg",
    },
    {
      title: "INDUSTRIAL GAS",
      desc: "AGCL is a leading supplier of natural gas to various industries, including the renowned tea industry of Assam",
      img: "https://fast-gas.com/wp-content/uploads/2024/02/Industrial-Gas-Cylinders.jpg",
    },
    {
      title: "CNG",
      desc: "NG is ideal for vehicles such as cars, buses, and commercial fleets, helping to reduce air pollution and operational costs",
      img: "https://images.goodreturns.in/img/2024/09/cng6004-1725863487.jpg",
    },
    {
      title: "PNG",
      desc: "PNG as a convenient, safe, and eco-friendly energy solution for households, commercial establishments, and industries",
      img: "https://www.mining.com/wp-content/uploads/2024/09/AdobeStock_190981046-scaled-e1726776699418.jpeg",
    },
    {
      title: "MS",
      desc: "Our remote industrial solar systems are designed to reliably power our clients",
      img: "https://i.cbc.ca/1.6452750.1652468604!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_780/gas-prices.jpg",
    },
    {
      title: "HSD",
      desc: "Our remote industrial solar systems are designed to reliably power our clients",
      img: "https://etimg.etb2bimg.com/photo/58039362.cms",
    },
  ];

  return (
    <section
      className="features-layout4 py-0 banner-bottom-slider"
      style={{ position: "relative", zIndex: 10 }}
    >
      <div className="container">
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="services-img">
                <img src={feature.img} alt={feature.title} />
              </div>
              <div className="banner-bottom-slider-content">
                <h4 className="feature__title">{feature.title}</h4>
                <p className="feature__desc">{feature.desc}</p>
                <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-filled"></i>
                  <span>Explore More</span>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
