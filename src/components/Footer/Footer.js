import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="border-top mt-5 mx-3 pt-3 text-start">
      <Container>
        <Row>
          <Col md={3} className="mb-2">
            <ul>
              <li>
                <h3>Our information</h3>
              </li>
              <li>1234 - Peru</li>
              <li>La Libertad 43210</li>
              <li>123-456-789</li>
            </ul>
          </Col>
          <Col md={3} className="mb-2">
            <ul>
              <li>
                <h3>About Us</h3>
              </li>

              <li>Support Center</li>
              <li>Customer Support</li>
              <li>About Us</li>
              <li>Copy Right</li>
            </ul>
          </Col>
          <Col md={3} className="mb-2">
            <ul>
              <li>
                <h3>Products</h3>
              </li>
              <li>Biker's Collection</li>
              <li>Classic</li>
              <li>Electric</li>
              <li>Accesories</li>
            </ul>
          </Col>
          <Col md={3} className="mb-3 text-center">
            <h3>Social</h3>
            <BsFacebook className="mx-2" />
            <BsTwitter className="mx-2" />
            <BsInstagram className="mx-2" />
          </Col>
        </Row>
        <div className="mt-5 mx-5 border-top text-center">
          <p className="mt-3">
            <span>&copy;</span>2021 | Sheikh Mohammad Rifat . All Rights
            reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
