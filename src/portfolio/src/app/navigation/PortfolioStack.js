/**
 * Author: Isamu Isozaki
 */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NavBar from 'app/components/NavBar';

import Home from 'app/screens/Home';
import Experiences from 'app/screens/Experiences';
import Projects from 'app/screens/Projects';

function PortfolioStack() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/experiences'>
              <Experiences />
            </Route>
            <Route path='/projects'>
              <Projects />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}


export default PortfolioStack;