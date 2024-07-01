import { Request, Response } from "express"
import { visitors, visitorsId, visitorsCreate, visitorsDelete, visitorsUpdate } from "../database/visitor";
import { validateVisitor } from "../database/schema/jms";

export async function getVisitors(req: Request , res: Response) {
  try {
    const visitor = await visitors()
    res.send(visitor)
  } catch (error) {
    res.status(404).send("Their's something wrong")
    console.log(error)
  }
}

export async function createVisitors(req: Request , res: Response) {
  try {
    const newVisitor: validateVisitor = req.body
    const visitor = await visitorsCreate(newVisitor)
    res.send(visitor)
  } catch (error) {
    res.status(404).send("Their's something wrong")
    console.log(error)
  }
}

export async function getVisitor(req: Request , res: Response) {
  try {
    const id = req.params.visitorsId
    const visitor = await visitorsId(id)
    res.send(visitor)
  } catch (error) {
    res.status(404).send("Their's something wrong")
    console.log(error)
  }
}

export async function deleteVisitors(req: Request , res: Response) {
  try {
    const id = req.params.visitorsId
    const visitor = await visitorsDelete(id)
    res.send(visitor)
  } catch (error) {
    res.status(404).send("Their's something wrong")
    console.log(error)
  }
}

export async function updateVisitors(req: Request , res: Response) {
  try {
    const id = req.params.visitorsId
    const updateVisitor: validateVisitor = req.body
    const visitor = await visitorsUpdate(updateVisitor, id)
    res.send(visitor)
  } catch (error) {
    res.status(404).send("Their's something wrong")
    console.log(error)
  }
}