import { pool } from "./config";

export async function user() {
  const user = await pool.query("SELECT * FROM user");
  return user[0];
}


export async function userId(id: string) {
  const user = await pool.query(`SELECT * FROM user WHERE id = ?`, [id]);
  return user[0];
}


export async function userSessionToken(sessionToken: string) {
  const user = await pool.query(`SELECT sessionToken FROM user WHERE = ?`, [
    sessionToken,
  ]);
  return user[0];
}


export async function userDelete(id: string) {
  const user = await pool.query("DELETE FROM user WHERE id = ? ", [id]);
  return user;
}