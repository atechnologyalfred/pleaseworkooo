import express from 'express';
import { getUser, postUser, getTodo, postTodo, deleteUser, updateTodo, deleteTodo } from '../controller/controller.js';
const router = express.Router();
router.get('/', getUser)
router.post('/', postUser)
router.delete('/:id', deleteUser)
router.get('/todo', getTodo)
router.post('/todo', postTodo)
router.put('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)

export default router;