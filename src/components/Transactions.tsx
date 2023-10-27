
import { Transaction } from "../types"
import { useState } from "react";

export default function Transactions() {

    async function handleTransactions() {
        const res = await fetch("https://manager-dash-uof4.onrender.com/transaction", {
            method : "GET",
            headers : {"Content-Type": "application/json"},
        })
        if(res.ok) {
            const data = await res.json();
            return data
        } else window.alert("Request Failed")
    }

    async function getTransactions() {
        const transactions = await handleTransactions();
        const listTransactions: JSX.Element = (<ul>
            {
            transactions!.map(
                (transaction: Transaction) => (
                    <li
                    key={transaction.id}
                    >{`Amount: ${transaction.amount} Date: ${transaction.date} Customer Name: ${transaction.customer_name} Employee Id: ${transaction.employee_id}`}</li>
                )
            )
            }
        </ul>)
        return listTransactions
    }
    const [ state, setState ] = useState("none")
    
        if (state === "none"){
            setState("show")
        } else if (state === "show") {
            setState("none")
        }
    
    let content
    if (state === "show") {
        content = getTransactions()
    } else {
        content = null
    }

    

    return (
        <>
            <button onClick={()=>{
                if (state === "none"){
                    setState("show")
                } else if (state === "show") {
                    setState("none")
                }
            }} value="Get Transactions"/>
            {content}
        </> 
        )
}