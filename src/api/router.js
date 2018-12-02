const router = require('express').Router()
const User = require('./models/user')

router.post('/users', (req, res, next) => {
  User.create({
    login: 'asdf', password: 'asdfasf'
  })
    .then(({ login }) => {
      console.log(login)
      res.status(200).json({
        login
      })
    })
    .catch(next)
})

// require('./reporters')(router)

module.exports = router
