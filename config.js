import firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyA89Wn1g27Ta5-zO5qFh6C7ZeH6JjybX6Y",
  authDomain: "emergencyapp-bc065.firebaseapp.com",
  projectId: "emergencyapp-bc065",
  storageBucket: "emergencyapp-bc065.appspot.com",
  messagingSenderId: "314002021651",
  appId: "1:314002021651:web:61777c3af8fe83bfdd4ee6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 export default firebase.firestore()