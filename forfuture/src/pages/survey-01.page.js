import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey01Page() {

    const items = ["-16", "16", "17", "18", "19", "19+"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="01/12" question="Wie alt bist du?" prevPath="/" nextPath="/">
            <SelectorComponent onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey01Page;