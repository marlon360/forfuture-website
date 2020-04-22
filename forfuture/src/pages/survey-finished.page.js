import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function SurveyFinishedPage() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {

    }

    return (
        <div class="finished">
            <div class="finished-content">
                <h3 class="number">FERTIG!</h3>
                <h1>Das war’s schon. super, dass du dabei warst!</h1>
            </div>
            <div class="bottom">
                <p>Jetzt endgültig</p>
                <a class="button" href="#">Antworten abschicken!</a>
            </div>
        </div>
    );
}

export default SurveyFinishedPage;