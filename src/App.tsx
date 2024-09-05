import React from 'react';

//import Scss
import './assets/scss/themes.scss';

//imoprt Route
import Route from './Routes';

// Import Firebase Configuration file
import { initFirebaseBackend } from "./helpers/firebase_helper";

// Fake Backend 
//import fakeBackend from "./helpers/AuthType/fakeBackend";

// Activating fake backend
//fakeBackend();

/*
 const firebaseConfig = {
  apiKey: "AIzaSyDCOpnK9WyTH2qFE8Xq2Ax3HfCPhS9ameY",
  authDomain: "mcqexamapp.firebaseapp.com",
  databaseURL: "https://mcqexamapp-default-rtdb.firebaseio.com/",
  projectId: "mcqexamapp",
  storageBucket: "mcqexamapp.appspot.com",
  messagingSenderId: "92378496194",
  appId: "1:92378496194:web:134065dbb9333d954d8f5b",
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

 */

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

 
// // init firebase backend
 initFirebaseBackend(firebaseConfig);

function App() {
  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  );
}

export default App;
