import React, { Fragment } from "react";
import { Container } from "reactstrap";
import "./home.scss";

const Header = () => {
  return (
    <Fragment>
      <div className="header-root">
        <Container>
          <div className="main-div">
            <div className="logo-div">
              Synergy
              <br />
              <span>Safety</span>
            </div>
            <div className="tabs-div">
              <span>Home</span>
              <span>The Program</span>
              <span>Registration Fees</span>
              <span>Contact Us</span>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Header;
