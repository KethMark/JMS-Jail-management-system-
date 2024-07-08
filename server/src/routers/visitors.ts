import express from "express"
import * as visitorControllers from "../controllers/visitors"
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router()

router.route('/')
      .get(authMiddleware, visitorControllers.getVisitors)
      .post(authMiddleware, visitorControllers.createVisitors)

router.route('/:visitorsId')
      .get(authMiddleware, visitorControllers.getVisitor)
      .put(authMiddleware, visitorControllers.updateVisitors)
      .delete(authMiddleware, visitorControllers.deleteVisitors)

export default router;