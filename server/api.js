const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const pify = require('pify')
const merge = require('lodash/merge')
const isEmpty = require('lodash/isEmpty')

const HTTP_CREATED = 201
const HTTP_ISE = 500
const HTTP_BAD_REQUEST = 400

const jsonParser = bodyParser.json()
// можно иначе: path.join(process.cwd(), 'server/data/storage.json')
const fileName = path.resolve('server/data/storage.json')

const currentUser = {
  id: 3678,
  nick: 'comerc',
  name: 'comerc',
  avatar: '//habrastorage.org/getpro/habr/avatars/29a/d0a/09c/29ad0a09c3fa9790266c746e43635ca7.jpg',
  specialization: 'Пользователь',
  contacts: [{ type: 'GitHub', url: 'https://github.com/comerc' }],
  votingCounter: 50,
  karma: 8.0,
  rating: -2.35,
}

const api = server => {
  server.get('/posts/', (req, res) => {
    pify(fs.readFile)(fileName)
      .then(posts => {
        res.set('Content-Type', 'application/json; charset=utf-8')
        res.send(posts)
      })
      .catch(error => {
        console.log('error', error)
        res.sendStatus(HTTP_ISE)
      })
  })
  server.get('/posts/reset/', (req, res) => {
    const posts = require('./data/posts')
    pify(fs.writeFile)(fileName, JSON.stringify(posts), 'utf-8')
      .then(() => res.sendStatus(HTTP_CREATED))
      .catch(error => {
        console.log('error', error)
        res.sendStatus(HTTP_ISE)
      })
  })
  server.get('/post/:id(\\d+)', (req, res) => {
    const id = parseInt(req.params.id, 10)
    pify(fs.readFile)(fileName)
      .then(JSON.parse)
      .then(posts => {
        const post = posts.find(element => element.id === id)
        if (!post) {
          throw new Error('Post not found')
        }
        res.set('Content-Type', 'application/json; charset=utf-8')
        res.send(JSON.stringify(post))
      })
      .catch(error => {
        console.log('error', error)
        res.sendStatus(HTTP_ISE)
      })
  })
  server.post('/post/', jsonParser, (req, res) => {
    let post = req.body
    if (isEmpty(post)) {
      return res.sendStatus(HTTP_BAD_REQUEST)
    }
    pify(fs.readFile)(fileName)
      .then(JSON.parse)
      .then(posts => {
        if (post.id) {
          const index = posts.findIndex(element => element.id === post.id)
          if (posts[index].author.id !== currentUser.id) {
            throw new Error('Invalid user')
          }
          delete post.published
          delete post.author
          delete post.viewsCount
          delete post.favoritesCount
          posts[index] = post = merge(posts[index], post)
        } else {
          // const uuid = require('uuid')
          // post.id = uuid()
          post.id = +Math.random().toString().slice(2)
          post.published = new Date().valueOf()
          post.author = currentUser
          post.viewsCount = 0
          post.favoritesCount = 0
          if (post.tags === void 0) {
            post.tags = []
          }
          posts.push(post)
        }
        return posts
      })
      .then(posts => pify(fs.writeFile)(fileName, JSON.stringify(posts), 'utf-8'))
      .then(() => {
        res.set('Content-Type', 'application/json; charset=utf-8')
        res.send(JSON.stringify(post))
      })
      .catch(error => {
        console.log('error', error)
        res.sendStatus(HTTP_ISE)
      })
  })
}

module.exports = api
