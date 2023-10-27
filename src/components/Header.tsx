import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom"

interface HeaderProp {
    loggedin: boolean
}

export default function Header( { loggedin }: HeaderProp) {
  return (
    <>
{
        loggedin ? 
        <Navbar sticky="top" data-bs-theme="dark" className="header">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Dashboard</Navbar.Brand>
            </Container>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
            </Nav.Item>
        </Navbar>
        :
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
}
    </>
  )
} 