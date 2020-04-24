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
import PolicyPage from './pages/policy.page';
import Survey01Page from './pages/survey-01.page';
import Survey02Page from './pages/survey-02.page';
import Survey03Page from './pages/survey-03.page';
import Survey04Page from './pages/survey-04.page';
import Survey05Page from './pages/survey-05.page';
import Survey06Page from './pages/survey-06.page';
import Survey06aPage from './pages/survey-06a.page';
import Survey07Page from './pages/survey-07.page';
import Survey08Page from './pages/survey-08.page';
import Survey09Page from './pages/survey-09.page';
import Survey09bPage from './pages/survey-09b.page';
import Survey10Page from './pages/survey-10.page';
import Survey11Page from './pages/survey-11.page';
import Survey11bPage from './pages/survey-11b.page';
import Survey12Page from './pages/survey-12.page';
import Survey1011SkipPage from './pages/survey-1011-skip.page';
import Survey0407SkipPage from './pages/survey-0407-skip.page';
import Survey12SkipPage from './pages/survey-12-skip.page';
import SurveyFinishedPage from './pages/survey-finished.page';
import SurveySourcePage from './pages/survey-source.page';
import SurveySorryPage from './pages/survey-sorry.page';

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
              <Route path="/policy" component={PolicyPage}/>
              <Route path="/01" component={Survey01Page}/>
              <Route path="/02" component={Survey02Page}/>
              <Route path="/03" component={Survey03Page}/>
              <Route path="/04" component={Survey04Page}/>
              <Route path="/05" component={Survey05Page}/>
              <Route path="/06" component={Survey06Page}/>
              <Route path="/06a" component={Survey06aPage}/>
              <Route path="/07" component={Survey07Page}/>
              <Route path="/08" component={Survey08Page}/>
              <Route path="/09" component={Survey09Page}/>
              <Route path="/09b" component={Survey09bPage}/>
              <Route path="/10" component={Survey10Page}/>
              <Route path="/11" component={Survey11Page}/>
              <Route path="/11b" component={Survey11bPage}/>
              <Route path="/12" component={Survey12Page}/>
              <Route path="/source" component={SurveySourcePage}/>
              <Route path="/finished" component={SurveyFinishedPage}/>
              <Route path="/1011-skip" component={Survey1011SkipPage}/>
              <Route path="/0407-skip" component={Survey0407SkipPage}/>
              <Route path="/12-skip" component={Survey12SkipPage}/>
              <Route path="/sorry" component={SurveySorryPage}/>
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
