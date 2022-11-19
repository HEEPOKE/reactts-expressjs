import NavbarMenu from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "react-bootstrap/Card";
import GoogleLoginButton from "../../features/GoogleLoginButton";

export default function HomePage() {
  return (
    <>
      <NavbarMenu />
      {/* {user ? (
        <div>user.NAME</div>
      ) : (
        <>
          <LoginModal />
          <RegisterModal />
        </>
      )} */}
      <Footer />
    </>
  );
}
