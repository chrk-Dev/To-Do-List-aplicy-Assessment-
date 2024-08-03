import express from 'express';
import {
  createTask, deleteAllTasks, deleteTask, getAllTasks, getCurrentUserTasks, updateTask,
  updateTaskTitle,
} from '../controllers/task.js';

const router = express.Router();

router.get('/all', getAllTasks);
router.post('/', createTask);
router.put('/:taskId', updateTask);
router.post('/:taskId', updateTaskTitle);
router.get('/myTasks', getCurrentUserTasks);
router.delete('/:taskId', deleteTask);

export default router;
