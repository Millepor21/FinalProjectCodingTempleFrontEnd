import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Employees from "../components/forms/Employees"
import EmployeeTable from "../components/Employee"
import { Container } from "react-bootstrap"

export default function EmployeePage() {

    const navigate = useNavigate()
    const [ choice, makeChoice ] = useState("")
    useEffect(()=>{
        if(!localStorage.getItem("token")){
        navigate("/")
        }
    },[])
    const employeeIdField = useRef<HTMLInputElement>(null);
    
    let content;
    const chooseOne = () => {
        makeChoice("one")
    }
    if(choice === "one"){
        content = (
            <Employees employeeId={employeeIdField.current!.value}/>
        )
    } else content = null
  return (
    <Container>
        <EmployeeTable />
        <form onSubmit={chooseOne}>
            <label htmlFor="employee_id">Employee ID</label><br />
            <input type="text" name="employee_id" ref={employeeIdField} required/><br />
            <input type="submit" value="Search" />
        </form>
        {content}
    </Container>
  )
}
