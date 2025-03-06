import express from 'express';
import { getUser, postUser, getTodo, postTodo } from '../controller/controller.js';
const router = express.Router();
router.get('/', getUser)
router.post('/', postUser)
router.get('/todo', getTodo)
router.post('/todo', postTodo)

export default router;