import express from "express";
import * as inmateControllers from '../controllers/inmate'
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.route('/')
      .get( inmateControllers.getInmates )
      .post(authMiddleware, inmateControllers.createInmates)

router.route('/counts')
      .get( inmateControllers.getCountInmates)
      
router.route('/:inmatesId')
      .get( inmateControllers.getInmate)
      .put(authMiddleware, inmateControllers.updateInmates)
      .delete(authMiddleware, inmateControllers.deleteInmates)

export default router;