import React from "react";

const ColorGridWhoWeAre = () => {
  const gridItems = [
    {
      title: "Our People Our Asset",
      image: "https://thehillstimes.in/wp-content/uploads/2022/08/Consumers-accuse-AGCL-of-poor-service-in-Margherita.jpg",
      height: "450px",
      points: [
        "6,500+ employees",
        "Labour Relations – structured programs to improve skill levels & morale",
        "Diversity & Inclusion - equal job opportunities & benefits, training and skill-building activities",
      ],
    },
    {
      title: "Strategic Expansion",
      image: "https://i0.wp.com/mahabahu.com/wp-content/uploads/2022/11/AGCL.jpg",
      height: "400px",
      points: [
        "Expansion into new regions",
        "Improved infrastructure for efficient distribution",
        "Sustainable growth strategies",
      ],
    },
    {
      title: "Creating Customer Delight",
      image: "https://assamgas.org/index_files/vlb_images1/27032024/registration/14.jpg",
      height: "300px",
      points: [
        "Enhanced customer service experience",
        "Quick response to customer concerns",
        "Innovation in service delivery",
      ],
    },
    {
      title: "Become an Employee Enabled Organization",
      image: "https://assamgas.org/index_files/vlb_images1/20032024/awareness/6.jpg",
      height: "380px",
      points: [
        "Empowering employees with training",
        "Encouraging leadership development",
        "Providing career growth opportunities",
      ],
    },
  ];

  return (
    <section className="pt-0 pb-0 who-we-are">
      <div className="container">
        <section className="the-grid">
          <ul>
            {gridItems.map((item, index) => (
              <li key={index}>
                <figure className="grid-item">
                  <a href="/">
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ 
                          width: "100%", 
                          height: item.height, 
                          objectFit: "cover" 
                        }}
                      />
                    </div>
                  </a>
                  <figcaption className="figcaption">
                    <h6>{item.title}</h6>
                    <ul>
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default ColorGridWhoWeAre;
