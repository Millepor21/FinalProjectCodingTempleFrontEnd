
import { useEffect, useMemo, useState } from "react";
import { ColumnDef } from '@tanstack/react-table'
import { useNavigate } from "react-router-dom";
import { Manager } from "../types"
import { Table } from "./Table";

export default function ManagerAccount() {

    const [ manager, setManager ] = useState<Manager[]>([{"username": "", "password": ""}])
    const navigate = useNavigate()
    async function fetchData() {
        await findManager();
    }

    useEffect(()=>{
        if(!localStorage.getItem("token")){
        navigate("/")
        } else {
            fetchData();
        }
        }
    )

    const cols = useMemo<ColumnDef<Manager>[]>(
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
        ],
        []
    )

    async function findManager(): Promise<Manager> {
        console.log('in findManager');
        const res = await fetch("http://127.0.0.1:5000/manager/account", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
        console.log("through request");
        if (!res.ok) {
            window.alert("No permissions")
        }
        const data: Manager = await res.json()
        const dataArray: Manager[] = [data]
        setManager(dataArray)
        return data
    
    }
    
  return (
    <div>
        <Table data={manager} columns={cols} />
    </div>
  )
}
