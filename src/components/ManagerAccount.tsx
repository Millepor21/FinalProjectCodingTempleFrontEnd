
import { useContext, useEffect, useMemo, useState } from "react";
import { ColumnDef } from '@tanstack/react-table'
import { useNavigate } from "react-router-dom";
import { Manager } from "../types"
import { Table } from "./Table";
import { UserContext } from "../contexts/UserProvider";

export default function ManagerAccount() {

    const [ manager, setManager ] = useState<Manager[]>([{"username": "", "password": ""}])
    const navigate = useNavigate()
    async function fetchData() {
        await findManager();
    }
    const { user } = useContext(UserContext)

    useEffect(()=>{
        if(!localStorage.getItem("token")){
        navigate("/")
        } else {
            waitForData();
        }
        },[]
    )
        async function waitForData(){
            await fetchData()
        }
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
            {
                header: "Username",
                cell: (row) => row.renderValue(),
                accessorKey: "username"
            }
        ],
        []
    )

    async function findManager(): Promise<Manager> {
        console.log('in findManager');
        const res = await fetch("https://manager-dash-uof4.onrender.com/manager/account", {
            method: "GET",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
            },
        })
        console.log("through request");
        if (!res.ok) {
            window.alert("No permissions")
        }
        const data: Manager = await res.json()
        const dataArray: Manager[] = [data]
        console.log(dataArray);
        setManager(dataArray)
        return data
    
    }
    
  return (
    <div>
        <Table data={manager} columns={cols} />
    </div>
  )
}
