import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { GoogleLogout } from "react-google-login";
import { LinkContainer } from "react-router-bootstrap";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";

export default function NavbarMenu() {
  const [profile, setProfile] = useState([]);

  const clientId =
    "203320795555-scusrjuu1d5uv37cpncjd0bpkc9i1f2j.apps.googleusercontent.com";

  const logout = () => {
    setProfile(null as any);
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
            <NavDropdown title="Options" id="navbarDropdown">
              <LinkContainer to="/check">
                <NavDropdown.Item>check</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="#action4">
                Another action
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
            {profile ? (
              <>
                {/* <div>{profile.name}</div> */}
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                  className="Logout-google col-auto"
                />
              </>
            ) : (
              <>
                <LoginModal />
                <RegisterModal />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
