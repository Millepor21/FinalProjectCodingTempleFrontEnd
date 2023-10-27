import { useState } from "react";
import Body from "../components/Body";
import Edit from "../components/forms/Edit";
import { Container } from "react-bootstrap";
import EditEmployee from "../components/forms/EditEmployee";

export default function EditPage() {

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
            <Body sidebar={false}>
                <Edit/>
            </Body>
        );
    } else if (state === "employee") {
        content = (
            <Body sidebar={false} >
                <EditEmployee/>
            </Body>
        );
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