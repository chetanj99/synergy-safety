import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Header from "./Header";
import HomeImg from "../../assets/images/Home.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-root">
        <Container>
          <Row>
            <Col md="7" xs="12">
              <div className="home-text">
                <h1>
                  Synergy Safety -<br />
                  Smart Monitoring System
                </h1>
                <span>
                  In response to Amiri Decree No. 13 of 2021 regarding the fire
                  smart monitoring system,
                  <br />
                  and in embodiment of the govern­ments visio.
                </span>
                <Button>Get Started</Button>
              </div>
            </Col>
            <Col md="5" xs="12">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={HomeImg}
                  alt="home"
                  style={{ width: "450px", height: "450px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
