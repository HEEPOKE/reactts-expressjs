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
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookSquare, faGoogle);

export default function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Form>
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
                  />
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
                  />
                </FloatingLabel>
              </Form.Group>
              <Row className="">
                <Col className="text-start">
                  <Form.Check type="checkbox" label="remember" />
                </Col>
                <Col></Col>
                <Col className="fw-light text-end">
                  <a className="text-secondary" href="/forgotpassword">
                    Forgot Password
                  </a>
                </Col>
              </Row>
            </Form.Group>
            <Container>
              <Row className="justify-content-center">
                <Button className="col-4">Login</Button>
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
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
