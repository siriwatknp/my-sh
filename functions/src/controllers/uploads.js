const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({
  storage: multer.memoryStorage(),
})
const responseMiddleware = require('../middlewares/response')
const storage = require('../models/storage')

// router.post('/', (req, res) => res.send('hi'))

router.post('/', upload.array('files'), storage.uploadFile)

module.exports = router