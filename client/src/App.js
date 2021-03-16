import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import Posts from './components/Posts';
import Create from './components/Create';
import ErrorPage from './components/Error';
import Details from './components/Details';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './Button';

function App() {
  return(
    <Router>
      <NavigationBar />

      <Switch>

      <Route exact path="/">
        <Posts />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/details">
        <Details />
      </Route>

      <Route path="/create">
        <Create />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="*">
        <ErrorPage />
      </Route>

      </Switch>     

    </Router>
  )   
}

export default App;
