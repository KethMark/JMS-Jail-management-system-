import express from "express";
import * as inmateControllers from '../controllers/inmate'
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.route('/')
      .get(authMiddleware, inmateControllers.getInmates )
      .post(authMiddleware, inmateControllers.createInmates)

router.route('/counts')
      .get(authMiddleware, inmateControllers.getCountInmates)
      
router.route('/:inmatesId')
      .get(authMiddleware, inmateControllers.getInmate)
      .put(authMiddleware, inmateControllers.updateInmates)
      .delete(authMiddleware, inmateControllers.deleteInmates)

export default router;