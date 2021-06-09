import React from "react";

const PackageCard = ({className}) => {
  return (
    <div>
      <div className={`the-gradient-box ${className}`}>
        <div className="first-block">
          <div className="small-line">
            <b>BRONZE</b>
          </div>
          <div className="first-block-title">
            <h2>100 POLR</h2>
          </div>
        </div>

        <div className="second-block">
          <div className="the-second-title">
            <h3>9 DAYS</h3>
          </div>

          <div className="second-block-middle">
            <div className="small-line">
              <b>LOTTERY</b>
            </div>
            <div className="the-third-title">
              <h4>WHITE LIST ALLOCATION</h4>
            </div>
            <div className="small-line">
              <b>lIKE, COMENT, TWEET</b>
            </div>
          </div>

          <div className="small-line">
            <b>POOL WEIGHT</b>
          </div>

          <div className="the-number">
            <h2>x0.1</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
