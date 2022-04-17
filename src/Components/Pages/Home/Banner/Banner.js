import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container text-white">
        <div className="row">
          <div className="col-7 py-5">
            <div className="mt-5 py-5">
            <h1 className="font-weight-bold py-5">What is the duties <br /> of gym trainer?</h1>
            <p>
              A Fitness Trainer creates tailored  fitness and wellness<br /> plans for
              individuals and groups. They assign exercise<br /> routines based on
              clients' physical needs and monitor their progress.
            </p>
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
