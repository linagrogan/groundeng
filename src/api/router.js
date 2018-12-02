const router = require('express').Router()

// router.use('/users', require('./module'))

require('./reporters')(router)

module.exports = router
