import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PolistarterLogo from '../../Images/polistarterLogo.png';
import "./Footer.css"

const Footer = () => {
  return (
    <div id="footer-part">
      <footer className="main-page-footer">
        <div className="bamer-side">
          <div className="ufrer-jaga">
            <div className="logo-and-txt">
              <img src={PolistarterLogo} alt="" />
            </div>
          </div>
          <div className="niser-jaga">
            <p className="text-light">
              &copy; 2021 by
              <span>
                <b classNameName="mx-2">PolyStarter</b>
              </span>
              . All Rights Reserved
            </p>
          </div>
        </div>

        <div className="daner-jaga">
          <div className="ufrer-ordhek">
            <div className="contact-lekha">
              <h4>Contact Us</h4>
            </div>
            <div className="upor-nis-emails">
              <div className="email">
                <p>copy@email.com</p>
              </div>
              <div className="email">
                <p>info@emal.com</p>
              </div>
            </div>
          </div>

          <div className="niser-ordhek">
            <div className="coin-gesko">
              <p>CoinGesko &#8599;</p>
            </div>
            <div className="icons">
              <div className="icon">
                <p>M</p>
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faTelegram} />
              </div>
              <div className="icon">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
