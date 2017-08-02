const admin = require('firebase-admin')

const getIdToken = (bearer) => {
  // ex. authorization = Bearer {token}
  // OAuth 2 standard
  return bearer.split('Bearer ')[1]
}

module.exports.validateFirebaseIdToken = function(req, res, next) {
  if(
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer ')
  ) {
    console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
      'Make sure you authorize your request by providing the following HTTP header:',
      'Authorization: Bearer <Firebase ID Token>');
    res.status(401).send('Unauthorized')
  }

  const token = getIdToken(req.headers.authorization)
  console.log('token', token)

  admin.auth().verifyIdToken(token)
  .then((decodedToken) => {
    console.log('ID Token correctly decoded', decodedToken);
    req.user = decodedToken
    next()
  })
  .catch((error) => res.send(error))
}