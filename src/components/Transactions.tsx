import { useNavigate } from "react-router-dom";

// import { Transaction } from "../types"

export default function Transactions() {
    const navigate = useNavigate();

    async function getTransactions() {
        const res = await fetch("https://manager-dash-uof4.onrender.com/transaction", {
            method : "GET",
            headers : {"Content-Type": "application/json"},
        })
        if(res.ok) {
            const data = await res.json();
            console.log(data);
            navigate('/')
        } else window.alert("Request Failed")
    }

    return (
        <button onClick={getTransactions} value="Get Transactions"/>
        
    )
}