import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="border-top border-top-3">
      <Container>
        <Row className="w-100 py-4 gy-4 gx-5">
          {/* first section of footer  */}
          <Col className="col-lg-4 col-md-6 ">
            <h1 className="text-dark">Medi Care</h1>
            <p className="small text-muted">
            Hospitals complement and amplify the effectiveness of many other parts of the health system, providing continuous availability of services for acute and complex conditions. They concentrate scarce resources within well-planned referral networks to respond efficiently to population health needs. 
            </p>
            <p className="small text-muted mb-0">
              &copy; Copyrights. All rights reserved.
            </p>
          </Col>
          {/* second section of footer  */}
          <Col className="col-lg-2 col-md-6">
            <h5 className="text-dark mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <NavLink className="nav-link text-dark" to="/Home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link text-dark" to="/About">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link text-dark" to="#">
                 Carrier
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link text-dark" to="#">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </Col>
          {/* third section of footer  */}
          <div className="col-lg-2 col-md-6">
            <h5 className="mb-3 text-dark">Social Media</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <NavLink className="nav-link text-dark" to="#">
                  <FontAwesomeIcon icon={faFacebookSquare} /> Facebook
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link text-dark" to="#">
                  <FontAwesomeIcon icon={faTwitterSquare} /> Twitter
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link text-dark" to="#">
                  <FontAwesomeIcon icon={faInstagramSquare} /> Instagram
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link text-dark" to="#">
                  <FontAwesomeIcon icon={faYoutube} /> Youtube
                </NavLink>
              </li>
            </ul>
          </div>
          {/* fourth section of footer  */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-dark mb-3">Newsletter</h5>
            <p className="small text-muted">
              Join our mail list and get update daily About our progress
            </p>
            <form action="#">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Recipient's Email"
                />
                <button
                  className="btn btn-danger"
                  id="button-addon2"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
