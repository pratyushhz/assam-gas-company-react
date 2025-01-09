import React from 'react';

const CounterUp = () => {
  const counters = [
    { value: 500, unit: "+", description: "Industrial consumers" },
    { value: 1200, unit: "+", description: "Commercial establishments" },
    { value: 50, unit: "K+", description: "Domestic consumers" },
    { value: 100, unit: "+", description: "Retail Outlet" },
  ];

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
