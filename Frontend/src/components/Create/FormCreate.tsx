import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Form, Card, Row } from "react-bootstrap";

export default function FormCreate() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const BackButton = () => {
    window.history.back();
  };

  const CreateData = () => {
    axios.post(``, {
      name,
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Card className="col-8">
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Details">
                <Form.Label>Details</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Details"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Details.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="images[]">
                <Form.Label>Images</Form.Label>
                <Form.Control type="file" accept="image/*" multiple required />
                <Form.Control.Feedback type="invalid">
                  Please Add Images.
                </Form.Control.Feedback>
              </Form.Group>
              <Container>
                <Row className="justify-content-center mt-2">
                  <Button type="submit" className="col-3 mx-2">
                    Submit
                  </Button>
                  <Button
                    variant="secondary"
                    className="col-3"
                    onClick={BackButton}
                  >
                    Cancel
                  </Button>
                </Row>
              </Container>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
