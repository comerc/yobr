const express = require('express')
const api = require('./api')

const server = express()

// Add headers
server.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
})

server.get('/', (req, res) => {
  res.send('OK')
})

api(server)

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`)
})
