const express = require('express')
const router = express.Router()

const CRUD = require('../models/CRUD')
const Styles = new CRUD('styles')
const auth = require('../middlewares/auth')

router.get('/', (req, res) => {
  Styles.get()
    .then((data) => res.send(data))
    .catch((err) => res.send(err))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Styles.getById(id)
    .then((data) => res.send(data))
    .catch((err) => res.send(err))
})

router.post('/', auth.validateFirebaseIdToken, (req, res) => {
  const data = req.body
  if(!data) {
    res.status(400).send('no data attached')
  }
  Styles.create(data)
    .then((data) => res.send(data))
    .catch((err) => res.send(err))
})

router.put('/:id', auth.validateFirebaseIdToken, (req, res) => {
  const id = req.params.id
  const data = req.body
  if(!data) {
    res.status(400).send('no data attached')
  }
  Styles.update(id, data)
  .then((data) => res.send(data))
  .catch((err) => res.send(err))
})

router.delete('/:id', auth.validateFirebaseIdToken, (req, res) => {
  const id = req.params.id
  Styles.remove(id)
    .then((id) => res.send(id))
    .catch((err) => res.send(err))
})

module.exports = router
