const Message = require('../models/messageModel')
const mongoose = require('mongoose')
const validator = require('validator')

//get all messages
const getMessages = async (req,res) => {
    const message = await Message.find()
    res.status(200).json(message)
}

//get single message
const getMessage = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such message'})
    }

    const message = await Message.findById(id)
    if (!message)
    {
        return res.status(404).json({error:'no such message'})
    }
    res.status(200).json(message)
}

//create new message 
const createMessage = async (req,res) => {
    const  {email, name, content} = req.body
    let emptyFields = []

  if(!name) {
    emptyFields.push('name')
  }
  if(!email) {
    emptyFields.push('email')
  }
  if(!content) {
    emptyFields.push('content')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
    //add to db
    try {
        const message = await Message.create({email, name, content})
        res.status(200).json(message)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete message

const deleteMessage = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such message'})
    }
    const message = await Message.findByIdAndDelete(id)
    if (!message)
    {
        return res.status(404).json({error:'no such message'})
    }
    res.status(200).json(message)
}

//update message

const updateMessage = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such message'})
    }
    const message = await Message.findOneAndUpdate({_id:id},
        {
            ...req.body
        }
    )
    if (!message) 
    {
        return res.status(404).json({error:'no such message'})
    }
    res.status(200).json(message)
}
module.exports = {
    getMessages,
    getMessage,
    createMessage,
    deleteMessage,
    updateMessage
}