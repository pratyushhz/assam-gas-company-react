// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import WhoWeAre from "../pages/Home/AboutUs/WhoWeAre";
// import OurLeadership from "../pages/Home/AboutUs/OurLeadership";

// const DynamicPage = () => {
//   const { urlTitle } = useParams();
//   console.log(urlTitle)
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://167.71.235.8/agcl/public/api/${urlTitle}`);
//         if (!response.ok) throw new Error("Failed to fetch data");

//         const json = await response.json();
//         console.log(`${urlTitle} API response:`, json);
//         setData(json);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [urlTitle]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   if (urlTitle === "who-we-are") return <WhoWeAre data={data} />;
//   if (urlTitle === "leadership") return <OurLeadership data={data} />;

//   return <p>Page not found</p>;
// };

// export default DynamicPage;
