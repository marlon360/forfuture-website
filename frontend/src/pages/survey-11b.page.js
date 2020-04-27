import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey11bPage() {

    const items = ["Es mich interessieren würde.", "Es bequemer wäre.", "Es günstiger wäre.", "Es mehr Leute machen würden.", "Die Politik es vorschreibt."]

    const [value, setValue] = useLocalStorage("nosustainabilitymotivation");

    const onChange = (evt) => {
        setValue(evt.item)
    }

    return (
        <SurveyFrame number="11/12" question="WAS KÖNNTE DICH MOTIVIEREN NACHHALTIGER IM ALLTAG ZU SEIN?" prevPath="/10" nextPath="/12-skip">
            <p>"Ich würde etwas tun, wenn..."</p>
            <SelectorComponent size="full" value={items.indexOf(value)} onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey11bPage;