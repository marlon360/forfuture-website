import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey1011SkipPage() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="DU ALTER ÜBERFLIEGER!" question="Frage 10 und 11 werden aufgrund deiner Antwort übersprungen." prevPath="/09b" nextPath="/12">
            <p>Klick weiter!</p>
        </SurveyFrame>
    );
}

export default Survey1011SkipPage;