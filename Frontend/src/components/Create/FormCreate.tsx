import { Button, Container, Form, Card } from "react-bootstrap";

export default function FormCreate() {
  return (
    <Container className="justify-content-center">
      <Card className="col-8">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
