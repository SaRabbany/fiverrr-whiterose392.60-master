import React from "react";
import illustration from "../../Images/banner-min--illustration.png"

const HeaderSection = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <h1>
                        {" "}
                        <span className="theme-text">PolyStarter </span> is a fully decentralised project accelerator for polygon.
                    </h1>
                    <p className="pt-4 text-secondary text-center fw-bold">PolyStarter is a decentralized accelerator specialized in Polygon (MATIC) based project development.</p>
                    <div className="buttons text-center">
                        <button className=" theme-btn">Get PORL</button>
                        <button className=" theme-btn ms-3">White Paper</button>
                    </div>
                    <div className="banner-illustration text-center mt-3">
                        <img className="w-100 mb-3" src={illustration} alt="" />
                    </div>
                </div>

            </header>
        </>
    );
};

export default HeaderSection;
