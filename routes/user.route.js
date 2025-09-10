//how to create express api
import express from 'express';
import { deleteUser } from '../controller/user.controller';

//creating amp point using express router

const router = express.Router();
router.get("test", deleteUser);
export default router;