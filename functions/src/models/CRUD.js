const cuid = require('cuid')
const admin = require('firebase-admin')
const functions = require('firebase-functions')
const updateObject = require('../helpers/objectUtils').updateObject

module.exports = class {
  constructor(resource){
    this.resource = resource
  }

  get(path = '') {
    return admin.database().ref(`${this.resource}${path ? ('/' + path) : ''}`)
      .once('value')
      .then((snapshot) => {
        const result = snapshot.val()
        console.log('result', result)
        if(!result) {
          throw new Error('no result')
        }
        return result
      })
  }

  getById(id) {
    return this.get(id)
  }

  create(data) {
    const newId = cuid()
    const newData = updateObject(data, { id: newId })
    return new Promise((resolve, reject) => {
      admin.database().ref(`${this.resource}/${newId}`)
      .set(newData)
      .then(() => resolve(newData))
      .catch(reject)
    })
  }

  update(id, data) {
    const updatedData = updateObject(data, { id })
    return new Promise((resolve, reject) => {
      admin.database().ref(`${this.resource}/${id}`)
      .set(updatedData)
      .then(() => {
        resolve(updatedData)
      })
      .catch(reject)
    })
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      admin.database().ref(`${this.resource}/${id}`)
      .remove()
      .then(() => resolve(id))
      .catch(reject)
    })
  }
}
