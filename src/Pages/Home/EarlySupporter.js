import React from "react";
import AboutCard from "../../Components/AboutCard/AboutCard";

const EarlySupporter = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="p-5"></div>
                <div className="row">
                    <div className="col-lg-5 title ps-4">
                        <div style={{width:"300px"}}>
                            <p className="text-secondary fw-bold light">A LAUNCHPAD FOR</p>
                            <h1 className="fw-bold">
                                Early  <span className="theme-text d-inline-block d-md-block">Supporter</span>
                            </h1>
                            <p className="pt-2 pt-md-4 small text-secondary fw-bold">
                                Launch Pads and accelerators can be a perfect way for verified and trustworthy projects to get early funding, as well as for contributors to get early access to polygon projects.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            {[1, 4, 5, 3].map((card) => {
                                return (
                                    <>
                                        <div className="col-md-6 mb-5">
                                            <AboutCard />
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EarlySupporter;
