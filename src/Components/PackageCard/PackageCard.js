import React from "react";

const PackageCard = ({className}) => {
  return (
    <div>
      <div class={`the-gradient-box ${className}`}>
        <div class="first-block">
          <div class="small-line">
            <b>BRONZE</b>
          </div>
          <div class="first-block-title">
            <h2>100 POLR</h2>
          </div>
        </div>

        <div class="second-block">
          <div class="the-second-title">
            <h3>9 DAYS</h3>
          </div>

          <div class="second-block-middle">
            <div class="small-line">
              <b>LOTTERY</b>
            </div>
            <div class="the-third-title">
              <h4>WHITE LIST ALLOCATION</h4>
            </div>
            <div class="small-line">
              <b>lIKE, COMENT, TWEET</b>
            </div>
          </div>

          <div class="small-line">
            <b>POOL WEIGHT</b>
          </div>

          <div class="the-number">
            <h2>x0.1</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
