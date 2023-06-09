import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/questions.js'
import answerRoutes from './routes/answers.js'

const app=express()
dotenv.config()

app.use(express.json({limit:'30mb', extended:true}))
app.use(express.urlencoded({limit:'30mb', extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("This is a stack overflow clone API")
})

app.use('/users', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answers', answerRoutes)

const PORT=process.env.PORT || 5000

const DATABASE_URL=process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>app.listen(PORT, ()=>{console.log(`server running on port ${PORT}`)}))
        .catch((err)=>{console.log(err.message)})