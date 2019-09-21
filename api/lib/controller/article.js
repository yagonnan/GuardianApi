'use strict'

const debug = require('debug')('backend:articles')
const config = require('../config')
const axios = require('axios')

module.exports = {
  getAll,
  getData
}

async function getAll (req, res) {
  debug(getAll.name)
  try {
    const params = {
      q: req.query.search || config.static.request.search.query,
      'api-key': config.env.guardianApiKey,
      'page-size': config.static.request.pageSize,
      'page': req.query.page || config.static.request.page,
      'order-by': req.query.orderBy || config.static.request.orderBy
    }
  
    const response = await axios({
      method: 'get',
      url: `${config.env.guardianApiUrl}${config.static.request.urlSearch}`,
      params
    })
  
    res.send(response.data)
  } catch (err) {
    res.status(config.error.apiError).send(err.message)
  }
}

async function getData (req, res) {
  debug(getData.name)
  try {
    if (!req.query.id) {
      res.status(config.error.badRequest).send(config.error.idNotFound)
    }
    const params = {
      'api-key': config.env.guardianApiKey
    }
  
    const response = await axios({
      method: 'get',
      url: `${config.env.guardianApiUrl}/${req.query.id}`,
      params
    })
  
    res.send(response.data)
  } catch (err) {
    res.status(config.error.apiError).send(err.message)
  }
}
