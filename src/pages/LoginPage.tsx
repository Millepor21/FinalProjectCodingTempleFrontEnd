import { useState } from "react"
import Login from "../components/forms/Login"
import UserProvider from "../contexts/UserProvider"
import { Container } from "react-bootstrap"
import LoginEmployee from "../components/forms/LoginEmployee"

export default function LoginPage() {

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
        <UserProvider>
          <Container className="manager_log_form">
            <h2>Manager:</h2><br/>
            <Login />
          </Container>
        </UserProvider>
    );
  } else if (state === "employee"){
    content = (
        <UserProvider>
          <Container className="employee_log_form">
            <h2>Employee:</h2><br/>
            <LoginEmployee />
          </Container>
        </UserProvider>
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