
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAg2c95uwiV40ynqNoyTZ8v5BMuK3qw6yI",
  authDomain: "e-commshopp.firebaseapp.com",
  projectId: "e-commshopp",
  storageBucket: "e-commshopp.appspot.com",
  messagingSenderId: "998962767530",
  appId: "1:998962767530:web:d7592e58f09f64099e52d3",
  measurementId: "G-972V779NXV"
};


const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig