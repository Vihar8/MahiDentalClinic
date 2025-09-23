import React from "react";
import { Link } from "react-router-dom";
import classes from "../Footer.module.scss";
import { Facebook, Instagram } from "lucide-react";

const NavigationMenu = () => {
  const navMenu = [
    { id: 1, to: "/contactus", label: "Contact Us" },
    { id: 2, to: "/", label: "Terms & Conditions" },
    { id: 3, to: "/", label: "Privacy Policy" },
    // { id: 3, to: "/", label: "Policy Update" },
    // { id: 10, to: "/", label: "Campaigns" },
    // { id: 12, to: "/", label: "Terms & Conditions" },
  ];

  // const navQuick = [
  //   { id: 1, to: "/", label: "Links-1" },
  //   { id: 2, to: "/", label: "Links-2" },
  //   { id: 3, to: "/", label: "Links-3" },
  // ];

  // Split the menu into two columns
  const firstColumn = navMenu.slice(0, 7); // ids 1 to 7
  const secondColumn = navMenu.slice(7); // ids 7 and beyond

  return (
    <div className={`${classes.navmenuDivide}`}>
      {/* <div className={`${classes.footerDivide}`}>
        {firstColumn.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            className={`${classes.navigateMenu}`}
          >
            {link.label}
          </Link>
        ))}
      </div> */}

      {/* <div className={`${classes.footerDivide}`}>
        {secondColumn.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            className={`${classes.navigateMenu}`}
          >
            {link.label}
          </Link>
        ))}
      </div> */}
       <div className={`${classes.footerDivide}`}>
      <h4 className={`${classes.footerHeading} !mb-2`}>Quick links</h4>
        {firstColumn.map((link) => (
          <Link
            key={link.id}
            to={link.to}
            className={`${classes.navigateMenu}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
         <div className="space-y-2">
        <h4 className={`${classes.footerHeading} !mb-2`}>Follow Us</h4>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/people/Mahi-Dental-Clinic/61576158135775/#"
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes.navigateMenu}`}
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/reel/DKejM3VIpeu/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes.navigateMenu}`}
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
</div>

      {/* <div>
        <h4 className={`${classes.footerHeading} !mb-2`}>Quick links</h4>
        <div className={`${classes.footerDivide}`}>
          {firstColumn.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className={`${classes.navigateMenu}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default NavigationMenu;
