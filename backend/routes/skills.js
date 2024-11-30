const express = require("express")
const {
    getSkills,
    getSkill,
    createSkill,
    deleteSkill,
    updateSkill
} = require("../controllers/skillController")
const requireSecretKey = require('../middleware/requireSecretKey')


const router = express.Router()

//GET all skills
router.get('/', getSkills)

//GET single skill
router.get('/:id', getSkill)

//Require Secret Key
router.use(requireSecretKey)

//POST skill

router.post('/', createSkill)

//DELETE skill
router.delete('/:id', deleteSkill)
 
//UPDATE skill
router.patch('/:id', updateSkill)


module.exports = router