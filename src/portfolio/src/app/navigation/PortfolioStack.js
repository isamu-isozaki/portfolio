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
          <Home/>
          {/* <Experiences /> */}
          <Projects />
        </div>
      </BrowserRouter>
  );
}


export default PortfolioStack;