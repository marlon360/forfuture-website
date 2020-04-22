import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import LandingComponent from './components/landing.component';
import Suvey01Component from './components/survey-01.component';

function App() {

  const demoConfig = {
    atEnter: {
      opacity: 0,
      scale: 1.2,
    },
    atLeave: {
      opacity: 0,
      scale: 0.8,
    },
    atActive: {
      opacity: 1,
      scale: 1,
    },
  };
  
  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  return (
    <div className="App">
      <Router>
        <AnimatedSwitch
          {...demoConfig}
          mapStyles={mapStyles}
        >
          <Route path="/01">
            <Suvey01Component/>
          </Route>
          <Route path="/">
            <LandingComponent/>
          </Route>
        </AnimatedSwitch>
      </Router>
    </div>
  );
}

export default App;
