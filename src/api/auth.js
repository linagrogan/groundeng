const Session = require('./models/session')

module.exports = (req, res, next) => {
  const sessionId = req.header('sessid')

  Session.findByPk(sessionId)
    .then(session => {
      res.locals.login = session.owner

      next()
    })
    .catch(next)
}
