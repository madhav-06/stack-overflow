import express from 'express'
import { login, signup } from '../controllers/login.js'
import { getAllUsers, updateProfile } from '../controllers/users.js'

const router=express.Router()

router.post('/signup', signup)
router.post('/login', login)

router.get('/getallusers', getAllUsers)
router.patch('/update/:id', updateProfile)

export default router