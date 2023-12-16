function Serve(app) {
  const port = process.env.PORT || 3000

  app.listen(port, () => {
    console.log(`Server Started @ http://localhost:${port}`)
  })
}

module.exports = Serve
