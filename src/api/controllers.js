const User = require('./models/user')
const Word = require('./models/word')
const Session = require('./models/session')

module.exports = {
  createUser(req, res, next) {
    const login = req.body.login.toLowerCase();
    const password = req.body.password;

    User.create({ login, password })
      .then(({ login }) => {
        return Session.create({ owner: login });
      })
      .then(({ id }) => {
        res.status(200).send(id);
      })
      .catch(next);
  },
  addWord(req, res, next) {
    const eng = req.body.eng.toLowerCase();
    const rus = req.body.rus.toLowerCase();
    const details = req.body.details;

    Word.create({ eng, rus, details, addedBy: res.locals.login })
      .then(() => {
        res.status(200).end()
      })
      .catch(next)
  },
  getWord(req, res, next) {

  },
  deleteWord(req, res, next) {

  },
  updateWord(req, res, next) {

  },
  createSession(req, res, next) {
    const login = req.body.login.toLowerCase();
    const password = req.body.password;

    User.findByPk(login)
      .then(user => {
        if (user.password === password) {
          return Session.create({ owner: login });
        }
      })
      .then(({ id }) => {
        res.status(200).send(id)
      })
      .catch(next)
  }
}
