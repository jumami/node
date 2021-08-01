import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';

export default function App() {
  return (
    <Router>
      <Route exact path="/browse">
        <p>Browse</p>
      </Route>
      <Route exact path="/signin">
        <p>Signin</p>
      </Route>
      <Route exact path="/signup">
        <p>Signup</p>
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home/>
      </Route>
    </Router>
    );
}

