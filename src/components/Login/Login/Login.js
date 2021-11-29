import {faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const {
    signInUsingGoogle,
    handleEmail,
    handlePass,
    handleSubmit,
    error,
    processLogin
  } = useAuth();
  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <div className="col-md-3 col-10 p-3 bg-light">
        <div className="">
          <h2 className="text-center text-primary my-3">Please login</h2>
          <form onSubmit={handleSubmit}>
            <Form.Group className=" mb-3">
              <Form.Label
                htmlFor="inputEmail3"
                className="col-sm-2 col-form-label"
              >
                Email
              </Form.Label>
              <div>
                <input
                  type="email"
                  onBlur={handleEmail}
                  className="form-control"
                  id="inputEmail3"
                  required
                />
              </div>
            </Form.Group>
            <div className=" mb-3">
              <Form.Label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </Form.Label>
              <div>
                <input
                  type="password"
                  onBlur={handlePass}
                  className="form-control"
                  id="inputPassword3"
                  required
                />
                <p className="text-danger">{error}</p>
              </div>
            </div>
            <button
              type="submit"
              onClick={processLogin}
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>

        <div className="text-center">
          <h2>or</h2>
          <button onClick={signInUsingGoogle} className="btn btn-warning">
            <FontAwesomeIcon icon={faGoogle} />
          </button>
          <p>
            Don't have account? <NavLink to="/register">Register here</NavLink>
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Login;
