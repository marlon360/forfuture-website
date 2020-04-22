import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey07bPage() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="07/12" question="…Fällt dir noch etwas ein, wie du gerade in deine Zukunft investierst?" prevPath="/07" nextPath="/08">
            <textarea data-state="future-investments"></textarea>
        </SurveyFrame>
    );
}

export default Survey07bPage;