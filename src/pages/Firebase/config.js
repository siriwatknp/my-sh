import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCOEUP0WenLSE0T-cjRNa6m7oqMSI6tq3M",
  authDomain: "react-app-ce8ba.firebaseapp.com",
  databaseURL: "https://react-app-ce8ba.firebaseio.com",
  projectId: "react-app-ce8ba",
  storageBucket: "react-app-ce8ba.appspot.com",
  messagingSenderId: "552804122338"
}

firebase.initializeApp(config)

export const db = firebase.database()
export const fireBaseAuth = firebase.auth