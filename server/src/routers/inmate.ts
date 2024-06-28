import express from "express";
import * as inmateControllers from '../controllers/inmate'

const router = express.Router();

router.route('/')
      .get(inmateControllers.getInmates )
      .post(inmateControllers.createInmates)
      
router.route('/:inmatesId')
      .get(inmateControllers.getInmate)
      .put(inmateControllers.updateInmates)
      .delete(inmateControllers.deleteInmates)

export default router;