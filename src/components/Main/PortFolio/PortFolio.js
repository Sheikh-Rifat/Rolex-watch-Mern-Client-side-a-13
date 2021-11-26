import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";
import test from "../../../images/parralaxBg.jpg";
import ProductCard from "../ProductCard/ProductCard";
import "./Portfolio.css";

const PortFolio = () => {
  const [products, setProducts] = useState([[]]);
  useEffect(() => {
    fetch("http://localhost:5000/featuredProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="mb-5 pb-5 featured">
      <div className=" pt-2 pb-5 ">
        <section className="featured-section">
          <Container>
            <h2 className="section-titles">Featured</h2>

            <article>
              <Row xs={1} md={3} className="g-4">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </Row>
            </article>
          </Container>
        </section>
      </div>
      <Parallax
        className="pb-5 parallax"
        blur={7}
        bgImage={test}
        strength={800}
      >
        <Container>
          <h2 className="parallax-text">
            Enjoy 10% Discount on first Purchase
          </h2>
        </Container>
      </Parallax>
    </div>
  );
};

export default PortFolio;
