import { ColumnDef } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { Transaction } from "../types";
import { useEffect, useMemo, useState } from "react";
import { Table } from "./Table";

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTransactions();
      setTransactions(data);
    }
    fetchData();
  }, []);

  const cols = useMemo<ColumnDef<Transaction>[]>(
    () => [
      {
        header: "ID",
        cell: (row) => row.renderValue(),
        accessorKey: "id",
      },
      {
        header: "Employee ID",
        cell: (row) => row.renderValue(),
        accessorKey: "employee_id",
      },
      {
        header: "Customer Name",
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
        cell: (row) =>
          DateTime.fromSQL(row.getValue() as string).toLocaleString(
            DateTime.DATE_SHORT
          ),
        accessorKey: "date",
      },
    ],
    []
  );

  async function getTransactions(): Promise<Transaction[]> {
    const res = await fetch("http://127.0.0.1:5000/transaction", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      window.alert("Request Failed");
    }
    const data = await res.json();
    return data;
  }

  return (
    <div>
      <Table data={transactions} columns={cols} />
    </div>
  );
}
