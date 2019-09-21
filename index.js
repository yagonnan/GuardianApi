'use strict'

;(async () => {
  // load config
  require('dotenv').config()
  const debug = require('debug')('backend:index')
  const error = require('debug')('backend:index:error')
  const config = require('./api/lib/config')
  // start the service
  try {
    require('./api/lib/app')()
    debug(config.static.app.start)
  } catch (e) {
    error(e.message)
  }
})()
