import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";


const HeroSlider = () => {
  const [sliderData, setSliderData] = useState([]);
  const slideRefs = useRef([]);
  const sliderRef = useRef();

  useEffect(() => {
    // Fetch data from the API
    const fetchSliderData = async () => {
      try {
        const response = await fetch("http://167.71.235.8/agcl/public/api/home");
        const data = await response.json();
        console.log("API Response Data:", data);
  
        // Directly set the banner data if it's available
        if (data.banner && data.banner.length > 0) {
          setSliderData(data.banner);
          console.log("Slider Data:", data.banner);
        } else {
          console.error("No banner data available.");
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
        const imageUrl = `url(http://167.71.235.8/agcl/public${sliderData[index].backgroundImage})`;
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
    afterChange: handleAfterChange,
  };

  

  return (
    <section className="slider">
      <Slider {...settings} ref={sliderRef} className="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="slide-item align-v-h bg-overlay"
            ref={(el) => (slideRefs.current[index] = el)}
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                  <div className="slide__body">
                    <span className="slide__subtitle">
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
