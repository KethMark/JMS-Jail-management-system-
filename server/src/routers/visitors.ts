import express from "express"
import * as visitorControllers from "../controllers/visitors"

const router = express.Router()

router.route('/')
      .get(visitorControllers.getVisitors)
      .post(visitorControllers.createVisitors)

router.route('/:visitorsId')
      .get(visitorControllers.getVisitor)
      .put(visitorControllers.updateVisitors)
      .delete(visitorControllers.deleteVisitors)

export default router;