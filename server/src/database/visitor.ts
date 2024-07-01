import { pool } from "./config";
import { validateVisitor, visitorSchema } from "./schema/jms";

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
  
  export async function visitorsCreate(data: validateVisitor) {
  
    const schemaVisitor = visitorSchema.safeParse({
      ...data
    })
  
    if(!schemaVisitor.success) {
      return {
        error: schemaVisitor.error.flatten().fieldErrors,
      }
    }
  
    const dataVisitor = schemaVisitor.data
  
    try {
      
      const visitors = await pool.query("INSERT INTO visitors SET ?", [dataVisitor]);
      return visitors;
  
    } catch (error) {
      return {
        error: `There's something wrong within ${dataVisitor}`
      }
    }
  }
  
  export async function visitorsUpdate(data: validateVisitor, id: string) {
  
    const schemaVisitor = visitorSchema.safeParse({
      ...data
    })
  
    if(!schemaVisitor.success) {
      return {
        error: schemaVisitor.error.flatten().fieldErrors
      }
    }
  
    const dataVisitor = schemaVisitor.data
  
    try {
  
      const visitors = await pool.query("UPDATE visitors SET ? WHERE id = ?", [
        dataVisitor,
        id,
      ]);
      
      return visitors;
  
    } catch (error) {
      return {
        error: `Their's something wrong within ${dataVisitor}`
      }
    }
  }
  
  export async function visitorsDelete(id: string) {
    const visitors = await pool.query("DELETE FROM visitors WHERE id = ?", [id]);
    return visitors;
  }