import React, { useEffect, useState } from "react";
import {Button,Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";

const Appoinment = () => {
  const { id } = useParams();
  const [doctors, setDoctors] = useState([]);
  const [singledoc, setSingledoc] = useState([]);
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/AjmatRijon/fakedoctor/main/doctordetails.json`
    )
      .then((res) => res?.json())
      .then((data) => setDoctors(data?.docdetails));
  }, []);
  useEffect(() => {
    const Found = doctors?.find((doctor) => doctor?.id === id);
    setSingledoc(Found);
  }, [doctors]);

  return (
    <>
      <Container className='mb-5'>
        <div className='d-flex justify-content-center align-items-center'>
         <div> <img style={{height:'300px'}}className='img-fluid' src={singledoc?.img} alt="" />
          </div>
         <div>
             <h2>{singledoc?.name}</h2>
             <p>{singledoc?.skills}</p>
         </div>
        </div>
        <div>
        <Form>
  <Row className="mb-3 my-5">
      <h2>Get Appoinment</h2>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Full Name" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridAge">
      <Form.Label>Age</Form.Label>
      <Form.Control type="age" placeholder="Enter Age" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridGender">
      <Form.Label>Gender</Form.Label>
      <Form.Control type="gender" placeholder="Enter Gender" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Send Me Mail" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
      </Container>
    </>
  );
};

export default Appoinment;
