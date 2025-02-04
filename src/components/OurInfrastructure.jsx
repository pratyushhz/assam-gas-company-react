import React from "react";
import { Link } from "react-router-dom";

const OurInfrastructure = () => {
  const infrastructureItems = [
    {
      title: "9 nos of Gas Booster compressor at Duliajan",
      image: "https://www.business-northeast.com/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-11-at-1.32.27-PM-Copy-1024x768.jpeg",
      link: "#",
    },
    {
      title: "1 no of Gas Boosters Station at Uriamghat under BOO contract",
      image: "https://lh5.googleusercontent.com/proxy/dPBlYBEIOODtuFJVHT1ZEmAW_TeswqmsiwEb55hjdlUKzfGoqBGPlS_i6fZN326U2v1Bc00VoY6-ScaaPYGNY3vRc0JjgNb8LEMv7Gki8D-iXYchlT-sJwiawgfdQOM2i65CWu0g",
      link: "#",
    },
    {
      title: "Extensive network of Steel pipelines (Assorted Dia.)",
      image: "https://energyconnectionscanada.com/wp-content/uploads/2023/08/AdobeStock_623033026-1024x683.jpeg",
      link: "#",
    },
    {
      title: "Extensive network of PE pipelines (Assorted Dia.)",
      image: "https://media.licdn.com/dms/image/v2/D5612AQEV6iVr92yDOQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1723881028864?e=2147483647&v=beta&t=H7aPM5unQFdddxrswX8-LFbuLWvG7ZyPcmhFNu_8cjw",
      link: "#",
    },
    {
      title: "Gas Receiving & Delivery Terminals",
      image: "https://gailonline.com/img/DharmaPipelineImg/RT_Paradip_Odisha_during_Construction_stage_05.jpg",
      link: "#",
    },
    {
      title: "In house Repair & Maintenance of sophisticated equipment",
      image: "https://www.accessbriefing.com/Images/1260x628/20221212-161411-maint.jpg",
      link: "#",
    },
  ];

  return (
    <section className="portfolio-layout2 pt-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading-layout2 mb-40">
              <h5 className="title-left-border text__block-title">Our Infrastructure</h5>
            </div>
          </div>
        </div>
        <div className="row">
          {infrastructureItems.map((item, index) => (
            <div className="col-sm-6 col-md-6 col-lg-4" key={index}>
              <div className="portfolio-item">
                <div className="portfolio__img">
                  <img src={item.image} alt="portfolio img" />
                </div>
                <div className="portfolio__body">
                  <h4 className="portfolio__title">
                    <Link to={item.link}>{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurInfrastructure;
