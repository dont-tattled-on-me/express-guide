const cors = require('cors')
const bodyParser = require('body-parser')

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

function Middleware(app, exp) {
  app.use(cors(corsOptions))

  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  )
}

module.exports = Middleware
