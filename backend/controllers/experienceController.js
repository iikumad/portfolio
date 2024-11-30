const Experience = require('../models/experienceModel')
const mongoose = require('mongoose')


//get all experiences
const getExperiences = async (req,res) => {
    const experiences = await Experience.find()
    res.status(200).json(experiences)
}

//get single experience
const getExperience = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such experience'})
    }

    const experience = await Experience.findById(id)
    if (!experience)
    {
        return res.status(404).json({error:'no such experience'})
    }
    res.status(200).json(experience)
}

//create new experience 
const createExperience = async (req,res) => {
    const {date,title,location,description} = req.body
    
    //add to db
    try {
        const experience = await Experience.create({date,title,location,description})
        res.status(200).json(experience)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete experience

const deleteExperience = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such experience'})
    }
    const experience = await Experience.findByIdAndDelete(id)
    if (!experience)
    {
        return res.status(404).json({error:'no such experience'})
    }
    res.status(200).json(experience)
}

//update experience

const updateExperience = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such experience'})
    }
    const experience = await Experience.findOneAndUpdate({_id:id},
        {
            ...req.body
        }
    )
    if (!experience) 
    {
        return res.status(404).json({error:'no such experience'})
    }
    res.status(200).json(experience)
}
module.exports = {
    getExperiences,
    getExperience,
    createExperience,
    deleteExperience,
    updateExperience
}