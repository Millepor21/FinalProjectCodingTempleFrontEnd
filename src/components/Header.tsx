import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom"

function Header() {
  return (
    <>
        <Navbar sticky="top" data-bs-theme="dark" className="header">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Dashboard</Navbar.Brand>
            </Container>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
            </Nav.Item>
        </Navbar>
    </>
  )
}

export default Header