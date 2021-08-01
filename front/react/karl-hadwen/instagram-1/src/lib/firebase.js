import Firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANLIVC1rjJmuROhQow_pJp5ccD9jN1Dgc",
    authDomain: "instagram-1-986bc.firebaseapp.com",
    projectId: "instagram-1-986bc",
    storageBucket: "instagram-1-986bc.appspot.com",
    messagingSenderId: "1024349588140",
    appId: "1:1024349588140:web:837a161b6fa1fa707b6d09"    
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };

// apiKey: "AIzaSyANLIVC1rjJmuROhQow_pJp5ccD9jN1Dgc",
// authDomain: "instagram-1-986bc.firebaseapp.com",
// projectId: "instagram-1-986bc",
// storageBucket: "instagram-1-986bc.appspot.com",
// messagingSenderId: "1024349588140",
// appId: "1:1024349588140:web:837a161b6fa1fa707b6d09"  