import React from 'react';
import './App.css';

//
import SignIn from './Components/SignIn'
import SignOut from './Components/SignOut'
import TaskRoom from './Components/TaskRoom'
import Home from './Components/Home'

// Firebase SDK
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "AIzaSyA2M8DtG18MFopLYAUDpu9N1zP-T9GMDkI",
  authDomain: "task-manager-b616a.firebaseapp.com",
  databaseURL: "https://task-manager-b616a.firebaseio.com",
  projectId: "task-manager-b616a",
  storageBucket: "task-manager-b616a.appspot.com",
  messagingSenderId: "362146835371",
  appId: "1:362146835371:web:df4602fcc2873bfe2e80ee",
  measurementId: "G-YNL217R5W4"
});

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Man</h1>
        {user ? <SignOut auth={auth} /> : <SignIn auth={auth} />}
      </header>
      <section className="content"> 
        {user ? <TaskRoom firestore={firestore} auth={auth} /> : <Home auth={auth} />}
      </section>
    </div>
  );
}

export default App;
