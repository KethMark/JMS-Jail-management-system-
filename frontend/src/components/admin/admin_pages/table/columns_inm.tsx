import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { Button } from "../../../ui/button";
import { ChevronDown } from "lucide-react";

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
    header: ({ table }) => {

      const handleFilter = (value: any) => {
        table.getColumn("gender")?.setFilterValue(value)
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              Gender <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filter Age</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem  onSelect={() => handleFilter('Male')}>
                Male
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleFilter('Female')}>
                Female
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
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
    header: ({ table }) => {

      const handleFilter = (value: any) => {
        table.getColumn("gender")?.setFilterValue(value)
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              Case <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filter Case</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem  onSelect={() => handleFilter('Robbery')}>
                Robbery
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleFilter('Violations')}>
                Violations
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
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
    header: ({ table }) => {

      const handleFilter = (value: any) => {
        table.getColumn("gender")?.setFilterValue(value)
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              Cell Number <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filter Cell Number</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem  onSelect={() => handleFilter('1')}>
                1
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleFilter('2')}>
                2
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
