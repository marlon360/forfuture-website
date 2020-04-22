import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey07Page() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="07/12" question="Die Zukunft zu gestalten, kann auch schon in der Jetzt-Zeit beginnen. Du gehst zum Beispiel in die Schule, um in (einer etwas entfernten) Zukunft einen coolen Job zu haben…" prevPath="/06a" nextPath="/07b">

        </SurveyFrame>
    );
}

export default Survey07Page;