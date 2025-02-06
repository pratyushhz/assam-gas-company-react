import Slider from "react-slick";
import Vertical from "./Vertical";
import useFetchHomeAPI from "../hooks/useFetchHomeAPI";
import { FaArrowRight } from "react-icons/fa";
import { CustomNextArrow, CustomPrevArrow } from "./CustomPrevArrow";
// import "slick-carousel/slick/slick.css";

const VerticalList = () => {
  const { verticals, loading, error } = useFetchHomeAPI();
  console.log(verticals)

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className="services-layout2 pt-120 certificate-main-container" style={{background:"#272b6f"}}>
      {/* <div className="bg-img">
        <img src="assets/images/backgrounds/5.jpg" alt="background" />
      </div> */}
      <div className="container">
        <div className="row mb-30">
          <div className="col-12">
            <h2 className="heading__subtitle color-primary">Verticals</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <h3 className="heading__title color-white">Our Verticals</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Slider {...settings} className="slick-carousel carousel-arrows-light">
              {verticals.map((vertical) => (
                <Vertical key={vertical.id} {...vertical} />
              ))}
            </Slider>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <a href="request-quote.html" className="btn btn__primary btn__primary-style2 mr-30">
              <FaArrowRight className="icon-arrow-right"/>
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalList;
