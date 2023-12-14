const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
  res.send('a')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server Started @ http://localhost:${port}`)
})