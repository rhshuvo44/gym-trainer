import React from "react";
import xcat1 from '../../../Images/xcat1.png';
import xcat2 from '../../../Images/xcat2.png';
import Train from "../Train/Train";

const Training = () => {
  const training = [
    {
      id: 1,
      name: "PERSONAL TRANING",
      body: "You’ll look at graphs and charts in Task One, how to approach the task and the language needed for a successful answer.",
      img: `${xcat1}`,
    },
    {
      id: 2,
      name: "GROUP TRANING",
      body: "You’ll look at graphs and charts in Task One, how to approach the task and the language needed for a successful answer.",
      img: `${xcat2}`,
    },
  ];
  return (
    <div className="container py-5">
      <h2>Our Training</h2>
      <div className="row">
          {
              training.map(train=><Train key={train.id} train={train}></Train>)
          }
      </div>
    </div>
    
  );
};

export default Training;
