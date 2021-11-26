import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Story.css";

const Story = () => {
  return (
    <div className="my-5 py-5">
      <section className="mb-3 story-section">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="story-img-section">
                <img
                  src="https://i.ibb.co/rZFrZ4L/story.png"
                  alt="story"
                  className="story-img"
                />
                <div className="story-square"></div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <h2 className="section-titles my-5">Our Story</h2>
              <div className="story-description">
                <h1>
                  Inspirational Watch of <br /> this year
                </h1>
                <p>
                  The latest and modern watches of this year, is available in
                  various presentations in this store, discover them now.
                </p>
                <Button className="buy-btn">Discover</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Story;
