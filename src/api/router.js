const router = require('express').Router()
const User = require('./models/user')

router.post('/users', (req, res, next) => {
  const login = req.body.login.toLowerCase()
  const password = req.body.password

  User.create({login, password})
    .then(() => {
      res.status(200).end()
    })
    .catch(next)
})

router.use((err, req, res, next) => {
  console.error('err')
  res.status(500).json(err)
})

module.exports = router
