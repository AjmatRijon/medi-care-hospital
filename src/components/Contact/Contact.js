import {faMailBulk, faMapSigns, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Button from "@restart/ui/esm/Button";
import React from "react";
import { Button,Col, Container, Form, Row } from "react-bootstrap";
import './Contact.css'




const Contact = () => {
  return (
    <div className='mb-5'>
       <div className='head'>
       <h1 className='text-center text-white'>Contact</h1>
       </div>
      <Container>
        <Row className='shadow mb-5 bg-body rounded'>
          <Col className="d-flex ps-5 flex-column justify-content-center contact-left">
            <h5><FontAwesomeIcon icon={faMailBulk}/> Email</h5>
            <p> info@medicare-hospital.com</p>
            <h5><FontAwesomeIcon icon={faPhone}/> Phone</h5>
            <p> +8801690027002</p>
            <h5><FontAwesomeIcon icon={faMapSigns}/> Address</h5>
            <p>3089 Oak Street, CSandy Creek ,NY, New York</p>
          </Col>

          <Col className=' d-flex ps-5 flex-column justify-content-center contact-right'>
            <Form>
              <h2>Get In Touch</h2>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="jhon doe" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone:</Form.Label>
                <Form.Control type="num" placeholder="+122 2222 2222 " />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write your query"/>
              </Form.Group>
              <Button
                className="btn btn-danger"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
