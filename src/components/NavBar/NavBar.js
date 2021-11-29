import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./NavBar.css";

const NavBar = () => {
  const { user, logOut } = useAuth();
  return (

          <Navbar collapseOnSelect expand="lg" bg='white' className='navbar-light' variant="white">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand>
          <Link className="nav-link text-dark brand" to="/">
            Medi Care
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='justify-content-end text-center' id="responsive-navbar-nav">
        
          <Nav.Item>
            <NavLink
              activeClassName="active-menu"
              className="nav-link text-dark"
              to="/Home"
            >
              Home
            </NavLink>
          </Nav.Item>
          <NavLink
            activeClassName="active-menu"
            className="nav-link text-dark"
            to="/Doctors"
          >
            Doctors
          </NavLink>
          <NavLink
            activeClassName="active-menu"
            className="nav-link text-dark"
            to="/Products"
          >
            Shop
          </NavLink>
          <NavLink
            activeClassName="active-menu"
            className="nav-link text-dark"
            to="/contact"
          >
            Contact
          </NavLink>
          {user.email && (
            <Navbar.Text>
              <span className='text-danger'>Hello,{user?.displayName}</span>
            </Navbar.Text>
          )}
          {user?.email ? (
            <Button onClick={logOut} className ='btn-danger mx-3'>
              Logout
            </Button>
          ) : (
            <NavLink activeClassName="active-menu"
            className="btn btn-danger"  to="/login">
              Login
            </NavLink>
          )}
        
        </Navbar.Collapse>
      </Container>
      </Navbar>
  );
};

export default NavBar;
