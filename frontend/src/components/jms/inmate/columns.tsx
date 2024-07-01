import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-header";
import { cases, genders, numbers } from "../../../lib/data";
import { Inmates } from "../../../lib/type";

export const columnsInmate: ColumnDef<Inmates>[] = [
  {
    accessorKey: "fullname",
    header: "Fullname",
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date of Birth",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Gender"} props={genders}/>
    ),
    cell: ({ row }) => {
      const inmate = genders.find(
        (inmate) => inmate.value === row.getValue("gender")
      )

      if(!inmate) {
        return null
      }

      return <span>{inmate.label}</span>

    },
    filterFn: ( row, id, value ) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: "height",
    header: "Height",
  },
  {
    accessorKey: "bodyMarks",
    header: "Body Marks",
  },
  {
    accessorKey: "crime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Case"} props={cases}/>
    ),
    cell: ({ row }) => {
      const inmate = cases.find(
        (inmate) => inmate.value === row.getValue("crime")
      )

      if(!inmate) {
        return null
      }

      return <span>{inmate.label}</span>

    },
    filterFn: ( row, id, value ) => {
      return value.includes(row.getValue(id))
    }
  },
  {
    accessorKey: "sentenceStartDate",
    header: "Sentence Start",
  },
  {
    accessorKey: "sentenceEndDate",
    header: "Sentence End",
  },
  {
    accessorKey: "cellNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Cell Number"} props={numbers}/>
    ),
    cell: ({ row }) => {
      const inmate = numbers.find(
        (inmate) => inmate.value === row.getValue("cellNumber")
      )

      if(!inmate) {
        return null
      }

      return <span>{inmate.label}</span>

    },
    filterFn: ( row, id, value ) => {
      return value.includes(row.getValue(id))
    }
  },
];
