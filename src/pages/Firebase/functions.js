import { fireBaseAuth } from './config'

export const firebaseObserveAuth = () => new Promise((resolve, reject) => {
  return fireBaseAuth().onAuthStateChanged((user) => {
    if(user){
      resolve(user)
    } else {
      reject({ code: 'auth/not-login', message: 'client: user is not logged in.' })
    }
  })
})

export const signIn = ({ email, password }) => {
  console.log('email', email)
  console.log('password', password)
  return fireBaseAuth().signInWithEmailAndPassword(email, password)
}

export const signOut = () => fireBaseAuth().signOut()

export const getIdToken = () => {
  const user = fireBaseAuth().currentUser
  if(user){
    return user.getIdToken()
  }
  return Promise.resolve('no-id-token')
}