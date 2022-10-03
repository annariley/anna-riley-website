import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Work from './components/pages/Work';
import Play from './components/pages/Play';
import Thoughts from './components/pages/Thoughts';
import Secrets from './components/pages/Secrets';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/play' component={Play} />
          <Route path='/thoughts' component={Thoughts} />
          <Route path='/secrets' component={Secrets} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
