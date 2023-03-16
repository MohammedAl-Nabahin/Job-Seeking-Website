const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', (req, res) => {
  const { username, password } = req.body
  const user = router.db.get('users').find({ username, password }).value()
  if (user) {
    res.json({ success: true })
  } else {
    res.status(401).json({ error: 'Invalid username or password' })
  }
})

server.use(router)

server.listen(3001, () => {
  console.log('JSON Server is running')
})