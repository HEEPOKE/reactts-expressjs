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

export default function RegisterModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  const RegisterSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Button className="Registerbutton" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h3>Register</h3>
          </div>
          <Form noValidate validated={validated} onSubmit={RegisterSubmit}>
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
              <Form.Group className="mb-3" controlId="tel">
                <Form.Label>Tel</Form.Label>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Phone"
                  className="mb-3"
                >
                  <Form.Control
                    type="tel"
                    placeholder="xxx-xxx-xxxx"
                    minLength={10}
                    autoFocus
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Phone Number.
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
              <Form.Group className="mb-3" controlId="ConfirmPassword">
                <Form.Label>ConfirmPassword</Form.Label>
                <FloatingLabel
                  controlId="floatingInput"
                  label="ConfirmPassword"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Confrimpassword"
                    autoFocus
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter ConfirmPassword.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check label="remember me" />
              </Form.Group>
            </Form.Group>
            <Container>
              <Row className="justify-content-center">
                <Button className="col-4" type="submit">
                  Submit
                </Button>
              </Row>
            </Container>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
