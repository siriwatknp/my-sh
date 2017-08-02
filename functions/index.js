const functions = require('firebase-functions');
const serviceAccount = require('./my-showcases-service-account.json')

const admin = require('firebase-admin')
// admin.initializeApp(functions.config().firebase)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://react-app-ce8ba.firebaseio.com',
})
const express = require('express');
const app = express();

const uploadsController = require('./src/controllers/uploads')
const stylesController = require('./src/controllers/styles')
const usersController = require('./src/controllers/users')
const costumesController = require('./src/controllers/costumes')

app.use('/uploads', uploadsController)
app.use('/styles', stylesController)
app.use('/users', usersController)
app.use('/costumes', costumesController)

exports.app = functions.https.onRequest(app)

