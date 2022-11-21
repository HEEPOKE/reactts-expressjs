import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { gapi } from "gapi-script";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { LinkContainer } from "react-router-bootstrap";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";

export default function NavbarMenu() {
  const clientId =
    "203320795555-scusrjuu1d5uv37cpncjd0bpkc9i1f2j.apps.googleusercontent.com";

  // const clientIds = process.env.CLIENT_ID;

  const [profileData, setProfileData] = useState(
    localStorage.getItem("profileData")
      ? JSON.parse(localStorage.getItem("profileData") || "{}")
      : null
  );

  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   };

  //   gapi.load("client:Auth2", initClient);
  // }, []);

  useEffect(() => {
    function initClient() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", initClient);
  }, []);

  const success = (res: any) => {
    setProfileData(res.profileObj);
    console.log("success", res);
    // refreshTokenSetup(res);
  };

  const error = (res: any) => {
    console.error("error", res);
  };

  const logout = () => {
    setProfileData(null as any);
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
            {profileData ? (
              <>
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                  className="Logout-google col-auto"
                />
                <Button className="col-auto">{profileData.name}</Button>
              </>
            ) : (
              <>
                <LoginModal />
                <RegisterModal />
                <GoogleLogin
                  clientId={clientId}
                  onSuccess={success}
                  onFailure={error}
                  buttonText="Login with Google"
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                  className="col-auto"
                />
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
