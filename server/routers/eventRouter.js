const router = require('express').Router()
const { eventController } = require('../controllers')
const { verifyToken } = require('../middleware/auth')

router.post('/register-event', verifyToken, eventController.registerEvent) //register event
router.get('/get-event', eventController.getEvent)
router.get('/recent-event', eventController.getRecentEvent) //register event
router.get('/get-event-format', eventController.getEventByFormat) //register event
router.get('/get-event-byid/:id', eventController.getEventById) //register event

module.exports = router