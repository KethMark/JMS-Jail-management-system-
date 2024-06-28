import { Request, Response } from "express"
import { Visitors } from "../models/jms";
import { visitors, visitorsId, visitorsCreate, visitorsDelete, visitorsUpdate } from "../database/config";

export async function getVisitors(req: Request , res: Response) {
    const visitor = await visitors()
    res.send(visitor)
}

export async function createVisitors(req: Request , res: Response) {
    const newVisitor: Visitors = req.body
    const visitor = await visitorsCreate(newVisitor)
    res.send(visitor)
}

export async function getVisitor(req: Request , res: Response) {
    const id = req.params.visitorsId
    const visitor = await visitorsId(id)
    res.send(visitor)
}

export async function deleteVisitors(req: Request , res: Response) {
    const id = req.params.visitorsId
    const visitor = await visitorsDelete(id)
    res.send(visitor)
}

export async function updateVisitors(req: Request , res: Response) {
    const id = req.params.visitorsId
    const updateVisitor: Visitors = req.body
    const visitor = await visitorsUpdate(updateVisitor, id)
    res.send(visitor)
}