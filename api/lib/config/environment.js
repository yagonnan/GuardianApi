'use strict'

module.exports = {
  nodeEnv: process.env.NODE_ENV || 'production',
  port: +process.env.REACT_APP_SERVER_PORT || 3000,
  guardianApiUrl: process.env.GUARDIAN_API_URL,
  guardianApiKey: process.env.GUARDIAN_API_KEY
}
