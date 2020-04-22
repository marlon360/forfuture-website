import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey02Page() {

    const items = ["Weiblich", "Männlich", "keine Angabe"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="02/12" question="Welches Geschlecht hast du?" prevPath="/01" nextPath="/02">
            <SelectorComponent onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey02Page;