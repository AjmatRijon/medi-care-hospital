import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ doctor }) => {
  const { name, img, skills, price } = doctor;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img style={{ height: "300px" }} variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{skills}</Card.Text>
            <Card.Text>
              <p>Price: ${price}</p>
            </Card.Text>
            <>
              <Link to="#">
                <Button className="btn-danger">Add to cart</Button>
              </Link>
            </>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Product;
