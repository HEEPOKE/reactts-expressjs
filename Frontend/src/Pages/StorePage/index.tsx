import NavbarMenu from "../../components/Navbar";
import { Container, Card, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function StorePage() {
  return (
    <div>
      <NavbarMenu />
      <h2 className="text-center text-dark mt-3">Store</h2>
      <Container>
        <Card className="mt-3">
          <Card.Body>
            <LinkContainer to="/create">
              <Button className="float-end col-2 mb-3">create</Button>
            </LinkContainer>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
