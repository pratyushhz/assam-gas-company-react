import { useEffect, useState } from "react";

const useFetchHomeAPI = () => {
  const [verticals, setVerticals] = useState([]);
  const [subverticals, setSubverticals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://167.71.235.8/agcl/public/api/home")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.verticals) {
          // Extract verticals only
          const verticalData = data.verticals.map((vertical) => ({
            id: vertical.id,
            title: vertical.name.replace("/", ""),
            shortDescription: vertical.short_description || "No short description available",
            longDescription: vertical.long_description || "No long description available",
            image: `http://167.71.235.8/agcl/public/${vertical.image}`,
            link: `/vertical/${vertical.slug}`,
          }));

          // Extract subverticals separately
          const subverticalData = data.verticals.flatMap((vertical) =>
            (vertical.subverticals || []).map((sub) => ({
              id: sub.id,
              title: sub.name.replace("/", ""),
              shortDescription: sub.short_description || "No short description available",
              longDescription: sub.long_description || "No long description available",
              image: `http://167.71.235.8/agcl/public/${sub.image}`,
              link: sub.link || `/vertical/${vertical.slug}/${sub.slug}`,
            }))
          );

          setVerticals(verticalData);
          setSubverticals(subverticalData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { verticals, subverticals, loading, error };
};

export default useFetchHomeAPI;
