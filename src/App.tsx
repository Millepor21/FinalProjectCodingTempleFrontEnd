import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css'

import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LogoutPage from "./pages/LogoutPage";

export default function App() {

  const [ state, setState ] = useState("unlogged")
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setState("logged");
    } else {
      setState("unlogged");
    }
  }, []);

  let content
  if (state === "logged"){
    content = (
    <Container>
      <BrowserRouter>
        <Header loggedin={true}/>
        <Routes>
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </Container>
    )
  } else if (state === "unlogged"){
    content = (
    <Container>
      <BrowserRouter>
        <Header loggedin={false}/>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </Container>
    )
  } else {
    content = null
  }

  return (
    <Container>
      {content}
    </Container>
  )
}
