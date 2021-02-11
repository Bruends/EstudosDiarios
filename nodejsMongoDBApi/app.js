const express = require('express')
const subscriberRouter = require('./routes/subscribers')
const app = express()
const mongoose = require('mongoose')

require('dotenv/config')

app.use(express.json())
app.use('/subscribers', subscriberRouter)

// DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected!')
)

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', ()=> console.log('server started'))

//listen
const port = 3000 
app.listen(port, ()=> {
  console.log(port)
})