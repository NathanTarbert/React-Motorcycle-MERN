import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import About from './components/About';
import Posts from './components/Posts';
import Create from './components/Create';
import ErrorPage from './components/Error';
import Details from './components/Details';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './components/Button';
import Search from './components/Search';
import Edit from './components/Edit';
// import Form from './components/Form';

function App() {
  // const { id } = useParams();

  return(
    <Router>
      <NavigationBar />
      
      <Switch>

      <Route exact path='/' component={Posts}/>

      <Route path='edit/:id' component={Edit}/>      

      <Route path='/details/:id' component={Details}/>

      <Route path='/about' component={About}/>

      <Route path='/create' component={Create}/>

      <Route path='/login' component={Login}/>

      <Route path='/register' component={Register}/>

      <Route path='/search' component={Search}/>

      <Route path='*' component={ErrorPage}/>

      </Switch>     
      
    </Router>
  )   
}

export default App;
