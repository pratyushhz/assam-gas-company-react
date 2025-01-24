import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";


// const sliderData = [
//   {
//     id: 1,
//     backgroundImage: "/new-images/slider-1.jpg",
//     subtitle: "WELCOME TO ASSAM GAS COMPANY",
//     title: "Connecting Assam with Energy for Tomorrow",
//   },
//   {
//     id: 2,
//     backgroundImage:
//       "https://images.unsplash.com/photo-1714901423290-45ab23464dbc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     subtitle: "WELCOME TO ASSAM GAS COMPANY",
//     title: "Connecting Assam with Energy for Tomorrow",
//   },
// ];

const HeroSlider = () => {

  const [sliderData, setSliderData] = useState([]);

  const slideRefs = useRef([]);
  const sliderRef = useRef();

  useEffect(() => {
    // Fetch data from the API
    const fetchSliderData = async () => {
      try {
        const response = await fetch("http://192.168.0.95/rmrc/public/api/slider");
        const data = await response.json();
        if (data.success && data.banner) {
          setSliderData(data.banner);
          // console.log(data.banner)
          console.log("Slider Data:", data.banner);
        }
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSliderData();
  }, []);



  useEffect(() => {
    // Apply background images to slides
    slideRefs.current.forEach((el, index) => {
      if (el && sliderData[index]) {
        // el.style.backgroundImage = `url(http://192.168.0.95/rmrc/public${sliderData[index].backgroundImage})`;
        const imageUrl = `url(http://192.168.0.95/rmrc/public${sliderData[index].backgroundImage})`;
        el.style.backgroundImage = imageUrl;
        el.style.backgroundSize = "cover";
        el.style.backgroundPosition = "center";
        console.log("Setting background image:", imageUrl);
      }
    });

    // Add animation for the first slide on page load
    const firstSlideText = slideRefs.current[0]?.querySelector(".slide__body");
    if (firstSlideText) {
      firstSlideText.classList.add("animate");
    }
  }, [sliderData]);

  const handleAfterChange = (current) => {
    // Remove animation from all slides
    slideRefs.current.forEach((el) => {
      const slideText = el?.querySelector(".slide__body");
      if (slideText) {
        slideText.classList.remove("animate");
      }
    });

    // Add animation to the current active slide
    const currentSlideText = slideRefs.current[current]?.querySelector(".slide__body");
    if (currentSlideText) {
      currentSlideText.classList.add("animate");
    }
  };

  const settings = {
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    speed: 700,
    fade: true,
    cssEase: "linear",
    afterChange: handleAfterChange, // Trigger animation on slide change
  };

  return (
    <section className="slider">
      <Slider {...settings} ref={sliderRef} className="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="slide-item align-v-h bg-overlay bg-overlay-2"
            ref={(el) => (slideRefs.current[index] = el)}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                  <div className="slide__body">
                    <span className="slide__subtitle">
                      {/* <span className="heading-badge">{slide.subtitle.split(" ")[0]}</span> {slide.subtitle.split(" ").slice(1).join(" ")} */}
                      <span className="heading-badge">Welcome to</span> Assam Gas Company
                    </span>
                    <h2 className="slide__title">{slide.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
