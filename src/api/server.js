const express = require('express')

const env = process.env.NODE_ENV || 'production'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', require('./router'))

app.get('*', (req, res, next) => {
  res.redirect('/#/404')
})

module.exports = app
