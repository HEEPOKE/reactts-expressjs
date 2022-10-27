import NavbarMenu from "../../components/Navbar";
import Header from "./header";
import { Container, Card, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function StorePage() {
  return (
    <div>
      <NavbarMenu />
      <Header />
      <Container>
        <Card className="mt-3">
          <Card.Body>
            <LinkContainer to="/create">
              <Button className="float-end col-2 mb-3">create</Button>
            </LinkContainer>
            <Table
              striped
              bordered
              hover
              variant="dark"
              className="text-center"
            >
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Name</th>
                  <th>Details</th>
                  <th>images</th>
                  <th>Manage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <LinkContainer to={`/edit/`}>
                      <Button variant="warning" className="mx-2">
                        Edit
                      </Button>
                    </LinkContainer>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
