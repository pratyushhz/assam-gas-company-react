import React from 'react'
import Banner from '../../../components/common/Banner'
import Description from '../../../components/Description';


const WhoWeAre = () => {

  const title ="Who We Are";
  const breadcrumbs = [
    {
      label:"Home",
      path:"/"
    },
    {
      label:"About Us",
      path:"/whoweare"
    },
    {
      label:"Who We Are",
      path:"/whoweare"
    }

  ];
  const backgroundImage = "https://i0.wp.com/cgdindia.net/wp-content/uploads/2021/02/shutterstock_588495665-1-scaled.jpg?fit=2560%2C1707&ssl=1";

  // Description data
  const descriptionData = {
    title: "Our Mission",
    paragraphs: [
      "Assam Gas Company Ltd., a Govt. of Assam Undertaking was incorporated on March 31,1962 in Shillong as a limited company wholly owned by the Government of Assam to carry out all kinds of business related to natural gas in India. The first gas transportation business started in the year 1967 with supply of natural gas to Namrup Thermal Power Station of ASEB. Subsequently, the company grew from strength to strength and stands today as one of the premier natural gas distribution companies in India.",
      "Assam Gas Company Ltd. has a network of underground natural gas trunk and distribution pipelines that serves about 500+ industrial consumers, 1200+ commercial establishments and about 50,000+ domestic consumers in the districts of Tinsukia, Dibrugarh, Sivasagar, Charaideo, Jorhat, Golaghat and Majuli in Assam. It has its present headquarters in the oil town of Duliajan in the district of Dibrugarh,Assam,India. The Company has a capacity to transport over 5.5 MMSCMD of natural gas. Over the years AGCL has established branch offices in 12 (twelve) different locations in Assam.",
      "Received ISO certification in the year 2000 subsequently upgraded to ISO 9001:2008 in the year 2010. The company received two new certifications namely Environment Management System (ISO 14001: 2015) & Occupational Health Safety Management System (ISO 45001: 2018) along with the upgradation of Quality Management System (ISO 9001: 2015) in the year 2024."
    ]
  };

  return (
    <>
      <Banner title={title} breadcrumbs={breadcrumbs} backgroundImage={backgroundImage}/>
      <div className="pt-60 pb-60">
          <Description title={descriptionData.title} paragraphs={descriptionData.paragraphs}/>
      </div>
    </>
  )
}

export default WhoWeAre
