const admin = require('firebase-admin')

module.exports.createCustomToken = function(uid) {
  return new Promise((resolve, reject) => {
    admin.auth().createCustomToken(uid)
      .then((token) => resolve({ token }))
      .catch(reject)
  })
}

module.exports.getUserByUID = function(uid) {
  return admin.auth().getUser(uid)
}

module.exports.getUserByEmail = function(email) {
  return admin.auth().getUserByEmail(email)
}

module.exports.createUser = function(profile) {
  // profile
  //   email: "user@example.com",
  //   emailVerified: false,
  //   password: "secretPassword",
  //   displayName: "John Doe",
  //   photoURL: "http://www.example.com/12345678/photo.png",
  //   disabled: false
  return admin.auth().createUser(profile)
}
