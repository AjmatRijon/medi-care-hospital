import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Container, Row } from "react-bootstrap";

const CustomerReview = () => {
  return (
    <div>
      <h1 className="text-center py-5">Customer Review</h1>

      <Container>
      <div>
      <Row xs={1} md={3} className="g-3 mb-5 text-center">
          <Col>
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>
            Good hospital.... There ENT depertment is given me good service. Specially thanks to Dr. S. C Sarker Sumon, FCPS, ENT specialist, Dhaka Medical College Hospital.
            </Card.Text>
            <Card.Title>
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
            </Card.Title>
            <Card.Title>-S.C Debnath Joy</Card.Title>
          </Card.Body>
        </Card>
        </Col>
          <Col>
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>
            doctors available. But you should come by contract authority to get suggestions from spacial doctor. But emergency is always on 😉. Wish all sick free life.
            </Card.Text>
            <Card.Title>
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
            </Card.Title>
            <Card.Title>-Motiur Rahman</Card.Title>
          </Card.Body>
        </Card>
        </Col>
          <Col>
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>
            American International Hospital Ltd. is  leading private hospital at Banasree, Rampura,  Khilgoan, in Dhaka, Bangladesh.Thank you for service.
            </Card.Text>
            <Card.Title>
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
                <FontAwesomeIcon color='gold' icon={faStar} />
            </Card.Title>
            <Card.Title>-Shamim Ahmed</Card.Title>
          </Card.Body>
        </Card>
        </Col>
        </Row>
      </div>
      </Container>
    </div>
  );
};

export default CustomerReview;
