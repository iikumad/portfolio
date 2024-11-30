const Project = require('../models/projectModel')
const mongoose = require('mongoose')


//get all projects
const getProjects = async (req,res) => {
    const project = await Project.find()
    res.status(200).json(project)
}

//get single project
const getProject = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such project'})
    }

    const project = await Project.findById(id)
    if (!project)
    {
        return res.status(404).json({error:'no such project'})
    }
    res.status(200).json(project)
}

//create new project 
const createProject = async (req,res) => {
    const {title,description,technologies,link,image} = req.body
    
    //add to db
    try {
        const project = await Project.create({title,description,technologies,link,image})
        res.status(200).json(project)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete project

const deleteProject = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such project'})
    }
    const project = await Project.findByIdAndDelete(id)
    if (!project)
    {
        return res.status(404).json({error:'no such project'})
    }
    res.status(200).json(project)
}

//update project

const updateProject = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'no such project'})
    }
    const project = await Project.findOneAndUpdate({_id:id},
        {
            ...req.body
        }
    )
    if (!project) 
    {
        return res.status(404).json({error:'no such project'})
    }
    res.status(200).json(project)
}
module.exports = {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
}