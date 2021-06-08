import React, { useEffect } from "react";
import togglerIcon from "../../Images/toggler-icon.svg"
import CancelerIcon from "../../Images/times-navbar-clouser-icon.svg"
import "./style.css"

const Navbar = () => {

    useEffect(()=> {
        const NavbarContent = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content");
        const navbarToggleIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-nav-toggle-btn");
        const navbarCloserIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content .hnazmul-navbar-content-wrapper button.navbar-closer-icon");

        navbarToggleIcon?.addEventListener("click", () => {
            NavbarContent.classList.toggle("navbar-show");
        });
        navbarCloserIcon?.addEventListener("click", () => {
            NavbarContent.classList.toggle("navbar-show");
        });

    },[])


    return (
        <div>
            <nav className="hnazmul-navbar">
                <div className="hnazmul-navbar-container">
                    <div className="hnazmul-nav-brand">
                        <h4>Navbar brand</h4>
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
                                    <a href="#" className="navbar-list-link">
                                        Home
                                    </a>
                                </li>
                                <li className="navbar-list-item">
                                    <a href="#" className="navbar-list-link">
                                        Feature
                                    </a>
                                </li>
                                <li className="navbar-list-item">
                                    <a href="#" className="navbar-list-link">
                                        Pricing
                                    </a>
                                </li>
                                <li className="navbar-list-item">
                                    <a href="#" className="navbar-list-link">
                                        About
                                    </a>
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
