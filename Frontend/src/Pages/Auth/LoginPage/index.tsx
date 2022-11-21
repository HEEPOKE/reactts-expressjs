import React from "react";
import { Button, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function LoginPage() {
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <button
                type="button"
                className="btn btn-primary btn-floating mx-1"
              >
                <i className="fab fa-facebook-f"></i>
              </button>
            </div>
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">OR</p>
            </div>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="test" placeholder="Enter Username" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" minLength={8} placeholder="Enter Password" />
              </Form.Group>
              <Form.Group
                className="d-flex justify-content-between align-items-center"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Remember me" />
                <LinkContainer to="/auth/Forgot-password">
                  <a>Forgot password?</a>
                </LinkContainer>
              </Form.Group>
            </Form>
            <div className="text-center text-lg-start mt-4 pt-2">
              <Button className="btn-lg" variant="primary">
                Login
              </Button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?{" "}
                <LinkContainer to="/auth/register">
                  <a className="link-danger NN">Register</a>
                </LinkContainer>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
