import React from 'react';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import Header from './componentes/Header'

const client = new ApolloClient({
  uri: 'http://localhost:5600/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('networkError', networkError);
    console.log('graphQLErrors :', graphQLErrors);
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
    </ApolloProvider>
  )
}

export default App;
