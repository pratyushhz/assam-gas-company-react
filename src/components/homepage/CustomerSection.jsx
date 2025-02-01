import React from "react";
import CustomerServices from "../CustomerServices";
import CustomerUpdates from "../CustomerUpdates";


const CustomerSection = () => {
  return (
    <section className="fancybox-layout1 pt-0 customer-service-section-2">
      <div className="container">
        <div className="row">
            <CustomerUpdates/>
            <CustomerServices/>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
