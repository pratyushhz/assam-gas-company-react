import React from 'react';
import Slider from "react-slick";
const Partners = () => {


    const partners = [
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZzRk--l4yr360keYrT0ea52KkD0NprIetkQ&s",
          alt: "Client 1",
          link: "#",
        },
        {
          img: "assets/new-images/logo/nrl-logo.jpg",
          alt: "Client 2",
          link: "#",
        },
        {
          img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/ONGC_Logo.png",
          alt: "Client 3",
          link: "#",
        },
        {
          img: "https://iggl.co.in/wp-content/uploads/2018/09/gail-test2.png",
          alt: "Client 4",
          link: "#",
        },
        {
          img: "https://iggl.co.in/wp-content/uploads/2018/10/iocl.png",
          alt: "Client 5",
          link: "#",
        },
        {
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Hindustan_Petroleum_Logo.svg/800px-Hindustan_Petroleum_Logo.svg.png",
          alt: "Client 6",
          link: "#",
        },
        {
          img: "https://static6.depositphotos.com/1020822/583/v/450/depositphotos_5836387-stock-illustration-abstract-logo-for-furniture-company.jpg",
          alt: "Client 7",
          link: "#",
        },
      ];
    

    const settings = {
        slidesToShow: 6,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };





  return (
    <section className="clients py-0 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Slider {...settings}>
              {partners.map((partner, index) => (
                <div className="client" key={index}>
                  <a href={partner.link}>
                    <img src={partner.img} alt={partner.alt} />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
