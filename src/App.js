import React from 'react';
//import Home from './components/home';
import voter_dashbord from './components/voter_dashbord';
import candidate_dashbord from './components/candidate_dashbord';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/login';
import Register from './components/register';

import profile from './components/profile';
import ProtectedRoutes from "./private/PrivateRoute";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}

        <Router>
          <Switch>
          <Route exact  path ="/" component={Login} />
            <ProtectedRoutes exact  path ="/about" component={About} />
           
            <ProtectedRoutes exact  path ="/profile" component={profile} />
            <ProtectedRoutes exact  path ="/voter_dashbord" component={voter_dashbord} />
            <ProtectedRoutes exact  path ="/candidate_dashbord" component={candidate_dashbord} />

            <Route exact  path ="/register" component={Register} />
            <ProtectedRoutes exact  path ="/contact" component={Contact} />
        </Switch>
        </Router>
      </div>
    </Router>
  );
}


export default App;
