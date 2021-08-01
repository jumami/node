import Firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBINNO2uNfRNMEjjM65jRzbCKZ-dYVTK6A",
    authDomain: "netflix-2-98ec4.firebaseapp.com",
    projectId: "netflix-2-98ec4",
    storageBucket: "netflix-2-98ec4.appspot.com",
    messagingSenderId: "45830043848",
    appId: "1:45830043848:web:dee0c5a488cd6403c20dfd"

};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };