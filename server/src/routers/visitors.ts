import express from "express"
import * as visitorControllers from "../controllers/visitors"
import authMiddleware from "../middleware/authMiddleware"

const router = express.Router()

router.use(authMiddleware);

router.route('/')
      .get( visitorControllers.getVisitors)
      .post( visitorControllers.createVisitors)

router.route('/:visitorsId')
      .get( visitorControllers.getVisitor)
      .put( visitorControllers.updateVisitors)
      .delete( visitorControllers.deleteVisitors)

export default router;