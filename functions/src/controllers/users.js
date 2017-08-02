const express = require('express')
const router = express.Router()
const users = require('../models/users')

router.route('/')
.get((req, res) => {
  const email = req.query.email
  if(!email){
    res.status(400).send('email is undefined.')
  }
  users.getUserByEmail(email)
    .then((user) => res.send(user))
    .catch((err) => res.send(err))
})
.post((req, res) => {
  const profile = req.body
  users.createUser(profile)
    .then((user) => res.send(user))
    .catch((err) => res.send(err))
})

router.get('/:uid', (req, res) => {
  const uid = req.params.uid
  users.getUserByUID(uid)
    .then((user) => res.send(user))
    .catch((err) => res.send(err))
})

router.post('/token', (req, res) => {
  const uid = req.body.uid
  console.log('uid', uid)
  users.createCustomToken(uid)
    .then(({ token }) => res.send(token))
    .catch((err) => res.send(err))
})


module.exports = router