import { useState } from "react";
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
        <Container className="edit_manager">
            <Edit/>
        </Container>
        
        )
    } else if (state === "employee") {
        content = (
        <Container className="edit_employee">
            <EditEmployee/>
        </Container>
        )
    } else {
        content = null;
    }


    return (
        <Container>
            <div className="register_choice">
                <button onClick={setManager} className="register_button">Edit manager profile</button>
                <button onClick={setEmployee} className="register_button">Edit employee profile</button>
            </div>
            {content}
        </Container>
    )
}