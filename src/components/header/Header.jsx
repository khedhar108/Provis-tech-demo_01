import Navbar from "./navbar/Navbar";
import { Container, Navbar as BootstrapNavbar, Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container  className="d-flex justify-content-around">
        <BootstrapNavbar.Brand className="ms-lg-5" href="#">
          Ship<span style={{ color: "red" }}>Up</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {/* Navbar at center */}
            <Navbar  />
          </Nav>
          <Nav className="gap-2 d-flex me-5">
            <Button variant="outline-primary">Request Quote</Button>
            <Button className="btn btn-primary">Join Now</Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Header;