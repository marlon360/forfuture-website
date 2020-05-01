import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { Submit } from '../services/submit.service';
import {
    withRouter
  } from 'react-router-dom'
import { useLocalStorage } from '../utils/localStorage';

function SurveyFinishedPage(props) {

    const [submitted, setSubmitted] = useLocalStorage("submitted", false);

    const SubmitForm = () => {
        if (!submitted) {
            Submit().then((data) => {
                setSubmitted(true);
                if (data.workshop === true) {
                    props.history.push('/after-submit-workshop')
                } else {
                    props.history.push('/after-submit')
                }
            }).catch((error) => {
                alert(error.message);
            })
        } else {
            alert("Du hast bereits an der Umfrage teilgenommen! Vielen Dank!")
            props.history.push('/after-submit')
        }
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