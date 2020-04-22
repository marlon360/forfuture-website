import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey07Page() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="07/12" question={<>Denkst du manchmal über deine <span class="underline">Zukunft</span> nach?</>} prevPath="/06b" nextPath="/07b">
            <SelectorComponent onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey07Page;