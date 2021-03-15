import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notes from './components/Notes';
import CreateNotes from './components/CreateNotes';
import ErrorPage from './components/Error';

function App() {
  return(
    <Router>
      <Navbar />

      <Switch>
         <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/notes">
        <Notes />
      </Route>

      <Route path="/create">
        <CreateNotes />
      </Route>

      <Route path="*">
        <ErrorPage />
      </Route>
      </Switch>     

    </Router>
  )   
}

export default App;
