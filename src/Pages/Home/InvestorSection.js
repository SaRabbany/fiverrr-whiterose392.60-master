import React from "react";
import investorImg1 from "../../Images/inverstor1.png";
import investorImg2 from "../../Images/investor2.png";
import investorImg3 from "../../Images/investor3.png";
import investorImg4 from "../../Images/investor4.png";
import investorImg5 from "../../Images/investor5.png";
import investorImg6 from "../../Images/investor6.png";

const InvestorSection = () => {
  return (
    <section id="investor_section" className="mt-5">
      <div className="title p-4 container text-center">
        <p className=" fw-md text-secondary mb-0">Investor</p>
        <h1 className="fw-bolder">Investor</h1>
      </div>
      <div className="logo-section">
        <div className="DSfmslfosmff mx-auto">
          <div className="logos pb-1">
            <div className="logo nai-ha">
              <img src={investorImg1} alt="" />
            </div>
            <div className="logo sudu-nai">
              <img src={investorImg2} alt="" />
            </div>
            <div className="logo">
              <img src={investorImg5} alt="" />
            </div>

            <div className="logo">
              <img src={investorImg4} alt="" />
            </div>
            <div className="logo">
              <img src={investorImg3} alt="" />
            </div>
            <div className="logo">
              <img src={investorImg6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
