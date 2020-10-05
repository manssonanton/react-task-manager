import React from 'react';
import './App.scss';

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
  
});

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z" /></svg>
          <h1 className="logo-text">
            TASK
        </h1>
        </div>
        {user ? <SignOut auth={auth} /> : <SignIn auth={auth} />}
      </header>
      <section className="content">
        {user ? <TaskRoom firestore={firestore} auth={auth} /> : <Home auth={auth} />}
      </section>
    </div>
  );
}

export default App;
