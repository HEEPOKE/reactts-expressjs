import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LoginModal from "../Modals/LoginModal";

function NavbarMenu() {
  const RegisterNew = () => {
    window.location.href = "/register";
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand href="#">Topic</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto my-2 my-lg-0">
            <LinkContainer to="/">
              <Nav.Link href="#action1">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/store">
              <Nav.Link href="#action2">Store</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Link" id="navbaDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex mx-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <LoginModal />
            {/* <LinkContainer to="/register"> */}
            <Button className="Registerbutton" onClick={RegisterNew}>
              Register
            </Button>
            {/* </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
