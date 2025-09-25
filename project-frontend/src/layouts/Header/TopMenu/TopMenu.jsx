import React, { useContext, useEffect, useRef, useState } from "react";
import {
  DownOutlined,
  MenuFoldOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import JWTContext from "../../../contexts/JWTContext";

const TopMenu = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const dropdownRef1 = useRef(null);
  
  const handleLogin = () => {
    navigate("/appointmentpage")
  };
   

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      )

      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target)
      ) {
        setDropdownOpen1(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="wrapper flex lg:justify-between w-full">
        <nav className="w-full">
          <input type="checkbox" id="show-menu" />
          <label htmlFor="show-menu" className="menu-icon">
            <MenuFoldOutlined className="text-subtitle1" />
          </label>
          
          <div className="nav-content">
            <ul className="links">
              <li>
                <Link to="/" onClick={() => setDropdownOpen(false)}>Home</Link>
              </li>
             <li>
                <Link className="desktop-link">
                  Treatments
                  <DownOutlined className="text-normaltext ml-2" />
                </Link>
                <input type="checkbox" id="show-services" />
                <label htmlFor="show-services">
                  Treatments
                  <DownOutlined className="text-normaltext ml-2" />
                </label>
                <ul className="subMenu">
                  <li>
                    <Link to="/our-services/braces-aligners">
                      <MinusOutlined className="dashIcons" />
                      BRACES & ALIGNERS
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/painless-root-canal">
                      <MinusOutlined className="dashIcons" />
                      PAINLESS ROOT CANAL
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/dental-implant">
                      <MinusOutlined className="dashIcons" />
                      DENTAL IMPLANT
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/denture">
                      <MinusOutlined className="dashIcons" />
                     DENTURE
                    </Link>
                  </li>
                   <li>
                    <Link to="/our-services/crowns-bridges">
                      <MinusOutlined className="dashIcons" />
                     CROWNS & BRIDGES
                    </Link>
                  </li>
                   <li>
                    <Link to="/our-services/full-mouth-reconstruction">
                      <MinusOutlined className="dashIcons" />
                     FULL MOUTH RECONSTRUCTION
                    </Link>
                  </li>
                   <li>
                    <Link to="/our-services/children-dentistry">
                      <MinusOutlined className="dashIcons" />
                     CHILDREN DENTISTRY
                    </Link>
                  </li>
                   <li>
                    <Link to="/our-services/teeth-whitening">
                      <MinusOutlined className="dashIcons" />
                     TEETH WHITENING
                    </Link>
                  </li>
                   <li>
                    <Link to="/our-services/veneer-componeers">
                      <MinusOutlined className="dashIcons" />
                     VENEER AND COMPONEERS
                    </Link>
                  </li>
                   <li>
                    <Link to="/our-services/tmj-disorder">
                      <MinusOutlined className="dashIcons" />
                     TMJ DISORDER
                    </Link>
                  </li>
                   <li>
                    <Link to="/our-services/fillings-inlays-and-onlays">
                      <MinusOutlined className="dashIcons" />
                     FILLINGS, INLAYS AND ONLAYS
                    </Link>
                  </li>
                    <li>
                    <Link to="/our-services/jaw-bone-regenration">
                      <MinusOutlined className="dashIcons" />
                    JAW BONE REGENERATION
                    </Link>
                  </li>
                    <li>
                    <Link to="/our-services/gum-disease">
                      <MinusOutlined className="dashIcons" />
                     GUM DISEASE TREATMENT
                    </Link>
                  </li>
                    <li>
                    <Link to="/our-services/gum-depigmentation-and-gum-contouring">
                      <MinusOutlined className="dashIcons" />
                     GUM DEPIGMENTATION AND GUM CONTOURING
                    </Link>
                  </li>
                    <li>
                    <Link to="/our-services/gum-repositioning-surgery">
                      <MinusOutlined className="dashIcons" />
                     GUM REPOSITIONING SURGERY
                    </Link>
                  </li>
                    <li>
                    <Link to="/our-services/flouride-treatment">
                      <MinusOutlined className="dashIcons" />
                     FLOURIDE TREATMENT
                    </Link>
                  </li>
                    <li>
                    <Link to="/our-services/teeth-straightening">
                      <MinusOutlined className="dashIcons" />
                     TEETH STRAIGHTENING
                    </Link>
                  </li>
                    <li>
                    <Link to="/our-services/jaw-growth-guidance">
                      <MinusOutlined className="dashIcons" />
                     JAW GROWTH GUIDANCE
                    </Link>
                  </li>
                    <li>
                    <Link to="/our-services/orthognathic-surgery">
                      <MinusOutlined className="dashIcons" />
                    ORTHOGNATHIC SURGERY
                    </Link>
                  </li>
                    <li>
                    <Link to="/our-services/habit-breaking-appliances">
                      <MinusOutlined className="dashIcons" />
                     HABIT BREAKING APPLIANCES
                    </Link>
                  </li>
                    <li>
                    <Link to="/our-services/preventive-sealants">
                      <MinusOutlined className="dashIcons" />
                     PREVENTIVE SEALANTS
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/" onClick={() => setDropdownOpen(false)}>About us</Link>
              </li>
              <li>
                <Link to="/" onClick={() => setDropdownOpen(false)}>Gallery</Link>
              </li>
               <li>
                <Link to="/contactus" onClick={() => setDropdownOpen(false)}>Contact Us</Link>
              </li>

              {/* Mobile View Login Buttons - Hidden on Large Screens */}
              <li className="block lg:!hidden">
                <div className="space-y-1 mt-4 ml-3 mb-2" style={{width: "90%"}}>
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    onClick={handleLogin}
                    className="btnStyle roundedBtn"
                  >
                   Book An Appointment
                  </Button>

                 
                  </div>
                  {/* <div className="ml-3" style={{width: "90%"}}>
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    onClick={() => navigate("/project")}
                    className="btnStyle roundedBtn"
                  >
                    Book 
                  </Button>
                </div> */}
              </li>
            </ul>

            {/* Desktop View Login Buttons - Hidden on Small Screens */}
            <ul className="hidden lg:flex space-x-4 items-center z-10">
              <li className="relative">
                <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    onClick={handleLogin}
                    className="btnStyle roundedBtn"
                >
                  Book An Appointment
                </Button>
              </li>
              <li>
                {/* <Button
                  variant="contained"
                  color="success"
                  size="small"
                  onClick={() => navigate("/project")}
                  className="btnStyle roundedBtn"
                >
                  Book
                </Button> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default TopMenu;
