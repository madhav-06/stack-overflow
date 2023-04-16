import express from 'express'
import {AskQuestion, getAllQuestions, deleteQuestion, voteQuestion} from '../controllers/questions.js'
import login from '../middlewares/login.js'

const router=express.Router()

router.post('/ask', AskQuestion)
router.get('/get', getAllQuestions)
router.delete('/delete/:id', deleteQuestion)
router.patch('/vote/:id', voteQuestion)

export default router