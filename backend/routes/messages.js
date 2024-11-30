const express = require("express")
const {
    getMessages,
    getMessage,
    createMessage,
    deleteMessage,
    updateMessage
} = require("../controllers/messageController")



const router = express.Router()

//GET all messages
router.get('/', getMessages)

//GET single messages
router.get('/:id', getMessage)

//POST messages

router.post('/', createMessage)

//DELETE messages
router.delete('/:id', deleteMessage)
 
//UPDATE messages
router.patch('/:id', updateMessage)

module.exports = router