const express = require("express")
const {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
} = require("../controllers/projectController")
const requireSecretKey = require('../middleware/requireSecretKey')


const router = express.Router()

//GET all project
router.get('/', getProjects)

//GET single project
router.get('/:id', getProject)

//Require Secret Key
router.use(requireSecretKey)

//POST project

router.post('/', createProject)

//DELETE project
router.delete('/:id', deleteProject)
 
//UPDATE project
router.patch('/:id', updateProject)

module.exports = router