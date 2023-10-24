import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css'

import Header from "./components/Header";
// import LoginPage from "./pages/LoginPage";

function App() {

  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
