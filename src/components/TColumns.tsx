import { ColumnDef } from '@tanstack/react-table'
import { Transaction } from '../types'

const cols = useMemo<ColumnDef<Transaction>[]>(
    () => [
        {
            header: 'Name',
            cell: (row) => row.renderValue(),
            accessorKey: 'customer_name',
        },
        {
            header: 'Amount',
            cell: (row) => row.renderValue(),
            accessorKey: 'amount',
        },
        {
            header: 'Date',
            cell: (row) => row.renderValue(),
            accessorKey: 'date',
        },
    ],
    []
)