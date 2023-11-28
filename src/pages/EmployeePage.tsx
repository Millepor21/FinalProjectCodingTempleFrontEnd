import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Employees from "../components/Employee"
import Employee from "../components/Employee"

export default function EmployeePage() {

    const navigate = useNavigate()
    const [ choice, makeChoice ] = useState("")
    useEffect(()=>{
        if(!localStorage.getItem("token")){
        navigate("/")
        }
    },[])

    const chooseList = () => {
        makeChoice("list")
    }
    const chooseOne = () => {
        makeChoice("one")
    }
    let content;
    if(choice === "list"){
        content = (
            <Employee />
        )
    } else if (choice === "one") {
        content = (
            <Employees />
        )
    } else content = null

  return (
    <div className="login_container">
        <button onClick={chooseList} className="login_button">Get list of Employees</button>
        <button onClick={chooseOne} className="login_button">Get a specific Employee</button>
    </div>
  )
}
