const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', require('./router'))

app.get('*', (req, res, next) => {
  res.redirect('/#/404')
})

require('./dbconnection').sync({
  force: true,
  // logging: false
})
  .then(() => {
    console.log('Connected and synced with PostgreSQL')
    const port = 1337

    app.listen(port)
      .on('listening', () => {
        console.log(`Server started on port ${port}`)
      })
  })
