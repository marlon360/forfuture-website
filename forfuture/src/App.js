import React from 'react';
import {
  BrowserRouter as Router,
  useLocation,
  Route,
  Switch
} from "react-router-dom";
import { useTransition, animated } from 'react-spring'

import LandingPage from './pages/landing.page';
import Survey01Page from './pages/survey-01.page';

function App() {

  const location = useLocation();  

  const getCurrentTransition = () => {
    if (location.state && location.state.transition) {      
      return location.state.transition
    } else {
      return {
        from: { opacity: 0, transform: 'translate3d(0%, 0, 0)' },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      }
    }
  }

  const transitionModal = useTransition(location, location => location.pathname, getCurrentTransition());

  return (
    <div className="App">
      {transitionModal.map(({ item, props, key }) => (
        <animated.div className="page" key={key} style={props}>
          <Switch location={item}>
              <Route path="/01">
                <Survey01Page/>
              </Route>
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
