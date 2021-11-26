import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Testimonial.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  // install Swiper modules
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  return (
    <div className="my-5 py-5">
      <section className="my-3 testimonial-section">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2 className="section-titles my-5">Testimonials</h2>

              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={false}
                className="testimonial-swiper"
              >
                <SwiperSlide>
                  <div className="testimonial-description">
                    <Card>
                      <Card.Body>
                        <blockquote className="blockquote mb-0 ms-3 text-start">
                          <ImQuotesLeft />
                          <p>
                            {" "}
                            They are the best watches that one acquires, also
                            they are always with the latest news and trends,
                            with a very comfortable price and especially with
                            the attention you receive, they are always attentive
                            to your questions.{" "}
                          </p>
                          <footer className="blockquote-footer">
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-description">
                    <Card>
                      <Card.Body>
                        <blockquote className="blockquote mb-0 ms-3 text-start">
                          <ImQuotesLeft />
                          <p>
                            {" "}
                            They are the best watches that one acquires, also
                            they are always with the latest news and trends,
                            with a very comfortable price and especially with
                            the attention you receive, they are always attentive
                            to your questions.{" "}
                          </p>
                          <footer className="blockquote-footer">
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-description">
                    <Card>
                      <Card.Body>
                        <blockquote className="blockquote mb-0 ms-3 text-start">
                          <ImQuotesLeft />
                          <p>
                            {" "}
                            They are the best watches that one acquires, also
                            they are always with the latest news and trends,
                            with a very comfortable price and especially with
                            the attention you receive, they are always attentive
                            to your questions.{" "}
                          </p>
                          <footer className="blockquote-footer">
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </Card.Body>
                    </Card>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>

            <Col xs={12} md={6}>
              <div className="testimonial-img-section">
                <img
                  src="https://i.ibb.co/pKvYMsq/testimonial.png"
                  alt="story"
                  className="story-img"
                />
                <div className="story-square"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Testimonials;
