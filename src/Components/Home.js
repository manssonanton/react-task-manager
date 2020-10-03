import React from 'react';

import SignIn from './SignIn'

function Home(props) {
    return (
        <div>
            <h1>Welcome to task manager</h1>
            <h2>Sign in to get started with the best task manager in the world.</h2>
            <SignIn auth={props.auth} />
        </div>
    )
}

export default Home;