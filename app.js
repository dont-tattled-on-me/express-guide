const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

app.get('/', (req, res) => {
  res.send('a')
})

app.post('/post', (req, res) => {
  const body = req.body

  res.send(body.user)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server Started @ http://localhost:${port}`)
})
