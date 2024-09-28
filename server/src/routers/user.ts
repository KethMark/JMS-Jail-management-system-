import express from "express";
import { getUserToken, getUserRefreshToken } from '../controllers/user'
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

// router.use(authMiddleware);

router.get('/token', getUserToken)

router.post('/refreshToken', getUserRefreshToken)

export default router