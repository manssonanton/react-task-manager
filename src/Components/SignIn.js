import React from 'react';

import firebase from 'firebase/app';

function SignIn(props) {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      props.auth.signInWithPopup(provider);
    }
    return (
      <button onClick={signInWithGoogle}>Sign in</button>
    )
  }
  
  export default SignIn;