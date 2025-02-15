import React from 'react';
import Banner from '../../../components/common/Banner';
import Description from '../../../components/Description';
import CounterUp from '../../../components/homepage/CounterUp';
import VerticalList from '../../../components/VerticalList';
import OurInfrastructure from '../../../components/OurInfrastructure';

const WhoWeAre = ({ data }) => {
  console.log("Who we are", data.data)
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
