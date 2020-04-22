import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function SurveyFinishedPage() {

    const items = ["Social Media", "Freunde", "Familie", "Schule", "Sonstiges"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="NOCH EIN LETZTES:" question="Wie hast du von dieser Umfrage erfahren?" prevPath="/12" nextPath="/finished">
            <SelectorComponent size="large" onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default SurveyFinishedPage;