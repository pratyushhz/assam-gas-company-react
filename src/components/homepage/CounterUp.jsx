import React, { useEffect, useState } from "react";

const CounterUp = () => {
  const [counters, setCounters] = useState(null);

  useEffect(() => {
    fetch("http://167.71.235.8/agcl/public/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.counter)
        setCounters([
          { value: data.counter.industrial_consumers, unit: "+", description: "Industrial consumers" },
          { value: data.counter.commercial_establishments, unit: "+", description: "Commercial establishments" },
          { value: data.counter.domestic_consumers, unit: "K+", description: "Domestic consumers" },
          { value: data.counter.retail_outlet, unit: "+", description: "Retail Outlet" },
        ]);
      })
      .catch((error) => console.error("Error fetching counter data:", error));
  }, []);

  if (!counters) {
    return <p>Loading...</p>;
  }

  return (
    <section className="counters pt-0 pb-60">
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div className="col-6 col-sm-3" key={index}>
              <div className="counter-item">
                <div className="counter-div">
                  <h4 className="counter">{counter.value}</h4>
                  <span>{counter.unit}</span>
                </div>
                <p className="counter__desc">{counter.description}</p>
                <div className="divider__line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterUp;
