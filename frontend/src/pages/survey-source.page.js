import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function SurveyFinishedPage() {

    const items = ["Social Media", "Freunde", "Familie", "Schule", "Sonstiges"]

    const [value, setValue] = useLocalStorage("source");

    const [sustainabilityeveryday, setSustainabilityeveryday] = useLocalStorage("sustainabilityeveryday");

    const onChange = (evt) => {
        setValue(evt.item)
    }

    const getPrevPath = () => {
        if (sustainabilityeveryday == "Ja") {
            return "/12"
        } else {
            return "/12-skip"
        }
    }

    return (
        <SurveyFrame number="NOCH EIN LETZTES:" question="Wie hast du von dieser Umfrage erfahren?" prevPath={getPrevPath()} nextPath="/finished" nextPathInactive={items.indexOf(value) < 0}>
            <SelectorComponent value={items.indexOf(value)} size="large" onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default SurveyFinishedPage;