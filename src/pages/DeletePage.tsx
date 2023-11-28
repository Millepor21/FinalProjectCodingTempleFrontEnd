import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Delete from "../components/forms/Delete";
import DeleteEmployee from "../components/forms/DeleteEmployee";
import { Container } from "react-bootstrap";

export default function DeletePage() {
  const navigate = useNavigate();
  const [chosenPage, choosePage] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const chooseEmployee = () => {
    choosePage("employee");
  };
  const chooseManager = () => {
    choosePage("manager");
  };
  let content;
  if (chosenPage === "employee") {
    content = <DeleteEmployee />;
  } else if (chosenPage === "manager") {
    content = <Delete />;
  } else content = null;

  return (
    <Container className="delete_container">
        <div className="login_choice">
            <button onClick={chooseEmployee} className="delete_button">Delete Employee</button>
            <button onClick={chooseManager} className="delete_button">Delete Manager</button>
        </div>
        {content}
    </Container>
  );
}
