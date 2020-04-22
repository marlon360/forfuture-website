import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey1011SkipPage() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="DU ALTER ÜBERFLIEGER!" question={<>Denkst du manchmal über deine <span class="underline">Zukunft</span> nach?</>} prevPath="/09b" nextPath="/12">
            <SelectorComponent onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey1011SkipPage;