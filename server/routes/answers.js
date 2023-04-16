import express from 'express'
import {postAnswer, deleteAnswer} from '../controllers/answers.js'
import login from '../middlewares/login.js';

const router=express.Router();

router.patch('/post/:id', postAnswer)
router.patch('/delete/:id', deleteAnswer)

export default router