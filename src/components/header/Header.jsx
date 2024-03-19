import Navbar from "./navbar/Navbar";
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <BootstrapNavbar className="bg-white" expand="lg">
      <Container className="d-flex justify-content-around">
        <BootstrapNavbar.Brand className="ms-lg-5" href="#">
          Ship<span className="text-danger fw-bold  ">Up</span>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {/* Navbar at center */}
            <Navbar />
          </Nav>
          <Nav className="gap-2 d-flex me-5 ">
            <button className="btn btn-outline-dark ">Request Quote</button>
            <button className="btn customBtn ">Join Now</button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Header;
