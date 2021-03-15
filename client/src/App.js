import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Posts from './components/Posts';
import Create from './components/Create';
import ErrorPage from './components/Error';

function App() {
  return(
    <Router>
      <Navbar />

      <Switch>
         <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/posts">
        <Posts />
      </Route>

      <Route path="/create">
        <Create />
      </Route>

      <Route path="*">
        <ErrorPage />
      </Route>
      </Switch>     

    </Router>
  )   
}

export default App;
