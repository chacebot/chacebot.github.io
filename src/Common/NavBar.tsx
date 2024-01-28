import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <Navbar sticky="top" expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Chace Medeiros</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                activeKey={location.pathname}
              >
                <Nav.Link href="/professional">Professional</Nav.Link>
                {/* <Nav.Link href="/personal">Personal</Nav.Link> */}
                {/* <Nav.Link href="/causes">Causes</Nav.Link> */}
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
