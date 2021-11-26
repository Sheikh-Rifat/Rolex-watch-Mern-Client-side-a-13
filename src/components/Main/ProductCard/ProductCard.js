import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { image, title, price, category } = product;
  return (
    <Container>
      <Col className=" custom-card ">
        <Card className="border-0 h-100">
          <Card.Img variant="top" src={image} className="py-3 card-img" />
          <Card.Body className="custom-card-popup">
            <Card.Title className="mt-5 pt-5 px-3">
              <h2>{title}</h2>
            </Card.Title>
            <h3 className="category-popup">{category}</h3>
            <Card.Text>
              <strong>
                <h4>${price}</h4>{" "}
              </strong>
            </Card.Text>

            {/* link to all product detail page */}
            <Button className="detail-btn mb-1">View Details</Button>
            <br />
            {/*  */}
            <Button className="buy-btn mt-1">Buy Now</Button>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default ProductCard;
