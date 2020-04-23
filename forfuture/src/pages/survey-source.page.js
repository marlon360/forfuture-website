import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function SurveyFinishedPage() {

    const items = ["Social Media", "Freunde", "Familie", "Schule", "Sonstiges"]

    const [value, setValue] = useLocalStorage("source");

    const onChange = (evt) => {
        setValue(evt.item)
    }

    return (
        <SurveyFrame number="NOCH EIN LETZTES:" question="Wie hast du von dieser Umfrage erfahren?" prevPath="/12" nextPath="/finished" nextPathInactive={items.indexOf(value) < 0}>
            <SelectorComponent value={items.indexOf(value)} size="large" onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default SurveyFinishedPage;