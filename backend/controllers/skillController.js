const Skill = require('../models/skillModel')
const mongoose = require('mongoose')


//get all skill
const getSkills = async (req,res) => {
    const skill = await Skill.find()
    res.status(200).json(skill)
}

//get single skill
const getSkill = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such skill'})
    }

    const skill = await Skill.findById(id)
    if (!skill)
    {
        return res.status(404).json({error:'no such skill'})
    }
    res.status(200).json(skill)
}

//create new skill 
const createSkill = async (req,res) => {
    const {title,icon} = req.body
    
    //add to db
    try {
        const skill = await Skill.create({title,icon})
        res.status(200).json(skill)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete skill

const deleteSkill = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such skill'})
    }
    const skill = await Skill.findByIdAndDelete(id)
    if (!skill)
    {
        return res.status(404).json({error:'no such skill'})
    }
    res.status(200).json(skill)
}

//update skill

const updateSkill = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such skill'})
    }
    const skill = await Skill.findOneAndUpdate({_id:id},
        {
            ...req.body
        }
    )
    if (!skill) 
    {
        return res.status(404).json({error:'no such skill'})
    }
    res.status(200).json(skill)
}
module.exports = {
    getSkills,
    getSkill,
    createSkill,
    deleteSkill,
    updateSkill
}