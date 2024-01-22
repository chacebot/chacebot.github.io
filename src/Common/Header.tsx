import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" style={{ height: "5%" }}>
        <Container>
          <Navbar.Brand href="/">Chace Medeiros</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
