import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  useParams,useLocation,
  Route,
  Link
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import LandingPage from './pages/landing.page';
import Survey01Page from './pages/survey-01.page';
import { getTransition } from './transitions/transitions';

function App() {

  const { state } = useLocation();  

  const transition = getTransition(state?.transition);

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
