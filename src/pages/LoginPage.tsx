import { useEffect, useState } from "react"
import Login from "../components/forms/Login"
import { Container } from "react-bootstrap"
import LoginEmployee from "../components/forms/LoginEmployee"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {

  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("token")){
      navigate("/")
    }
  })
  
      
  const [ state, setState] = useState("null")
  const setManager = () => {
    setState("manager")
  }
  const setEmployee = () => {
    setState("employee")
  }
  let content;
  if(state === "manager"){
    content = (
          <Container className="manager_log_form">
            <h2>Manager:</h2><br/>
            <Login />
          </Container>
    );
  } else if (state === "employee"){
    content = (
          <Container className="employee_log_form">
            <h2>Employee:</h2><br/>
            <LoginEmployee />
          </Container>
    );
  } else {
    content = null
  }
  return (
    <Container className="login_container">
      <div className="login_choice">
        <button onClick={setManager} className="login_button">Login as a manager</button>
        <button onClick={setEmployee} className="login_button">Login as an employee</button>
      </div>
      {content}
    </Container>
  )
}