import { useState } from "react";
import Register from "../components/forms/Register";
import { Container } from "react-bootstrap";
import RegisterEmployee from "../components/forms/RegisterEmployee";

export default function RegisterPage() {

    const [state, setState] = useState("null");

    const setManager = () => {
        setState("manager");
    };

    const setEmployee = () => {
        setState("employee");
    };

    let content;
    if (state === "manager") {
        content = (
        <Container className="register_manager">
            <Register/>
        </Container>
        )
    } else if (state === "employee") {
        content = (
        <Container className="register_employee">
            <RegisterEmployee/>
        </Container>
        )
    } else {
        content = null;
    }


    return (
        <Container>
            <div className="register_choice">
                <button onClick={setManager} className="register_button">Register as a manager</button>
                <button onClick={setEmployee} className="register_button">Register as an employee</button>
            </div>
            {content}
        </Container>
    )
}