const router = require('express').Router()
const auth = require('./auth')
const controllers = require('./controllers')

/**
 * USERS
 */
router.post('/users', controllers.createUser)

//   _   |~  _
//  [_]--'--[_]
//  |'|""`""|'|
//  | | /^\ | |
//  |_|_|I|_|_|
// AUTHORIZATION
router.use(auth)

/**
 * WORDS
 */
router.post('/words', controllers.addWord)
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
