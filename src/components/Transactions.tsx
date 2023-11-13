
import { Transaction } from "../types"
import { useEffect } from "react";


export default function Transactions() {
    
    

    async function getTransactions() {
        const res = await fetch("http://127.0.0.1:5000/transaction", {
            method : "GET",
            headers : {"Content-Type": "application/json"},
        })
        if(res.ok) {
            const data = await res.json();
            return data
        } else window.alert("Request Failed")
    }
    function ulCreator(array:Transaction[]){
        const ul = document.createElement('ul')
        document.body.appendChild(ul)
        for(let i=0; i<array.length;i++){
            const li = document.createElement('li')
            li.innerHTML = `<li id=${array[i].id}>Name: ${array[i].customer_name}</li>`
        }
    }

    
    return (
        <div>
        </div> 
        )
}