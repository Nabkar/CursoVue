import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf8YFMFV2vmTtbhCpO7_JuRBRuWEyPO7E",
  authDomain: "albeldaju8.firebaseapp.com",
  databaseURL: "https://albeldaju8.firebaseio.com",
  projectId: "albeldaju8",
  storageBucket: "albeldaju8.appspot.com",
  messagingSenderId: "903673172630",
  appId: "1:903673172630:web:2273914d1e2510509de8b7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export {db}