import { useState } from "react";
import Body from "../components/Body";
import Register from "../components/forms/Register";
import { Container } from "react-bootstrap";
import RegisterEmployee from "../components/forms/RegisterEmployee";

export default function RegisterPage() {

    const [state, setState] = useState("neither");

    const setManager = () => {
        setState("manager");
    };

    const setEmployee = () => {
        setState("employee");
    };

    let content;
    if (state === "manager") {
        content = (
            <Body sidebar={false}>
                <Register/>
            </Body>
        );
    } else if (state === "employee") {
        content = (
            <Body sidebar={false} >
                <RegisterEmployee/>
            </Body>
        );
    } else {
        content = null;
    }


    return (
        <Container>
            <button onClick={setManager}>Register as a manager</button>
            <button onClick={setEmployee}>Register as an employee</button>
            {content}
        </Container>
    )
}