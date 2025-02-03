import { useEffect, useState } from "react";

const useFetchHomeAPI = () => {
  const [verticals, setVerticals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://167.71.235.8/agcl/public/api/home")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.verticals) {
          const formattedData = data.verticals.flatMap((vertical) => {
            const subverticals = vertical.subverticals || [];
            return [
              {
                id: vertical.id,
                title: vertical.name.replace("/", ""),
                description: vertical.short_description || "No description available",
                image: `http://167.71.235.8/agcl/public/${vertical.image}`,
                link: `/vertical/${vertical.slug}`,
              },
              ...subverticals.map((sub) => ({
                id: sub.id,
                title: sub.name.replace("/", ""),
                description: sub.short_description || "No description available",
                image: `http://167.71.235.8/agcl/public/${sub.image}`,
                link: sub.link || `/vertical/${vertical.slug}/${sub.slug}`,
              })),
            ];
          });
          setVerticals(formattedData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { verticals, loading, error };
};

export default useFetchHomeAPI;
