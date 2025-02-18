import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VentureDetail = () => {
  const { id } = useParams();
  const [venture, setVenture] = useState(null);

  useEffect(() => {
    fetch(`http://167.71.235.8/agcl/public/api/new-page/${id}/27/null`)
      .then((res) => res.json())
      .then((data) => setVenture(data))
      .catch((error) => console.error("Error fetching detail:", error));
  }, [id]);

  if (!venture) return <p>Loading venture details...</p>;

  return (
    <section className="venture-detail">
      <div className="container">
        <div className="services-img">
          <img src={venture.image} alt={venture.title} />
        </div>
        <div className="content">
          <h2>{venture.title}</h2>
          <p>{venture.description}</p>
        </div>
      </div>
    </section>
  );
};

export default VentureDetail;
