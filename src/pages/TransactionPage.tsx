import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Transactions from "../components/Transactions";
import CreateTransaction from "../components/forms/Transaction";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

export default function TransactionPage() {

    const [state, setState] = useState("null");
    const { user } = useContext(UserContext)
    console.log(user);
    const navigate = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("token")){
        navigate("/")
        }
    })

    const setTransactions = () => {
        setState("transactions");
    };

    const setTransaction = () => {
        setState("transaction");
    };

    let content;
    if (state === "transactions") {
        content = (
        <Container className="transactions">
            <Transactions/>
        </Container>
        
        )
    } else if (state === "transaction") {
        content = (
        <Container className="transaction">
            <CreateTransaction/>
        </Container>
        )
    } else {
        content = null;
    }


    return (
        <Container>
            <div className="transaction_choice">
                <button onClick={setTransactions} className="transactions_button">View Transactions</button>
                <button onClick={setTransaction} className="transactions_button">Create Transaction</button>
            </div>
            {content}
        </Container>
    )
  
}
