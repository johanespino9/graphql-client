import React from 'react';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import Header from './componentes/Header'
import Clientes from './componentes/Clientes'

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
      <div className="container">
        <Clientes/>
      </div>
    </ApolloProvider>
  )
}

export default App;
