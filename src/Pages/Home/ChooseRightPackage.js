import React from "react";
import PackageCard from "../../Components/PackageCard/PackageCard";

const ChooseRightPackage = () => {
  return (
    <section id="Subscriptions">
      <div className="title p-5 text-center">
        <p className="fw-bolder text-secondary">TIER PACKAGE</p>
        <h1 className="fw-bolder">Choose the right pacakge for you</h1>
      </div>

      <div className="package-all-card the-gradient-boxes container">
        <PackageCard className=" first-box" />
        <PackageCard className=" second-box" />
        <PackageCard className=" third-box" />
      </div>
      <div className="container the-gradient-boxes second ">
        <PackageCard className=" fourth-box" />
        <PackageCard className=" fifth-box" />
      </div>
      <div className="container the-gradient-boxes  third">
        <PackageCard className=" sixth-box" />
        <PackageCard className=" seventh-box" />
      </div>
    </section>
  );
};

export default ChooseRightPackage;
