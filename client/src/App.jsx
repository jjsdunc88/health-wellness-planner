import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Fitness from './components/Fitness';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';

function App() {
    const [page, setPage] = useState('LandingPage');
    // const [login, setLogin] = useState(false);
    // const [signup, setSignup] = useState(false);
    
    return (
        <div className="App">
        {/* <Header user={user} setPage={setPage} setLogin={setLogin} setSignup={setSignup} /> */}
        <Header setPage={setPage} />
        {/* {login ? <Login setPage={setPage} setLogin={setLogin} /> : null}
        {signup ? <SignUp setPage={setPage} setSignup={setSignup} /> : null}
        <Fitness user={user} /> */}
        <div id='main'>
            { page === 'Fitness' && <Fitness /> }
            { page === 'Login' && <Login /> }
            { page === 'SignUp' && <SignUp /> }
            { page === 'LandingPage' && <LandingPage />}
        </div>
        <Footer />
        </div>
    );
}

export default App;