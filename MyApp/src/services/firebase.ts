import firebase from "firebase";
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyC8wIlo6FPtMQeaeuI8bDngq__63L8RpwI",
  authDomain: "letmeask-283a1.firebaseapp.com",
  databaseURL: "https://letmeask-283a1-default-rtdb.firebaseio.com",
  projectId: "letmeask-283a1",
  storageBucket: "letmeask-283a1.appspot.com",
  messagingSenderId: "315994131909",
  appId: "1:315994131909:web:90e5a17c4f57920d8d8fac"
};

firebase.initializeApp(firebaseConfig)

const auth=firebase.auth()
const database=firebase.database()

export {firebase,auth,database}


// const firebaseConfig = {
//   apiKey: process.env.REACT_API_KEY,
//   authDomain: process.env.REACT_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_DATABASE_URL,
//   projectId: process.env.REACT_PROJECT_ID,
//   storageBucket: process.env.REACT_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,
// };