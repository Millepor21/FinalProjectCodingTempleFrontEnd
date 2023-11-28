import { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css'

import Header from "./components/Header";
import { UserContext } from "./contexts/UserProvider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LogoutPage from "./pages/LogoutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ManagerAccount from "./components/ManagerAccount";
import Dashboard from "./components/Dashboard";
import EditPage from "./pages/EditPage";
import TransactionPage from "./pages/TransactionPage";
import EmployeePage from "./pages/EmployeePage";

export default function App() {
  
  const { user } = useContext(UserContext)
  useEffect(()=>{
    console.log(user, "in app");
  },[user])

  return (
    <BrowserRouter>
        <Container>
          <Header/>  
          <Routes>
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="/employee" element={<EmployeePage />} />
            <Route path="/manager" element={<ManagerAccount />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
    </BrowserRouter>
  )
}
