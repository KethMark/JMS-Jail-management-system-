import mysql, { createPool } from "mysql2/promise";
import dotenv from "dotenv";
import { validateInmate, inmateSchema, validateVisitor, visitorSchema } from "./schema/jms";

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