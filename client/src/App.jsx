import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import Message from './components/Message';
import {setContext} from '@apollo/client/link/context';
// import MacroButton from './components/MacroButton';
import MacroButton2 from './components/MacroButton2'
import MealPlanButton from './components/MealPlanButton';

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
 

  return (
    <ApolloProvider client={client}>
      {/* <Message /> */}
      {/* <MacroButton /> */}
      <MacroButton2 />
      <MealPlanButton />
      
    </ApolloProvider>
  )
}

export default App