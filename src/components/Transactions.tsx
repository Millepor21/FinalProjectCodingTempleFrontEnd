import { useReactTable } from '@tanstack/react-table'
import { Transaction } from "../types"
import { useEffect } from "react";


export default function Transactions() {
    
    

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
    
    
    return (
        <div>
        </div> 
        )
}