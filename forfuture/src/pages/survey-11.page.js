import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey11Page() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="11/12" question="Was tust du, um einen Unterschied zu machen?" prevPath="/10" nextPath="/12">
            <p>
                Ich verzichte auf…<br/>
                Ich mache…<br/>
                Ich engagiere mich für…<br/>
                Sonstiges…
            </p>
            <textarea data-state="difference"></textarea>
        </SurveyFrame>
    );
}

export default Survey11Page;