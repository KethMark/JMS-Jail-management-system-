import mysql, { createPool } from "mysql2/promise";
import dotenv from "dotenv";
import { Visitors, Inmate } from "../models/jms";

dotenv.config();

const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

const dbConnect = async () => {
  try {
    await pool.getConnection();
  } catch (error) {
    console.log("Theirs something wrong");
    throw error;
  }
};

export { dbConnect, pool };

//Inmates

export async function inmates() {
  const inmates = await pool.query(
    `SELECT *,firstName, lastName, CONCAT_WS(' ', firstName, lastName) fullname FROM inmates`
  );
  return inmates[0];
}

export async function inmatesId(id: string) {
  const inmates = await pool.query(
    `
    SELECT * FROM inmates WHERE id = ?
  `,
    [id]
  );
  return inmates[0];
}

export async function inmatesCreate(data: Inmate) {
  const inmates = await pool.query("INSERT INTO inmates SET ?", [data]);
  return inmates;
}

export async function inmatesUpdate(data: Inmate, id: string) {
  const inmates = await pool.query("UPDATE inmates SET ? WHERE id = ?", [
    data,
    id,
  ]);
  return inmates;
}

export async function inmatesDelete(id: string) {
  const inmates = await pool.query("DELETE FROM inmates WHERE id = ?", [id]);
  return inmates;
}

//Visitors

export async function visitors() {
  const visitors = await pool.query(
    `SELECT *,firstName, lastName, CONCAT_WS(' ', firstName, lastName) fullname FROM visitors`
  );
  return visitors[0];
}

export async function visitorsId(id: string) {
  const visitors = await pool.query(
    `
    SELECT * FROM visitors WHERE id = ?
  `,
    [id]
  );
  return visitors[0];
}

export async function visitorsCreate(data: Visitors) {
  const visitors = await pool.query("INSERT INTO visitors SET ?", [data]);
  return visitors;
}

export async function visitorsUpdate(data: Visitors, id: string) {
  const visitors = await pool.query("UPDATE visitors SET ? WHERE id = ?", [
    data,
    id,
  ]);
  return visitors;
}

export async function visitorsDelete(id: string) {
  const visitors = await pool.query("DELETE FROM visitors WHERE id = ?", [id]);
  return visitors;
}
