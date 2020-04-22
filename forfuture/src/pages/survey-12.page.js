import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey11Page() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="12/12" question={<>Was könnte dich <span class="underline">motivieren</span>, (noch) nachhaltiger zu leben?</>} prevPath="/11" nextPath="/source">
            <textarea data-state="sustainability-motivation"></textarea>
        </SurveyFrame>
    );
}

export default Survey11Page;