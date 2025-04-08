import { addChild, getChildrenByParent } from '../controllers/childController.js';

import authMiddleware from '../middleware/auth.js';
import express from 'express';

const ChildRouter = express.Router();

ChildRouter.post('/add-child', authMiddleware, addChild);

ChildRouter.get('/get-children', authMiddleware, getChildrenByParent);

export default ChildRouter;
