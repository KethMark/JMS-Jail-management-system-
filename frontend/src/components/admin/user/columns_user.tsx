import { ColumnDef } from "@tanstack/react-table"

export type Users = {
  id: string
  Username: string
  role: string
  token: string
  refreshToken: string
  createdAt: string
  createBy: string
}

export const columnsUser: ColumnDef<Users>[] = [
  {
    accessorKey: "Username",
    header: "Username",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "refreshToken",
    header: "RefreshToken",
  },
  {
    accessorKey: "token",
    header: "Token",
  },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
  {
    accessorKey: "createBy",
    header: "CreatedBy",
  },
]
