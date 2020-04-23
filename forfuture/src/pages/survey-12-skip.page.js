import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey12SkipPage() {

    return (
        <SurveyFrame number="DU ALTER ÜBERFLIEGER!" question="Frage 12 wird aufgrund deiner Antwort übersprungen." prevPath="/11b" nextPath="/source">
            <p>Klick weiter!</p>
        </SurveyFrame>
    );
}

export default Survey12SkipPage;