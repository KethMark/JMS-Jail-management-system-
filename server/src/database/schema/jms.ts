import { z } from "zod";

export const inmateSchema = z.object({
  id: z.number().int().min(1).optional(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  dateOfBirth: z.string().min(2),
  age: z.string().min(1),
  gender: z.string().min(4),
  height: z.string().min(2),
  bodyMarks: z.string().min(2),
  crime: z.string().min(2),
  sentenceStartDate: z.string().min(2),
  sentenceEndDate: z.string().min(2),
  cellNumber: z.string().min(1),
});

export type validateInmate = z.infer<typeof inmateSchema>

export const visitorSchema = z.object({
  id: z.number().int().min(1).optional(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  relationship: z.string().min(2),
  visitdate: z.string().min(4),
  visitTime: z.string().min(4),
  duration: z.string().min(2)
})

export type validateVisitor = z.infer<typeof visitorSchema>