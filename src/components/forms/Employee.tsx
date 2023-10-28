
import { Container } from "react-bootstrap";
import { Employee } from "../../types"
import { useState } from "react";

export default function Employees() {

    async function handleEmployees() {
        const res = await fetch("https://manager-dash-uof4.onrender.com/employee", {
            method : "GET",
            headers : {"Content-Type": "application/json"},
        })
        if(res.ok) {
            const data = await res.json();
            return data
        } else window.alert("Request Failed")
    }
    let employees:Employee[] = []
    function getEmployees():Employee[]{
        async()=>{
        employees = await handleEmployees()
        }
    return employees}
    const transactionList = employees.map((employee: Employee) =>(
        <li key={employee.id}>{`Name: ${employee.first_name} ${employee.last_name} Username: ${employee.username} ID: ${employee.id} Manager Id: ${employee.manager_id}`}</li>
    ))
    const [ state, setState ] = useState("none")
    
    let content
    if (state === "show") {
        getEmployees()
        content = transactionList
    } else {
        content = null
    }

    

    return (
        <Container className="show_employees">
            <button onClick={()=>{
                if (state === "none"){
                    setState("show")
                } else if (state === "show") {
                    setState("none")
                }
            }} className="employees_button">Get Employees</button>
            {content}
        </Container> 
        )
}