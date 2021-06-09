import React from "react";
import PackageCard from "../../Components/PackageCard/PackageCard";

const ChooseRightPackage = () => {
  return (
    <section id="Subscriptions">
      <div className="title p-4 text-center">
        <p className="fw-bolder text-secondary mb-1">TIER PACKAGE</p>
        <h1 className="fw-bolder">Choose the right pacakge for you</h1>
      </div>

      <div className="package-all-card the-gradient-boxes container pt-2 mb-0 pb-0">
        <PackageCard className=" first-box" />
        <PackageCard className=" second-box" />
        <PackageCard className=" third-box" />
      </div>
      <div className="container the-gradient-boxes second mb-0 pb-0 pt-1 ">
        <PackageCard className=" fourth-box" />
        <PackageCard className=" fifth-box" />
      </div>
      <div className="container the-gradient-boxes pt-1  third">
        <PackageCard className=" sixth-box" />
        <PackageCard className=" seventh-box" />
      </div>
    </section>
  );
};

export default ChooseRightPackage;
