import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./Banner.css";

import banner from "../../../images/img/home.png";

const Banner = () => {
  return (
    <div className="banner-container text-start">
      <Container>
        <Row>
          <Col md={6} className="d-flex align-items-center ">
            <div className="ms-1 header-title">
              <h1 className="title">
                {" "}
                NEW WATCH <br />
                COLLECTIONS B720
              </h1>
              <p className="title-p">
                Latest arrival of the new imported watches of the B720 series,
                <br />
                with a modern and resistant design.
              </p>
              <div className="d-flex flex">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="banner-img">
            <img src={banner} alt="banner" className="img-fluid home-banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
