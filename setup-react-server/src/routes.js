import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Signup from './Signup';
  import Signin from './Signin';
  

function RoutesList() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
            <li>
              <Link to="/Signin">Signin</Link>
            </li>
          </ul>
  
          <hr />
          
          <Switch>
            <Route exact path="/Signup" component = {Signup} />
              
            <Route exact path="/Signin">
              <Signin />
            </Route>
             
          </Switch>
        </div>
      </Router>
    );
  }
  export default RoutesList;