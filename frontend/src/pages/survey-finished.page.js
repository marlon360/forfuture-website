import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { Submit } from '../services/submit.service';
import {
    withRouter
  } from 'react-router-dom'

function SurveyFinishedPage(props) {

    const SubmitForm = () => {
        Submit().then(() => {
            props.history.push('/after-submit')
        }).catch((error) => {
            alert(error);
        })
    }

    return (
        <div class="finished">
            <div class="finished-content">
                <h3 class="number">FERTIG!</h3>
                <h1>Das war’s schon. super, dass du dabei warst!</h1>
            </div>
            <div class="bottom">
                <p>Jetzt endgültig</p>
                <a class="button" onClick={SubmitForm} href="#">Antworten abschicken!</a>
            </div>
        </div>
    );
}

export default withRouter(SurveyFinishedPage);