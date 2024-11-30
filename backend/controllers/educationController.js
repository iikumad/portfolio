const Education = require('../models/educationModel')
const mongoose = require('mongoose')


//get all educations
const getEducations = async (req,res) => {
    const educations = await Education.find()
    res.status(200).json(educations)
}

//get single education
const getEducation = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such education'})
    }

    const education = await Education.findById(id)
    if (!education)
    {
        return res.status(404).json({error:'no such education'})
    }
    res.status(200).json(education)
}

//create new education 
const createEducation = async (req,res) => {
    const {date,title,type,description} = req.body
    
    //add to db
    try {
        const education = await Education.create({date,title,type,description})
        res.status(200).json(education)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete education

const deleteEducation = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such education'})
    }
    const education = await Education.findByIdAndDelete(id)
    if (!education)
    {
        return res.status(404).json({error:'no such education'})
    }
    res.status(200).json(education)
}

//update education

const updateEducation = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such education'})
    }
    const education = await Education.findOneAndUpdate({_id:id},
        {
            ...req.body
        }
    )
    if (!education) 
    {
        return res.status(404).json({error:'no such education'})
    }
    res.status(200).json(education)
}
module.exports = {
    getEducations,
    getEducation,
    createEducation,
    deleteEducation,
    updateEducation
}