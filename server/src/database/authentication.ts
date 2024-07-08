import { pool } from "./config";
import { RowDataPacket } from "mysql2";
import { userSchema, validateUser } from "./schema/jms";

interface User extends RowDataPacket {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  refreshToken: string;
  token: string;
}

export async function userEmailExist(email: string) {
  const [user] = await pool.query<User[]>(
    `SELECT COUNT(*) as count FROM user WHERE email = ?`,
    [email]
  );

  if (user[0].count > 0) {
    return false;
  }

  return true;
}

export async function userEmail(email: string) {
  const [user] = await pool.query<User[]>(
    `SELECT * FROM user WHERE email = ?`,
    [email]
  );

  if (!user) return false;

  return user[0];
}

export async function userCreate(data: validateUser) {
  const schemaUser = userSchema.safeParse(data);

  if (!schemaUser.success) {
    return {
      error: schemaUser.error.flatten().fieldErrors,
    };
  }

  const dataUser = schemaUser.data;

  try {
    const user = await pool.query("INSERT INTO user SET ?", [dataUser]);
    return user;
  } catch (error) {
    return {
      error: `There's something wrong within ${dataUser}`,
    };
  }
}

export async function userUpdate(
  refreshToken: string,
  token: string,
  id: number
) {
  try {
    const users = await pool.query(
      "UPDATE user SET refreshToken = ?, token = ? WHERE id = ?",
      [refreshToken, token, id]
    );
    return users;
  } catch (error) {
    return {
      error: `There's something wrong within ${error}`,
    };
  }
}
