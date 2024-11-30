const express = require("express")
const {
    getEducations,
    getEducation,
    createEducation,
    deleteEducation,
    updateEducation
} = require("../controllers/educationController")
const requireSecretKey = require('../middleware/requireSecretKey')


const router = express.Router()

//GET all education
router.get('/', getEducations)

//GET single education
router.get('/:id', getEducation)

//Require Secret Key
router.use(requireSecretKey)

//POST education

router.post('/', createEducation)

//DELETE education
router.delete('/:id', deleteEducation)
 
//UPDATE education
router.patch('/:id', updateEducation)


module.exports = router