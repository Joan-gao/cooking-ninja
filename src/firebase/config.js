import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCiukV3ODHaglaILcAbxFfze99DTosfvSQ',
  authDomain: 'cooking-ninja-site-655fa.firebaseapp.com',
  projectId: 'cooking-ninja-site-655fa',
  storageBucket: 'cooking-ninja-site-655fa.appspot.com',
  messagingSenderId: '640500188754',
  appId: '1:640500188754:web:fea55617076709d6b5418b',
  measurementId: 'G-0XXMSQ38CB',
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }


