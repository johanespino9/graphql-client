import React, { Component, Fragment } from 'react';
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './componentes/Header'
import Clientes from './componentes/Clientes'
import EditarCliente from './componentes/EditarCliente'
import NuevoCliente from './componentes/NuevoClientes'

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
      <Router>
        <Fragment>
          <Header/>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Clientes}/>
                <Route exact path="/cliente/nuevo" component={NuevoCliente}/>
                <Route exact path="/cliente/editar/:id" component={EditarCliente}/>
              </Switch>
            </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  )
}

export default App;
