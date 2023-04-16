import Questions from '../models/question.js'
import mongoose from 'mongoose'

export const AskQuestion=async(req,res)=>{
    const postQuestionData=req.body;
    // const userId=req.userId
    const postQuestion=new Questions(postQuestionData);
    try {
        await postQuestion.save();
        res.status(200).json("Posted a question successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't post a new question")
    }
}

export const getAllQuestions=async(req,res)=>{
    try {
        const questionsList=await Questions.find();
        res.status(200).json(questionsList)
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const deleteQuestion=async(req,res)=>{
    const {id:_id}=req.params
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable')
    }
    try {
        await Questions.findByIdAndRemove(_id)
        res.status(200).json({message:"successfully deleted"})   
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const voteQuestion=async(req,res)=>{
    const {id:_id}=req.params
    const {value, userId}=req.body

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable')
    }

    try {
        const question=await Questions.findById(_id)
        const upIndex=question.upVote.findIndex((id)=>id===String(userId)) // finding the user id id there in the upvote array
        const downIndex=question.downVote.findIndex((id)=>id===String(userId)) // finding the user id id there in the upvote array
        
        if(value==='upVote'){
            if(downIndex!==-1){
                question.downVote=question.downVote.filter((id)=>id!==String(userId))
            }
            if(upIndex===-1){
                question.upVote.push(userId)
            }
            else{
                question.upVote=question.upVote.filter((id)=>id!==String(userId)) // if user already provided upvote and want to remove his vote from upvote
            }
        }
        else if(value==='downVote'){
            if(upIndex!==-1){
                question.upVote=question.upVote.filter((id)=>id!==String(userId))
            }
            if(downIndex===-1){
                question.downVote.push(userId)
            }
            else{
                question.downVote=question.downVote.filter((id)=>id!==String(userId)) // if user already provided upvote and want to remove his vote from upvote
            }
        }
        await Questions.findByIdAndUpdate(_id, question)
        res.status(200).json({message:"voted successfully"})
    } catch (error) {
        res.status(404).json({message:"id not found"})
    }
}