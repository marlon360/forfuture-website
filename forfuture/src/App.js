import React from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Switch
} from "react-router-dom";
import { useTransition, animated } from 'react-spring'
import { CrossFade } from './transitions/transitions'

import LandingPage from './pages/landing.page';
import Survey01Page from './pages/survey-01.page';
import Survey02Page from './pages/survey-02.page';

function App() {

  const location = useLocation();  

  const getCurrentTransition = () => {
    if (location.state && location.state.transition) {      
      return location.state.transition
    } else {
      return CrossFade;
    }
  }

  const transitionModal = useTransition(location, location => location.pathname, getCurrentTransition());

  return (
    <div className="App">
      {transitionModal.map(({ item, props, key }) => (
        <animated.div className="page" key={key} style={props}>
          <Switch location={item}>
              <Route path="/01" component={Survey01Page}/>
              <Route path="/02" component={Survey02Page}/>
              <Route exact path="/">
                <LandingPage/>
              </Route>
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}

export default App;
