import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import swiperSliderBg from "../../assets/new-images/about-us-img.jpg"

const slides = [
    {
      img: "https://www.thenudge.org/wp-content/uploads/2024/11/Economic-Inclusion-Program-EIP-in-Assam.jpeg",
      title: "Title 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rem est excepturi minus odit doloremque quo veniam perspiciatis delectus velit.",
    },
    {
      img: "https://i0.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2018/09/traditional-bodo-dance_bagrumba_3.jpg?resize=648%2C433&ssl=1",
      title: "Title 2",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis eveniet consequuntur nobis provident tempore ipsa fugiat rem suscipit voluptas perspiciatis.",
    },
    {
      img: "https://pbs.twimg.com/media/GIy4vCRXcAIXk5-?format=jpg&name=large",
      title: "Title 3",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente consequuntur itaque eaque atque molestiae quidem sit voluptate rerum et.",
    },
    {
      img: "https://pbs.twimg.com/media/FXoBPyFaUAAdC1w.jpg",
      title: "Title 4",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia voluptas maxime saepe culpa illum minus sunt animi. Placeat, ad delectus.",
    },
  ];
  
  

const AGCLInAction = () => {
  return (
    <section className="banner-layout2 pt-60 pb-60">
      <div className="container">
        <div
          className="row mb-40"
          style={{ position: "relative", zIndex: 10 }}
          data-aos="fade-up"
          data-aos-offset="0"
        >
          <div className="col-12">
            <h2
              className="heading__subtitle color-primary1 heading-badge mb-0"
              style={{ width: "fit-content", color: "#fff" }}
            >
              News
            </h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <h3 className="heading__title color-white mt-20">AGCL in Action</h3>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
            <a
              href="#"
              className="new-btn-style btn btn__primary btn__outlined btn__custom"
            >
              <i className="icon-arrow-right"></i>
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-img">
        <img src={swiperSliderBg} alt="background" />
      </div>
      <div className="container-fluid">
        <Swiper
          spaceBetween={30}
          slidesPerView={2.5}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 2.2,
            },
          }}
          modules={[Autoplay]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.img}
                alt={`Image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <a
                  href="#"
                  className="btn btn__primary btn__primary-style2 mr-30 mt-4"
                >
                  <i className="icon-arrow-right"></i>
                  <span>View All</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default AGCLInAction
