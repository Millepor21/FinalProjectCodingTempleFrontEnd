import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { Transaction } from "../types";
import { Container } from "react-bootstrap";

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  showNavigation?: boolean;
}

export const Table = <T extends object>({
  data,
  columns,
}: ReactTableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const cols = useMemo<ColumnDef<Transaction>[]>(
    () => [
      {
        header: "Name",
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
        cell: (row) => row.renderValue(),
        accessorKey: "date",
      },
    ],
    []
  );

  return (
    <Container>
      <div>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
            {/* {showFooter ? (
                            <tfoot>
                                {table.getFooterGroups().map((footerGroup) => (
                                    <tr key={footerGroup.id} >
                                        {footerGroup.headers.map((header) => (
                                            <th key={header.id} colSpan={header.colSpan}>
                                                {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.footer, header.getContext())}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </tfoot>
                        ) : null} */}
          </tbody>
        </table>
      </div>
      <div>
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          value={"First Page"}
        />
        <button 
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            value={'Previous'}
        />
        <button 
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            value={'Next'}
        />
        <button 
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            value={'Last Page'}
        />
      </div>
    </Container>
  );
};
