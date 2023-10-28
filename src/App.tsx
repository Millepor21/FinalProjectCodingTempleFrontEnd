import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css'

import Header from "./components/Header";
import UserProvider from "./contexts/UserProvider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LogoutPage from "./pages/LogoutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Employees from "./components/Employees";
import ManagerAccount from "./components/ManagerAccount";
import Dashboard from "./components/Dashboard";
import EditPage from "./pages/EditPage";
import TransactionPage from "./pages/TransactionPage";
import Employee from "./components/forms/Employee";

export default function App() {
  
  const [ state, setState ] = useState("null")

  const token = localStorage.getItem("token")
  // let content
  useEffect(()=>{
    if(token){
      console.log("in logged")
      setState("logged")
    } else {
      console.log("in unlogged")
      setState("unlogged")
  }
  },[token])

  // if (state === "logged"){
  //   content = (
  //   <Container>
  //       <Header loggedin={true}/>
  //       <BrowserRouter>  
  //         <Routes>
  //           <Route path="/logout" element={<LogoutPage />} />
  //           <Route path="/transaction" element={<Transactions />} />
  //           <Route path="/employee" element={<Employees />} />
  //           <Route path="/manager" element={<ManagerAccount />} />
  //           <Route path="/" element={<Dashboard />} />
  //           <Route path="*" element={<Navigate to="/"/>} />
  //         </Routes>
  //       </BrowserRouter>
  //   </Container>
  //   )
  // } else if (state === "unlogged"){
  //   content = (
  //   <Container>
  //       <Header loggedin={false}/>
  //       <BrowserRouter>
  //           <Routes>
  //               <Route path="/register" element={<RegisterPage />} />
  //               <Route path="/login" element={<LoginPage />} />
  //               <Route path="/" element={<Dashboard />} />
  //               <Route path="*" element={<Navigate to="/"/>} />
  //           </Routes>
  //       </BrowserRouter>
  //   </Container>
  //   )
  // } else {
  //   content = <div></div>
  // }

  return (
    <BrowserRouter>
      <UserProvider>
        <Container>
          <Header loggedin={state === "logged"} />
          <Routes>
            {state === "logged" && (
              <>
                <Route path="/logout" element={<LogoutPage />} />
                <Route path="/transaction" element={<TransactionPage />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/manager" element={<ManagerAccount />} />
                <Route path="/edit" element={<EditPage />} />
              </>
            )}
            {state === "unlogged" && (
              <>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
              </>
            )}
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </UserProvider>
    </BrowserRouter>
  )
}
