import React from "react";
import xteam1 from "../../../Images/xteam1.png";
import xteam2 from "../../../Images/xteam2.png";
import xteam3 from "../../../Images/xteam3.png";
import Service from "../Service/Service";


const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "body building",
      body: "You’ll look at graphs and charts in Task One, how to approach the task",
      price: "500",
      img: `${xteam1}`,
    },
    {
      id: 2,
      name: "Muscle Gain",
      body: "You’ll look at graphs and charts in Task One, how to approach the task",
      price: "600",
      img: `${xteam2}`,
    },
    {
      id: 3,
      name: "Weight Loss",
      body: "You’ll look at graphs and charts in Task One, how to approach the task",
      price: "400",
      img: `${xteam3}`,
    },
  ];
  return <div className="container py-5">
      <h1 className="mb-3">Our Services</h1>
     <div className="row">
     {
          servicesData.map(service=><Service key={service.id} service={service}></Service>)
      }
     </div>
  </div>;
};

export default Services;
