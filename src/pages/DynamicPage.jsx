import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://167.71.235.8/agcl/public/api/pages";

function DynamicPage() {
  const { section, slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        console.log("API Response:", result);
        console.log("Section:", section, "Slug:", slug);

        // Find the page data matching the section and slug
        const pageData = result.find(page => page.section === section && page.slug === slug);
        setData(pageData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [section, slug]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Page not found</p>;

  return (
    
    <div className="dynamic-page">


      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
}

export default DynamicPage;
