import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import Message from './components/Message';
import {setContext} from '@apollo/client/link/context';
import MacroButton from './components/MacroButton';
import MacroButton2 from './components/MacroButton2'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Fitness from './components/Fitness';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';

function App() {
 

  return (
    <ApolloProvider client={client}>
      {/* <Message /> */}
      {/* <MacroButton /> */}
      <MacroButton2 />
      
    </ApolloProvider>
  )
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