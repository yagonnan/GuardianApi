'use strict'

const debug = require('debug')('backend:app')
const error = require('debug')('backend:app:error')
const config = require('./config')
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const router = require('./router')
const cors = require('cors')

module.exports = () => {
  // health check
  app.get(config.static.app.health.path, (req, res) => res.send('OK!'))
  app.use(cors())
  // routing
  app.use(bodyparser.json(config.static.app.body))
  // router
  app.use(router)
  return app
    .listen(config.env.port)
    .on('error', err => _handleErr(err))
}

function _handleErr (err) {
  debug(_handleErr.name)
  error(err.message)
}
