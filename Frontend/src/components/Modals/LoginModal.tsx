import React, { useState } from "react";
import {
  Button,
  Form,
  Modal,
  Container,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookSquare, faGoogle);

import FacebookLoginButton from "../../features/FackebookLoginButton";

export default function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  const LoginSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const responseFacebook = (response: any) => {
    console.log(response);
  };

  return (
    <>
      <Button className="Loginbutton mx-2" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h3>Login</h3>
          </div>
          <Form noValidate validated={validated} onSubmit={LoginSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Group className="mb-3" controlId="Email">
                <Form.Label>Email</Form.Label>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    placeholder="@example.com"
                    autoFocus
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Email.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Password">
                <Form.Label>Password</Form.Label>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="password"
                    autoFocus
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Password.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Row className="">
                <Col className="text-start">
                  <Form.Check type="checkbox" label="remember" />
                </Col>
                <Col></Col>
                <Col className="fw-light text-end deco">
                  <a className="text-secondary" href="/forgotpassword">
                    Forgot Password
                  </a>
                </Col>
              </Row>
            </Form.Group>
            <Container>
              <Row className="justify-content-center">
                <Button className="col-4" onClick={LoginSubmit}>
                  Login
                </Button>
              </Row>
            </Container>
          </Form>
          <div className="text-center mt-2">
            <span>OR</span>
          </div>
          <Container>
            <Row className="justify-content-center mt-2">
              <Button className="FacebookIcon col-6">
                <FontAwesomeIcon
                  className="mx-2"
                  icon={["fab", "facebook-square"]}
                />
                Login with Facebook
              </Button>
            </Row>
            <Row className="justify-content-center mt-2">
              <Button className="GoogleIcon col-6">
                <FontAwesomeIcon className="mx-2" icon={["fab", "google"]} />
                Login with Google+
              </Button>
            </Row>
            <Row className="justify-content-center mt-2">
              <FacebookLoginButton />
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
