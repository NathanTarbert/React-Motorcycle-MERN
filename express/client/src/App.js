import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Create from './components/Create';
import ErrorPage from './components/Error';
import Details from './components/Details';
import Login from './components/Login';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from './components/Button';
import Search from './components/Search';
import Edit from './components/Edit';
// import Form from './components/Form';
import { AuthProvider } from './contexts/AuthContext';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

function App() {
  // const { id } = useParams();

  return(
    <Router>
      <NavBar />
      
      <Switch>
      <AuthProvider>
      <PrivateRoute exact path='/' component={Home}/>

      <PrivateRoute exact path='/edit/:id' component={Edit}/>      

      <PrivateRoute path='/details/:id' component={Details}/>

      <PrivateRoute path='/update-profile/' component={UpdateProfile}/>

      <Route path='/about' component={About}/>

      <PrivateRoute path='/create' component={Create}/>   

      <PrivateRoute path='/profile' component={Profile}/>

      <Route path='/signup' component={Signup}/>

      <Route path='/login' component={Login}/>

      <Route path='/forgot-password' component={ForgotPassword}/>      

      <Route path='/search' component={Search}/>
      </AuthProvider>
      <Route path='*' component={ErrorPage}/>
      
      </Switch>     
      
    </Router>
  )   
}

export default App;
