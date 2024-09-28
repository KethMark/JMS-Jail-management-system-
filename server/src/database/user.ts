import { RowDataPacket } from "mysql2";
import { pool } from "./config";

export interface User extends RowDataPacket {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  refreshToken: string
}

export async function userRefreshToken(id: number) {
  const [user] = await pool.query<User[]>(
    `
      SELECT * FROM user WHERE id = ?
    `,
    [id]
  )

  if(!user) return false

  return user[0]
}