import { ColumnDef } from "@tanstack/react-table"
import { Visitors } from "../../../lib/type"

export const columnsVisitors: ColumnDef<Visitors>[] = [
  {
    accessorKey: "fullname",
    header: "Fullname",
  },
  {
    accessorKey: "relationship",
    header: "Relation",
  },
  {
    accessorKey: "visitdate",
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
]
