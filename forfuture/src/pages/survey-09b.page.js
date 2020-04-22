import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey09bPage() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="09/12" question="Was ist der Grund dahinter?" prevPath="/08" nextPath="/1011-skip">
            <p>
                Keine Lust, denn…<br/>

                Keine Zeit, weil…<br/>

                Wieso immer »Nachhaltigkeit«?<br/>

                Sonstiges…
            </p>
            <textarea data-state="no-sustainability-reasons"></textarea>
        </SurveyFrame>
    );
}

export default Survey09bPage;