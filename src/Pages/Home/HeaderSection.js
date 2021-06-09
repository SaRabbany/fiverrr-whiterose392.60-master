import React from "react";
import illustration from "../../Images/banner-min--illustration.png"
import DotsImage from "../../Images/Dots.png"

const HeaderSection = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <h1>
                        {" "}
                        <span className="theme-text">PolyStarter </span> is a fully decentralised project accelerator for polygon.
                    </h1>
                    <p className="pt-4 text-secondary text-start text-md-center fw-bold">PolyStarter is a decentralized accelerator specialized in Polygon (MATIC) based project development.</p>
                    <div className="buttons  text-start text-lg-center">
                        <button className=" btn-sm theme-btn">Get PORL</button>
                        <button className="btn-sm theme-btn-black ms-3">White Paper</button>
                    </div>
                    <div className="banner-illustration text-center mt-3">
                        <img className="w-100 mb-3" src={illustration} alt="" />
                    </div>
                </div>

                    <img src={DotsImage} className="dots-image" alt="" />
                    <img src={DotsImage} className="dots-image-2" alt="" />
            </header>
        </>
    );
};

export default HeaderSection;
