import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import MacroButton2 from './components/MacroButton2'
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
// import Fitness from './components/Fitness';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import MealPlanButton from './components/MealPlanButton';
import { Outlet } from 'react-router-dom';
import Auth from './utils/auth';


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

function App() {
  const [page, setPage] = useState('LandingPage');
  const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header setPage={setPage} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Outlet context={[loggedIn, setLoggedIn]}/>
        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default App;
