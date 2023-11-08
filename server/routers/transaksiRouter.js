const router = require('express').Router()
const {transaksiController} = require('../controllers')
const { verifyToken } = require('../middleware/auth')

router.post('/add-transaction', verifyToken, transaksiController.createTransaction) //register event

module.exports = router