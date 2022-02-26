// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzV-xzZ9pf09qKoG_LY7JqLhwCBUgEvF4",
  authDomain: "slack-clone-8dc8c.firebaseapp.com",
  projectId: "slack-clone-8dc8c",
  storageBucket: "slack-clone-8dc8c.appspot.com",
  messagingSenderId: "601097595222",
  appId: "1:601097595222:web:fa1751338dbce605e48ef7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
