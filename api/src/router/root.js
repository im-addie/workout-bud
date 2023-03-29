const root = (app) => {
  app.get('/', (req, res) => {
    res.json({message: 'root of workout bud!'})
  })
}

module.exports = root