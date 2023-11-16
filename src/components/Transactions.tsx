import { ColumnDef } from '@tanstack/react-table'
import { Transaction } from "../types"
import { useEffect, useMemo, useState } from "react";
import { Table } from './Table';


export default function Transactions() {

    const [ transactions, setTransactions ] = useState<Transaction[]>([])
    
    const cols = useMemo<ColumnDef<Transaction>[]>(
        () => [
          {
            header: "Name",
            cell: (row) => row.renderValue(),
            accessorKey: "customer_name",
          },
          {
            header: "Amount",
            cell: (row) => row.renderValue(),
            accessorKey: "amount",
          },
          {
            header: "Date",
            cell: (row) => row.renderValue(),
            accessorKey: "date",
          },
        ],
        []
      );

    

    async function getTransactions():Promise<Transaction[]> {
        const res = await fetch("http://127.0.0.1:5000/transaction", {
            method : "GET",
            headers : {"Content-Type": "application/json"},
        })
        if(!res.ok) {
            window.alert("Request Failed")
        }
        const data = await res.json();
        return data
    }

    useEffect(() => {
        async function fetchData() {
            const data = await getTransactions()
            setTransactions(data)
        }
        fetchData()
    }, [])
    
    
    return (
        <div>
            <Table data={transactions} columns={cols}/>
        </div> 
        )
}