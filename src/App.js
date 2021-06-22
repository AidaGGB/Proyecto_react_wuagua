
import './App.css';
import React from "react";
import Formulario from './pages/formulario/Formulario';
import Nineras from './pages/nineras/Nineras';
import Home from './pages/home/Home';
import Error from './pages/error/Error';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      
     <Router>
        <Switch>
            <Route path='/formulario'sensitive>
              <Formulario/>
            </Route>

            <Route path='/nineras'sensitive>
              <Nineras/>
            </Route>

            <Route exact path='/'>
              <Home/>
            </Route>

            <Route exact path='/home'>
              <Home/>
            </Route>

            <Route path='*'>
              <Error/>
            </Route>

          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
