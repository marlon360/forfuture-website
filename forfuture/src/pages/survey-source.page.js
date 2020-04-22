import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function SurveyFinishedPage() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="NOCH EIN LETZTES:" question={<>Denkst du manchmal über deine <span class="underline">Zukunft</span> nach?</>} prevPath="/12" nextPath="/finished">
            <SelectorComponent onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default SurveyFinishedPage;