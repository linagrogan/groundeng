const router = require('express').Router()
const User = require('./models/user')
const Session = require('./models/session')
const auth = require('./auth')

router.post('/users', (req, res, next) => {
  const login = req.body.login.toLowerCase()
  const password = req.body.password

  User.create({ login, password })
    .then(({login}) => {
      return Session.create({owner: login})
    })
    .then(({id}) => {
      res.status(200).send(id)
    })
    .catch(next)
})

router.get('/users/:user', (req, res, next) => {
  console.log(req.params.user)
  User.findByPk(req.header.login)
    .then(user => {
      console.log(user)
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      next(err)
    })
})

router.use((err, req, res, next) => {
  console.error('err')
  res.status(500).json(err)
})

module.exports = router
