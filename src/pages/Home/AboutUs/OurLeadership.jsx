import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Banner from "../../../components/common/Banner";

const OurLeadership = () => {
  // const { leadership } = useParams(); 
  // console.log(leadership)
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const response = await fetch(`http://167.71.235.8/agcl/public/api/leadership`);
        if (!response.ok) {
          throw new Error("Failed to fetch leadership data");
        }
        const data = await response.json();
        console.log("Leadership Data", data);
        setLeaders(data.our_leadership || []);
      } catch (error) {
        console.error("Error fetching leader data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaders();
  }, []);

  if (loading) return <p>Loading leadership data...</p>;
  if (!leaders.length) return <p>No leaders found.</p>;

  const title = "Our Leadership";
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/Our Leadership" },
    { label: "Our Leadership", path: "/leadership" }
  ];

  return (
    <>
      <Banner title={title} breadcrumbs={breadcrumbs} />
      <section className="pt-70 who-we-are">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h5 className="title-left-border text__block-title">Board of Directors</h5>
            </div>
          </div>
          <div className="row row-no-gutter mt-10 leadership-card">
            <div className="profile-container">
              {leaders.map((leader, index) => (
                <div key={leader.id || `leader-${index}`} className={`profile-card ${index % 2 !== 0 ? "even" : ""}`}>
                  <div className="profile-image">
                    <img src={leader.image} alt={leader.name} loading="lazy" />
                  </div>
                  <div className="profile-text">
                    <div className="profile-title">{leader.name}</div>
                    <h6>{leader.designation}</h6>
                    <span>{leader.short_description}</span>
                    <div className="leadership-btn">
                      <a href="#" className="btn btn__white btn__white-style2 mt-20">
                        <FaArrowRight className="icon-filled icon-arrow-left" />
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurLeadership;
