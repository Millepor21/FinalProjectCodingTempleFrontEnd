import { Container } from "react-bootstrap";
import { useState } from "react"

export default function EmployeeOrManager() {

    const [ state, setState ] = useState("neither")

    const setManager = () => {
        setState("manager")
    }
    const setEmployee = () => {
        setState("employee")
    }

  return (
    <Container>
        <button onClick={setManager}>Register as a manager</button>
        <button onClick={setEmployee}>Register as an employee</button>
    </Container>
  )
}
