import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey04Page() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="04/12" question="Was wünschst du dir für deine Zukunft?" prevPath="/03" nextPath="/05">
            <p>Neben einem Lottogewinn und dem Weltfrieden.</p>
            <textarea></textarea>
        </SurveyFrame>
    );
}

export default Survey04Page;