import {  useEffect, useMemo, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "../../types";
import { Container } from "react-bootstrap";
import { Table } from "../Table"

interface EmployeeProps {
  employeeId: string
}

export default function Employees( { employeeId }: EmployeeProps ):JSX.Element {
  
  const [ employeeData, setEmployeeData ] = useState<Employee[]>([])

  useEffect(()=>{
    async function fetchData() {
      const data = await handleEmployeeData()
      setEmployeeData([data])
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
      {
        header: "Username",
        cell: (row) => row.renderValue(),
        accessorKey: "username"
      },
    ],
    []
  )

  async function handleEmployeeData() {
    const res = await fetch(`https://manager-dash-uof4.onrender.com/employees/${employeeId}`, {
      method: "GET",
    });
    if(res.ok){
      const data = await res.json()
      return data
    } else window.alert("Employee Search Failed")
    
    
  }

  return (
    <Container className="show_employees">
      <Table data={employeeData} columns={cols} showNavigation={false}/>
    </Container>
  )
}