"use client";

import { ColumnDef } from "@tanstack/react-table"
import { PaymentMethod, paymentMethodsDetails, Transaction } from "@/types/transaction";

import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge";
import { capitalizeFirstLetter } from "@/lib/utils";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { DataTableRowActions } from "@/components/data-table/data-table-row-actions";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    )
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    )
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const color = row.getValue("type") === "debit" ? "bg-green-400 dark:bg-green-600" : "";

      return (
        <Badge className={`hover:` + color + " " + color}>
          {capitalizeFirstLetter(row.getValue("type"))}
        </Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const color = row.getValue("category") === "income" ? "bg-green-400 dark:bg-green-600" : "bg-red-700 text-white";

      return (
        <Badge className={`hover:` + color + " " + color}>
          {capitalizeFirstLetter(row.getValue("category"))}
        </Badge>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Payment Method",
    cell: ({ row }) => {
      const method: PaymentMethod = row.getValue("paymentMethod");
      const formattedMethod = paymentMethodsDetails[method];

      return (
        <div className="flex items-center">
          <formattedMethod.icon className="w-4 h-4 mr-2" />
          {capitalizeFirstLetter(formattedMethod.label)}
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      const color = row.getValue("category") === "income" ? "text-green-600" : "text-red-600";

      return <div className={`text-right font-semibold ` + (color)}>{formatted}</div>
    },
  },
  {
    accessorKey: "transactionId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="External ID" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} acessorKey="transactionId" />
  }
];
