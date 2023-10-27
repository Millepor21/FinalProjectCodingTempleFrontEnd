import { Container } from "react-bootstrap";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/esm/Nav";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Transactions from "./Transactions";
import Employees from "./Employees";
import ManagerAccount from "./ManagerAccount";

export default function Sidebar() {
  return (
    <BrowserRouter>
      <Container>
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
        <Routes>
          <Route path="/transaction" element={<Transactions />}/>
          <Route path="/employee" element={<Employees />} />
          <Route path="/manager" element={<ManagerAccount />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}