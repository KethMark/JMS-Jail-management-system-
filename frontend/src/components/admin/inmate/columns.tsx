import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-header";
import { cases, genders, numbers } from "../../../lib/data";

export type Inmate = {
  id: string;
  fullname: string;
  dateofbirth: string;
  age: string;
  gender: string;
  height: string;
  bodymarks: string;
  case: string;
  sentenceStartDate: string;
  sentenceEndDate: string;
  cellNumber: string;
};

export const columnsInmate: ColumnDef<Inmate>[] = [
  {
    accessorKey: "fullname",
    header: "Fullname",
  },
  {
    accessorKey: "dateofbirth",
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
    accessorKey: "bodymarks",
    header: "Body Marks",
  },
  {
    accessorKey: "case",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Case"} props={cases}/>
    ),
    cell: ({ row }) => {
      const inmate = cases.find(
        (inmate) => inmate.value === row.getValue("case")
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
