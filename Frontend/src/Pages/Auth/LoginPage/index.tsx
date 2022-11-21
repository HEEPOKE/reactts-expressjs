import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";

export default function LoginPage() {
  return (
    <section>
      <Container>
        <Row className="justity-content-center mt-10">
          <h1 className="text-center mb-3 H-login">Login</h1>
        </Row>
        <Card className="d-flex aligns-items-center justify-content-center w-50 mx-auto">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
