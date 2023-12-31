import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom"
import { UserContext } from "../contexts/UserProvider";
import { useContext, useEffect } from "react";


export default function Header() {

    const { user, setUser } = useContext(UserContext)
    console.log(user);
    useEffect(()=>{
        if (!user.token && localStorage.getItem("token")){
            setUser({
                username: localStorage.getItem("username")!,
                token: localStorage.getItem("token")!
            })
        }
    },[user])

  return (
    <>
{
        user.token ? 
            <Container fluid>
                <Navbar sticky="top" data-bs-theme="dark" className="header">
                    <Container>
                        <Navbar.Brand as={NavLink} to="/">Dashboard</Navbar.Brand>
                    </Container>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/manager">Profile</Nav.Link>
                    </Nav.Item>
                </Navbar>
            </Container>
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