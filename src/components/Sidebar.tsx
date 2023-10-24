import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/esm/Nav";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <NavBar sticky="top" className="flex-column sidebar">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/transaction">Transactions</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/employee">Employees</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/manager">My Account</Nav.Link>
      </Nav.Item>
    </NavBar>
  );
}