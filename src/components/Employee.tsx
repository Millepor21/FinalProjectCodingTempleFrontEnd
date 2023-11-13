
import { Container } from "react-bootstrap";
import { Employee } from "../types"
import { useEffect } from "react";

export default function Employees() {


    useEffect(()=>{
        getEmployees()
    },[])


    async function handleEmployees() {
        const res = await fetch("http://127.0.0.1:5000/employee", {
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

    

    return (
        <Container className="show_employees">
            <ul>
                {transactionList}
            </ul>
        </Container> 
        )
}