import { z } from "zod";

export const userSchema = z.object({
  id: z.number().int().min(1).optional(),
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  email: z.string().email(),
  password: z.string().min(1),
  token: z.string().min(1).optional(),
  refreshToken:z.string().min(1).optional()
}) 

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

export const visitorSchema = z.object({
  id: z.number().int().min(1).optional(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  relationship: z.string().min(2),
  visitdate: z.string().min(4),
  visitTime: z.string().min(4),
  duration: z.string().min(2)
})