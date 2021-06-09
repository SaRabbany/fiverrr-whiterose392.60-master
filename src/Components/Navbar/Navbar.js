import React, { useEffect } from "react";
import togglerIcon from "../../Images/toggler-icon.svg"
import CancelerIcon from "../../Images/times-navbar-clouser-icon.svg"
import "./style.css"
import {  NavHashLink } from "react-router-hash-link";
import polistarterLogo from '../../Images/logo2222.png';

const Navbar = () => {

    useEffect(()=> {
        const NavbarContent = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content");
        const navbarToggleIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-nav-toggle-btn");
        const navbarCloserIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content .hnazmul-navbar-content-wrapper button.navbar-closer-icon");

        navbarToggleIcon?.addEventListener("click", () => {
          console.log("i am clicking")
            NavbarContent.classList.add("navbar-show");
        });
        console.log(navbarToggleIcon)
        NavbarContent?.addEventListener("click", () => {
          NavbarContent.classList.remove("navbar-show")
        })
        navbarCloserIcon?.addEventListener("click", (e) => {
            e.preventDefault()
            NavbarContent.classList.remove("navbar-show");
            console.log("i am cllicking")
        });

        console.log(navbarCloserIcon)

    },[])


    return (
      <div>
        <nav className="hnazmul-navbar">
          <div className="hnazmul-navbar-container">
            <div className="hnazmul-nav-brand">
              <img src={polistarterLogo} alt="" />
            </div>
            <div className="hnazmul-nav-toggle-btn">
              <button>
                <img className="toggler-btn" src={togglerIcon} alt="" />
              </button>
            </div>

            <div className="hnazmul-navbar-content">
              <div className="hnazmul-navbar-content-wrapper">
                <ul className="navbar-list">
                  <li className="navbar-list-item">
                    <NavHashLink to="/#header" className="navbar-list-link">
                      Home
                    </NavHashLink>
                  </li>
                  <li className="navbar-list-item">
                    <NavHashLink to="/#about" className="navbar-list-link">
                      About
                    </NavHashLink>
                  </li>
                  <li className="navbar-list-item">
                    <NavHashLink to="/#feature" className="navbar-list-link">
                      Subscriptions
                    </NavHashLink>
                  </li>
                  <li className="navbar-list-item">
                    <NavHashLink to="/" className="navbar-list-link">
                      Feature
                    </NavHashLink>
                  </li>
                  <li className="navbar-list-item">
                    <NavHashLink to="/#tokenomics" className="navbar-list-link">
                      Tokenomics
                    </NavHashLink>
                  </li>
                  <li className="navbar-list-item">
                    <NavHashLink to="/#FAQs" className="navbar-list-link">
                      FAQs
                    </NavHashLink>
                  </li>
                  <li className="navbar-list-item">
                    <NavHashLink to="/#FAQs" className="navbar-list-link">
                      <button className="theme-btn">Go To app</button>
                    </NavHashLink>
                  </li>
                </ul>
                <button className="navbar-closer-icon">
                  <img className="navbar-closer" src={CancelerIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="p-5"></div>
      </div>
    );
};

export default Navbar;
