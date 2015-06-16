import React from 'react'
import {Route, DefaultRoute, NotFoundRoute, RouteHandler} from 'react-router'

// Import the contexts
import Authenticated from './contexts/Authenticated'
import Login from './contexts/Login'
import Dashboard from './contexts/Dashboard'

/**
 * This is where all of your application routes should go.
 */
export default (
  <Route>
    <Route path='/' handler={Authenticated}>
      <DefaultRoute name='dashboard' handler={Dashboard} />
    </Route>
    <Route name='login' handler={Login} />
  </Route>
)