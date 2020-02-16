import React from 'react';
//import Home from './components/home';
import voter_dashbord from './components/voter_dashbord';
import candidate_dashbord from './components/candidate_dashbord';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/login';
import Register from './components/register';
import slider from './components/slider';
import profile from './components/profile';
//import Nav from './components/Nav';
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
            <Route exact  path ="/about" component={About} />
            <Route exact  path ="/slider" component={slider} />
            <Route exact  path ="/profile" component={profile} />
            <Route exact  path ="/voter_dashbord" component={voter_dashbord} />
            <Route exact  path ="/candidate_dashbord" component={candidate_dashbord} />
        
            <Route exact  path ="/register" component={Register} />
            <Route exact  path ="/contact" component={Contact} />
        </Switch>
        </Router>
      </div>
    </Router>
  );
}


export default App;
