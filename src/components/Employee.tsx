
import { Container } from "react-bootstrap";
import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "../types"
import { useEffect, useMemo, useState } from "react";
import { Table } from "./Table";

export default function Employees() {

    const [ employees, setEmployees ] = useState<Employee[]>([])

    useEffect(()=>{
        async function fetchData() {
            const data = await handleEmployees()
            setEmployees(data)
        }
        fetchData()
    },[])

    const cols = useMemo<ColumnDef<Employee>[]>(
        () => [
            {
                header: "ID",
                cell: (row) => row.renderValue(),
                accessorKey: "id"
            },
            {
                header: "Name",
                cell: (row) => row.renderValue(),
                accessorFn: (row) => `${row.first_name} ${row.last_name}` 
            },
            {
                header: "Manager ID",
                cell: (row) => row.renderValue(),
                accessorKey: "manager_id"
            },
        ],
        []
    )


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
    
    

    

    return (
        employees.length>10 ? <Container className="show_employees">
            <Table data={employees} columns={cols} showNavigation={true}/>
        </Container> 
        : <Container className="show_employees">
            <Table data={employees} columns={cols}/>
        </Container> 
        )
}