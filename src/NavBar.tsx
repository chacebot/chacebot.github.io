import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const location = useLocation();
  return (
    <Navbar bg="light" data-bs-theme="light" style={{ marginLeft: "10px" }}>
      <Row md={3}>
        <Navbar.Brand href="/">Chace Medeiros</Navbar.Brand>
        <div>
          <Nav className="me-auto" activeKey={location.pathname}>
            <Nav.Link href="/professional">Professional</Nav.Link>
            <Nav.Link href="/personal">Personal</Nav.Link>
            <Nav.Link href="/causes">Causes</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </div>
      </Row>
    </Navbar>
  );
};

export default NavBar;
