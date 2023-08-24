import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Message from './components/Message';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
 

  return (
    <ApolloProvider client={client}>
      <Message />
      
    </ApolloProvider>
  )
}

export default App