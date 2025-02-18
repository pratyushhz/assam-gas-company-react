import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { section } from 'framer-motion/client';

const VentureList = () => {
  const [ventures, setVentures] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "http://167.71.235.8/agcl/public/"; // Ensure this is correct

  useEffect(() => {
    const fetchVentures = async () => {
      try {
        const response = await fetch("http://167.71.235.8/agcl/public/api/new-page/1/27/null");
        const data = await response.json();
        setVentures(data.json_content);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVentures();
  }, []);

  return (
    <section className="pt-60 who-we-are">
        <div className="row row-no-gutter mt-10 leadership-card">
            <div className="container">
                <div className="profile-container">
                    {loading ? (
                    <p>Loading ventures...</p>
                    ) : ventures.length > 0 ? (
                    ventures.map((venture, index) => (
                        <div key={venture.key || `venture-${index}`} className={`profile-card ${index % 2 !== 0 ? "even" : ""}`} style={{alignItems:"flex-start"}}>
                        <div className="profile-image">
                            <img src={`${BASE_URL}${venture.item_image}`} alt={venture.item_name} loading="lazy" style={{objectFit:"contain"}}/>
                        </div>
                        <div className="profile-text">
                            <div className="profile-title">{venture.item_name}</div>
                            {/* <h6>{venture.item_link !== "null" ? <a href={venture.item_link}>{venture.item_name}</a> : venture.item_name}</h6> */}
                            <span>{venture.item_description}</span>
                            <div className="leadership-btn">
                            {/* <Link to={`/venture/${venture.key}`} className="btn btn__white btn__white-style2 mt-20">
                                <FaArrowRight className="icon-filled icon-arrow-left" />
                                <span>Read More</span>
                            </Link> */}
                            </div>
                        </div>
                        </div>
                    ))
                    ) : (
                    <p>No ventures available.</p>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default VentureList;
