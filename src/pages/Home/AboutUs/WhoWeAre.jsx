import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Banner from "../../../components/common/Banner";
import Description from "../../../components/Description";
import CounterUp from "../../../components/homepage/CounterUp";
import VerticalList from "../../../components/VerticalList";
import OurInfrastructure from "../../../components/OurInfrastructure";

const WhoWeAre = () => {
  // const { whoweare } = useParams();
  // console.log(whoweare);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWhoWeAre = async () => {
      try {
        const response = await fetch(`http://167.71.235.8/agcl/public/api/who-we-are`);
        if (!response.ok) {
          throw new Error("Failed to fetch dataa");
        }
        const result = await response.json();
        console.log("Who We Are Data:", result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWhoWeAre();
  }, []);  // Add dependency in case params change

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const title = "Who We Are";
  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/who-we-are" },
    { label: "Who We Are", path: "/who-we-are" }
  ];

  return (
    <>
      <Banner title={title} breadcrumbs={breadcrumbs} backgroundImage={data?.banner} />
      <div className="pt-60 pb-60">
        <Description content={data?.content} />
      </div>
      <CounterUp />
      <VerticalList />
      <OurInfrastructure />
    </>
  );
};

export default WhoWeAre;










// import React from 'react';
// import Banner from '../../../components/common/Banner';
// import Description from '../../../components/Description';
// import CounterUp from '../../../components/homepage/CounterUp';
// import VerticalList from '../../../components/VerticalList';
// import OurInfrastructure from '../../../components/OurInfrastructure';

// const WhoWeAre = ({ data }) => {
//   console.log("Who we are", data.data)
//   const title = "Who We Are";
//   const breadcrumbs = [
//     { label: "Home", path: "/" },
//     { label: "About Us", path: "/who-we-are" },
//     { label: "Who We Are", path: "/who-we-are" }
//   ];
  
//   return (
//     <>
//       <Banner title={title} breadcrumbs={breadcrumbs} backgroundImage={data?.banner} />
//       <div className="pt-60 pb-60">
//         <Description content={data?.content} />
//       </div>
//       <CounterUp />
//       <VerticalList />
//       <OurInfrastructure />
//     </>
//   );
// };

// export default WhoWeAre;
