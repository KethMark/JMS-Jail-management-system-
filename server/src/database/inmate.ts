import { pool } from "./config";
import { inmateSchema, validateInmate } from "./schema/jms";

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
  
  export async function inmatesCreate(data: validateInmate) {
  
    const schemaInmate = inmateSchema.safeParse({
      ...data
    })
  
    if(!schemaInmate.success) {
      return {
        error: schemaInmate.error.flatten().fieldErrors,
      }
    }
  
    const dataInmate = schemaInmate.data
  
    try {
      
      const inmates = await pool.query("INSERT INTO inmates SET ?", [dataInmate]);
      return inmates;
  
    } catch (error) {
      return {
        error: `There's something wrong within ${dataInmate}`
      }
    }
  }
  
  export async function inmatesUpdate(data: validateInmate, id: string) {
    
    const schemaInmate = inmateSchema.safeParse({
      ...data
    })
  
    if(!schemaInmate.success) {
      return {
        error: schemaInmate.error.flatten().fieldErrors,
      }
    }
  
    const dataInmate = schemaInmate.data
  
    try {
      
      const inmates = await pool.query("UPDATE inmates SET ? WHERE id = ?", [
        dataInmate,
        id,
      ]);
      return inmates;
  
    } catch (error) {
      return {
        error: `There's something wrong within ${dataInmate}`
      }
    }
  }
  
  export async function inmatesDelete(id: string) {
    const inmates = await pool.query("DELETE FROM inmates WHERE id = ?", [id]);
    return inmates;
  }