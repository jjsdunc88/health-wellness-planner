import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Fitness from './components/Fitness';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
    const [user, setUser] = useState(null);
    // const [login, setLogin] = useState(false);
    // const [signup, setSignup] = useState(false);
    
    return (
        <div className="App">
        {/* <Header user={user} setUser={setUser} setLogin={setLogin} setSignup={setSignup} /> */}
        <Header setUser={setUser} />
        {/* {login ? <Login setUser={setUser} setLogin={setLogin} /> : null}
        {signup ? <SignUp setUser={setUser} setSignup={setSignup} /> : null}
        <Fitness user={user} /> */}
        <div id='main'>
            { user === 'Fitness' && <Fitness /> }
            { user === 'Login' && <Login /> }
            { user === 'SignUp' && <SignUp /> }
        </div>
        <Footer />
        </div>
    );
}