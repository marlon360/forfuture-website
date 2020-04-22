import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey06Page() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="06/12" question=".…und was sollte man deiner Meinung nach einschränken bzw. unterlassen?" prevPath="/05" nextPath="/06a">
            <textarea data-state="restrictions"></textarea>
        </SurveyFrame>
    );
}

export default Survey06Page;