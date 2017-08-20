import * as express from 'express'
import * as cluster from 'cluster'
import * as os from 'os'

const numCPUs = os.cpus().length

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker: any, code: any, signal: any) => {
    console.log(`worker ${worker.process.pid} died`)
  })
} else {
  // const express = require('express')
  const server = express()

  // const helmet = require('helmet')
  // server.use(helmet())

  // Add headers
  server.use(function(req: any, res: any, next: () => void) {
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

  server.get('/', (req: any, res: any) => {
    res.send('OK' + os.cpus().length + (cluster.isMaster ? '1' : '0'))
  })

  // const api = require('./api')
  // api(server)

  const PORT = process.env.PORT || 9090

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`)
  })
}
