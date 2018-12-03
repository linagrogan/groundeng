const User = require('./models/user')
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
  addWord() {

  },
  getWord() {

  },
  deleteWord() {

  },
  updateWord() {

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
      .then(({id}) => {
        res.status(200).send(id)
      })
      .catch(next)
  }
}
