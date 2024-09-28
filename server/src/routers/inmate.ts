import express from "express";
import * as inmateControllers from '../controllers/inmate'
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);

router.route('/')
      .get( inmateControllers.getInmates )
      .post( inmateControllers.createInmates)

router.route('/counts')
      .get( inmateControllers.getCountInmates)
      
router.route('/:inmatesId')
      .get( inmateControllers.getInmate)
      .put( inmateControllers.updateInmates)
      .delete( inmateControllers.deleteInmates)

export default router;