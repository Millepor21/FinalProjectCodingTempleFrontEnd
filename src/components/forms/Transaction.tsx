import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Transaction } from "../../types";

export default function CreateTransaction() {
  const navigate = useNavigate();

  const amountField = useRef<HTMLInputElement>(null);
  const customerNameField = useRef<HTMLInputElement>(null);
  const employeeIdField = useRef<HTMLInputElement>(null);

  function handleTransactionData(e: FormEvent<HTMLElement>) {
    e.preventDefault();
    const transactionData: Transaction = {
      amount: amountField.current!.value,
      customer_name: customerNameField.current!.value,
      employee_id: employeeIdField.current!.value,
    };
    clearForm();
    createTransaction(transactionData);
    navigate("/");
  }

  async function createTransaction(transactionData: Transaction) {
    const res = await fetch("https://manager-dash-uof4.onrender.com/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")!}`,
      },
      body: JSON.stringify(transactionData),
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      navigate("/");
    } else window.alert("Transaction Creation Failed");
  }

  function clearForm() {
    (amountField.current!.value = ""),
      (customerNameField.current!.value = ""),
      (employeeIdField.current!.value = "");
  }

  return (
    <form onSubmit={handleTransactionData}>
      <label htmlFor="amount">Amount</label><br/>
      <input type="text" name="amount" ref={amountField} required/><br/>
      <label htmlFor="customerName">Customer Name</label><br/>
      <input type="text" name="customerName" ref={customerNameField} required/><br/>
      <label htmlFor="employeeId">Employee Id</label><br/>
      <input type="text" name="employeeId" ref={employeeIdField} required/><br/>
      <input type="submit" value="create"/>
    </form>
  );
}
