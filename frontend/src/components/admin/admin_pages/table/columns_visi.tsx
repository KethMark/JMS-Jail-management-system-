import { ColumnDef } from "@tanstack/react-table"

export type Visitor = {
  id: string
  fullname: string
  relation: string
  visitDate: string
  visitTime: string
  duration: string
  status: boolean
}

export const columnsVisitors: ColumnDef<Visitor>[] = [
  {
    accessorKey: "fullname",
    header: "Fullname",
  },
  {
    accessorKey: "relation",
    header: "Relation",
  },
  {
    accessorKey: "visitDate",
    header: "Visit Date",
  },
  {
    accessorKey: "visitTime",
    header: "Visit Time",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
