import express from "express";
import { login, logout, register } from '../controllers/authentication'

const router = express.Router();

router.post('/register', register)

router.post('/login', login)

router.put('/logout/:id', logout)

export default router