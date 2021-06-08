import React from "react";
import icon from "../../Images/supporter1.png"

const AboutCard = () => {
    return (
        <>
            <div className="About-Card_edaNDK">
                <div className="icon">
                    <img src={icon} alt="" />
                </div>
                <h3 className="card-title">Pre-Launch Raising</h3>
                <p className="text-secondary card-text-A943Ssh">
                    We enable projects to raise funds until they have a contract that can be deployed. Developers can confidently support the related costs involved in the project by using our Token Vouchers.
                </p>
            </div>
        </>
    );
};

export default AboutCard;
