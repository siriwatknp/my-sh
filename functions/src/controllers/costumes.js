const express = require('express')
const router = express.Router()

const CRUD = require('../models/CRUD')
const Costumes = new CRUD('costumes')
const auth = require('../middlewares/auth')

router.get('/', (req, res) => {
  Costumes.get()
  .then((data) => res.send(data))
  .catch((err) => res.send(err))
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Costumes.getById(id)
  .then((data) => res.send(data))
  .catch((err) => res.send(err))
})

router.post('/', auth.validateFirebaseIdToken, (req, res) => {
  const data = req.body
  if(!data) {
    res.status(400).send('no data attached')
  }
  Costumes.create(data)
  .then((data) => res.send(data))
  .catch((err) => res.send(err))
})

router.put('/:id', auth.validateFirebaseIdToken, (req, res) => {
  const id = req.params.id
  const data = req.body
  if(!data) {
    res.status(400).send('no data attached')
  }
  Costumes.update(id, data)
  .then((data) => res.send(data))
  .catch((err) => res.send(err))
})

router.delete('/:id', auth.validateFirebaseIdToken, (req, res) => {
  const id = req.params.id
  Costumes.remove(id)
  .then((id) => res.send(id))
  .catch((err) => res.send(err))
})

module.exports = router
