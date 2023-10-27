import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import LogoutPage from "../pages/LogoutPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

interface HeaderProp {
    loggedin: boolean
}

export default function Header( { loggedin }: HeaderProp) {
  return (
    <>
{
        loggedin ? 
        <BrowserRouter>    
            <Container>
                <Navbar sticky="top" data-bs-theme="dark" className="header">
                    <Container>
                        <Navbar.Brand as={NavLink} to="/">Dashboard</Navbar.Brand>
                    </Container>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
                    </Nav.Item>
                </Navbar>
            </Container>
            <Routes>
                <Route path="/logout" element={<LogoutPage />} />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </BrowserRouter>
        :
        <BrowserRouter>
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
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </BrowserRouter>
}
    </>
  )
} 