require('dotenv').config()
const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
  {
    username: 'Bruno',
    title: 'Post'
  },
  {
    username: 'Bruno 2',
    title: 'Post'
  }
]

app.get('/posts', authToken, (request, response) => {
  response.json(posts.filter((post) => post.username == request.user.name))
})

app.post('/login', (request, response) => {
  const username = request.body.username
  const user = { name: username }

  const accessToken = jwt.sign(user, process.env.TK_SECRET)
  response.json({accessToken: accessToken})
})

function authToken(request, response, next){
  const authHeader = request.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if(token == null) return response.sendStatus(401)

  jwt.verify(token, process.env.TK_SECRET, (err, user) => {
    if(err) return response.status(403).send(err)

    request.user = user
    next()
  })
}

const port = 3000
app.listen(port)