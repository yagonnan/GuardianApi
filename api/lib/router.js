const express = require('express')
const router = express.Router()
const article = require('./controller/article')

router.get('/', article.getAll)
router.get('/single', article.getData)

module.exports = router
