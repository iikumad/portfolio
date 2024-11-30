const express = require("express")
const {
    getExperiences,
    getExperience,
    createExperience,
    deleteExperience,
    updateExperience
} = require("../controllers/experienceController")
const requireSecretKey = require('../middleware/requireSecretKey')


const router = express.Router()

//GET all experiences
router.get('/', getExperiences)

//GET single experience
router.get('/:id', getExperience)

//Require Secret Key
router.use(requireSecretKey)

//POST experience

router.post('/', createExperience)

//DELETE experience
router.delete('/:id', deleteExperience)
 
//UPDATE experience
router.patch('/:id', updateExperience)


module.exports = router