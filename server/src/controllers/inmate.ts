import { Inmate } from "../models/jms";
import { Response, Request } from "express"
import { inmates, inmatesId, inmatesCreate, inmatesDelete, inmatesUpdate } from "../database/inmate"
import { validateInmate } from "../database/schema/jms";

export async function getInmates(req: Request, res: Response) {
  const inmate = await inmates()
  res.send(inmate)
}

export async function createInmates(req: Request, res: Response) {
  const newInmate: validateInmate = req.body
  const inmate = await inmatesCreate(newInmate)
  res.send(inmate)
}

export async function getInmate(req: Request, res: Response) {
  const id = req.params.inmatesId;
  const inmate = await inmatesId(id)
  res.send(inmate)
}

export async function deleteInmates(req: Request, res: Response) {
  const id = req.params.inmatesId;
  const inmate = await inmatesDelete(id)
  res.send(inmate)
}

export async function updateInmates(req: Request, res: Response) {
  const id = req.params.inmatesId
  const updateInmate: validateInmate = req.body
  const inmate = await inmatesUpdate(updateInmate, id)
  res.send(inmate)
}