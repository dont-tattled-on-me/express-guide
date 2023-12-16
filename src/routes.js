async function Routes(app) {
  app.get('/', (req, res) => {
    res.send('a')
  })

  app.post('/post', (req, res) => {
    const body = req.body

    res.send(body.user)
  })
}

module.exports = Routes
