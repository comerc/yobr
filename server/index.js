const express = require('express')
const path = require('path')
const api = require('./api')

const server = express()

server.get('/', (req, res) => {
  res.send('OK')
})

api(server)

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`)
})
