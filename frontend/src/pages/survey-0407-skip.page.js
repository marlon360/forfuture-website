import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey0407SkipPage() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="DU ALTER ÜBERFLIEGER!" question="Frage 4 bis 7 werden aufgrund deiner Antwort übersprungen." prevPath="/03" nextPath="/08">
            <p>Klick weiter!</p>
        </SurveyFrame>
    );
}

export default Survey0407SkipPage;