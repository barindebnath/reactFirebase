import firebase from "firebase/app";
import "firebase/database";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAhyLqQJiKLn6LY3ythwFKn91G_mCbiwcw",
  authDomain: "game1-23ea0.firebaseapp.com",
  databaseURL: "https://game1-23ea0.firebaseio.com",
  projectId: "game1-23ea0",
  storageBucket: "game1-23ea0.appspot.com",
  messagingSenderId: "289286328767",
  appId: "1:289286328767:web:e880cfea790a4fef31d10a",
  measurementId: "G-LRBKF17E8D",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database();
