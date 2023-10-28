
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
    let transactions:{};
    let transactionArray:Transaction[] = []
    function getTransactions():Transaction[]{
        async()=>{
        transactions = await handleTransactions()
        let transaction: any
        for(transaction in transactions){
            transactionArray.push(transaction)
        } 
        }
    return transactionArray}
    const transactionList = transactionArray.map(transaction =>(
        <li key={transaction.id}>{`Customer Name: ${transaction.customer_name} Amount: ${transaction.amount} Date: ${transaction.date} Employee Id: ${transaction.employee_id}`}</li>
    ))
    const [ state, setState ] = useState("none")
    
    let content
    if (state === "show") {
        getTransactions()
        content = transactionList
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
            }} className="transaction_button">Get Transactions</button>
            {content}
        </> 
        )
}