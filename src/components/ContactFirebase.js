import firebase from 'firebase';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAhuuewH8hnAylODpbruLgm4q6JCDP3Z1s",
    authDomain: "personal-website-contact-3e3b3.firebaseapp.com",
    projectId: "personal-website-contact-3e3b3",
    storageBucket: "personal-website-contact-3e3b3.appspot.com",
    messagingSenderId: "321722429741",
    appId: "1:321722429741:web:9b3ab28388e2f87b7863a4"
  };

  const firedatabase = firebase.initializeApp(firebaseConfig)
  export default firedatabase.database().ref();