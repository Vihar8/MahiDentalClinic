import React, { useContext, useEffect, useRef, useState } from "react";
import {
  ClockCircleOutlined,
  DownOutlined,
  MenuFoldOutlined,
  MinusOutlined,
  MobileOutlined,
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

              {/* TOP BAR (Desktop Only) */}
              <li className="bg-white border-b py-1">
                <div className="max-w-7xl mx-auto flex flex-row md:flex-col xl:flex-col 2xl:flex-row justify-between items-center px-4 gap-2">

                  {/* Phone Section */}
                  <div className="flex items-center gap-2">
                    <MobileOutlined className="text-[#88b121] text-xl" />
                    <div className="text-xs leading-tight">
                      <p className="text-gray-900 uppercase text-[10px]">Call us today!</p>
                      <p className="text-black font-bold text-sm">9978914926</p>
                    </div>
                  </div>

                  {/* Timing Section
                  // <div className="flex items-center gap-2">
                  //   <ClockCircleOutlined className="text-[#88b121] text-xl" />
                  //   <div className="text-xs leading-tight">
                  //     <p className="text-gray-900 uppercase text-[10px]">We are open!</p>
                  //     <p className="font-medium text-black text-sm">
                  //       <span className="font-bold">Mon-Sat</span> 9:30 - 7:00
                  //     </p>
                  //   </div>
                  // </div> */}

                  {/* Timing Section */}
                  <div className="flex items-center gap-1 px-3 py-2 bg-[#f5f9ef] rounded-lg flex-wrap sm:flex-nowrap">
                    <ClockCircleOutlined className="text-[#88b121] text-xl" />

                    <div className="text-xs leading-tight">
                      <p className="text-gray-900 uppercase text-[10px] tracking-wide font-semibold">
                        We are open!
                      </p>
                      <p className="font-medium text-black text-sm whitespace-nowrap">
                        <span className="font-bold">Mon–Sat</span> 9:30 – 7:00
                      </p>
                    </div>
                  </div>

                </div>
              </li>

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
                    <Link to="/our-services/braces-aligners" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      BRACES & ALIGNERS
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/painless-root-canal" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      PAINLESS ROOT CANAL (SINGLE SITTING)
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/dental-implant" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      DENTAL IMPLANT
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/denture" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      DENTURE
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/crowns-bridges" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      CROWNS & BRIDGES
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/full-mouth-reconstruction" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      FULL MOUTH RECONSTRUCTION
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/children-dentistry" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      CHILDREN DENTISTRY
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/teeth-whitening" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      TEETH WHITENING
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/veneer-componeers" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      VENEER AND COMPONEERS
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/tmj-disorder" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      TMJ DISORDER
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/fillings-inlays-and-onlays" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      FILLINGS, INLAYS AND ONLAYS
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/jaw-bone-regenration" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      JAW BONE REGENERATION
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/gum-disease" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      GUM DISEASE TREATMENT
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/gum-depigmentation-and-gum-contouring" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      GUM DEPIGMENTATION AND GUM CONTOURING
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/gum-repositioning-surgery" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      GUM REPOSITIONING SURGERY
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/flouride-treatment" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      FLOURIDE TREATMENT
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/teeth-straightening" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      TEETH STRAIGHTENING
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/jaw-growth-guidance" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      JAW GROWTH GUIDANCE
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/orthognathic-surgery" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      ORTHOGNATHIC SURGERY
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/habit-breaking-appliances" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      HABIT BREAKING APPLIANCES
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-services/preventive-sealants" onClick={() => setDropdownOpen(false)}>
                      <MinusOutlined className="dashIcons" />
                      PREVENTIVE SEALANTS
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/aboutus" onClick={() => setDropdownOpen(false)}>About us</Link>
              </li>
              <li>
                <Link to="/gallerypage" onClick={() => setDropdownOpen(false)}>Gallery</Link>
              </li>
              <li>
                <Link to="/contactus" onClick={() => setDropdownOpen(false)}>Contact Us</Link>
              </li>

              {/* Mobile View Login Buttons - Hidden on Large Screens */}
              <li className="block lg:!hidden">
                <div className="space-y-1 mt-4 ml-3 mb-2" style={{ width: "90%" }}>
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