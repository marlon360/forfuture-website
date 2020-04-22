import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  useParams,
  Route,
  Link
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import { ForwardTransition } from './transitions/forward.transition';
import { BackwardTransition } from './transitions/backward.transition';

import LandingPage from './pages/landing.page';
import Survey01Page from './pages/survey-01.page';

function App() {

  const params = useParams();

  const transition = ForwardTransition;

  return (
    <div className="App">
        <AnimatedSwitch
          {...transition.config}
          mapStyles={transition.mapStyles}
        >
          <Route path="/01">
            <Survey01Page/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </AnimatedSwitch>
    </div>
  );
}

export default App;
