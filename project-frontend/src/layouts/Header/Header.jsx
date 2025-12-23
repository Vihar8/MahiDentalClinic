import React from "react";
import mahi_dental_logo from "/assets/mahi_dental_logo.jpg";
import classes from "./Header.module.scss";
import Container from "../../commoncomponents/Container/Container";
import TopMenu from "./TopMenu/TopMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`${classes.header}`}>
      <div className={`${classes.headerSeparate}`}>
        <Container classname={`${classes.containDivide}`}>
          <Link to="/">
            <img
              className={`${classes.mainlogos}`} 
              alt="Logo"
              src={mahi_dental_logo}
            />
          </Link>

          <div className={`${classes.rightSection}`}>
            <TopMenu />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
