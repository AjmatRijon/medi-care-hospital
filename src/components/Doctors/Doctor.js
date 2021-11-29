import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const {name,img,skills,id,price} = doctor;
    return (
        <div>
            <Col>
      <Card>
        <Card.Img style={{height:'300px'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
        {skills}
          </Card.Text>
          <Card.Text>
       <p>${price}/meeting
        </p>
          </Card.Text>

          <> <Link to={`/doctor/${id}`}>
                <Button className="btn-danger">Get appinment</Button>
            </Link></>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Doctor;