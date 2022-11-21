import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function NavbarMenu() {
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
            {/* <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              onLogoutSuccess={logout}
              className="Logout-google col-auto"
            /> */}
            <LinkContainer to="/auth/login">
              <Button className="col-auto mx-2">Login</Button>
            </LinkContainer>
            <LinkContainer to="/auth/register">
              <Button className="col-auto">Regisater</Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
