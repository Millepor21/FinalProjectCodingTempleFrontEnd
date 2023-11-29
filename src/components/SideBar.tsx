import { useContext } from "react"
import { UserContext } from "../contexts/UserProvider"
import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"


export default function SideBar() {

    const { user } = useContext(UserContext)

  return (
    <>
    {
        user.token ? 
            <Container fluid className="sidebar_container">
                <Navbar sticky="top" data-bs-theme="dark" className="sidebar vstack">
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/transaction">Transactions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/employee">Employees</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/edit">Edit</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to="/delete">Delete</Nav.Link>
                    </Nav.Item>
                </Navbar>
            </Container>
        : null
    }
    </>
  )
}
