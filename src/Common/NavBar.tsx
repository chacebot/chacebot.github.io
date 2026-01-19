import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Navbar 
      expand="lg"
      sticky="top"
      style={{ 
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        zIndex: 1000,
        position: "sticky",
        top: 0,
      }}
      variant="dark"
    >
      <Container fluid style={{ maxWidth: "1400px", paddingLeft: "2rem", paddingRight: "2rem" }}>
        <Navbar.Brand 
          onClick={scrollToTop}
          style={{
            fontWeight: 400,
            fontSize: "0.875rem",
            color: "#ffffff",
            textDecoration: "none",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.9,
            cursor: "pointer",
          }}
        >
          Chace Medeiros
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          style={{ 
            border: "1px solid #1a1a1a",
            color: "#ffffff",
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav 
            className="ms-auto"
            style={{ gap: "2rem" }}
          >
            <Nav.Link 
              onClick={() => scrollToSection("about")}
              style={{ 
                fontWeight: 400,
                padding: 0,
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection("projects")}
              style={{ 
                fontWeight: 400,
                padding: 0,
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection("contact")}
              style={{ 
                fontWeight: 400,
                padding: 0,
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
