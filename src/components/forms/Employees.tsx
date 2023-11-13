import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Employee } from "../../types";
import { Container } from "react-bootstrap";

export default function Employees() {
  const navigate = useNavigate();
  const employeeIdField = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  let employeeList:Employee[]=[]
  async function handleEmployeeChoice(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    const employeeChoice = employeeIdField.current!.value;
    clearForm();
    employeeList.push(await searchEmployee(employeeChoice));
  }

  async function searchEmployee(employeeChoice: string) {
    const res = await fetch(
      `http://127.0.0.1:5000/employee/${employeeChoice}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.ok) {
      console.log("in res ok search employee");
      const data = await res.json();
      console.log("search result", data);
      return data
    } else {
      console.log("res not good in search");
      window.alert("No Employee with that ID");
    }
  }

  function clearForm() {
    employeeIdField.current!.value = "";
  }
  
  const [ employee, setEmployee ] = useState<JSX.Element | null>(null)
  useEffect(()=>{
    if (employeeList.length > 0){
      const sEmp = employeeList[0]
      setEmployee(<div>{`Name: ${sEmp.first_name} ${sEmp.last_name} ID: ${sEmp.id}`}</div>)
    }
  },[employeeList])

  return (
    <Container>
      <form onSubmit={handleEmployeeChoice}>
        <label htmlFor="search_bar"></label>
        <input type="text" id="search_bar" ref={employeeIdField} required/><br/>
        <input type="submit" value="Search" />
      </form>
      <div className="chosen_employee">
        {employee}
      </div>
    </Container>
  );
}
