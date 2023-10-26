import { useNavigate } from "react-router-dom";

// import { Transaction } from "../types"

function Transactions() {
    const navigate = useNavigate();

    async function getTransactions() {
        const res = await fetch("http://127.0.0.1:5000/transaction", {
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

export default Transactions