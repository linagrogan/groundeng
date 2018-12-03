const router = require('express').Router()
const auth = require('./auth')
const controllers = require('./controllers')

/**
 * USERS
 */
router.post('/users', controllers.createUser)

/**
 * SESSIONS
 */
router.post('/sessions', controllers.createSession)

//   _   |~  _
//  [_]--'--[_]
//  |'|""`""|'|
//  | | /^\ | |
//  |_|_|I|_|_|
//
// маршруты ниже требуют авторизации!

router.use(auth)

/**
 * WORDS
 */
router.post('/words', controllers.addWord)
router.get('/words', controllers.listWords)
router.route('/words/:word')
  .get(controllers.getWord)
  .delete(controllers.deleteWord)
  .put(controllers.updateWord)

/**
 * ERRORS
 */
router.use((err, req, res, next) => {
  console.error('err')
  res.status(500).json(err)
})

module.exports = router
