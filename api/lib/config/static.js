'use strict'

module.exports = {
  app: {
    start: 'app started successfully',
    health: {
      path: '/health'
    },
    body: {
        limit: '50mb'
    }
  },
  http: {
    status: {
      success: 200,
      badRequest: 400,
      unauthorized: 401,
      notFound: 404,
      preconditionFailed: 412
    }
  },
  response: {
    code: {
      connection: 100,
      query: 101,
      format: 102,
      serviceDow: 103,
      badRequest: 114
    }
  },
  request: {
    search: {
      query: 'news technology'
    },
    pageSize: 10,
    page: 5,
    orderBy: 'newest',
    urlSearch: '/search'
  }
}
