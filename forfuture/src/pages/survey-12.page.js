import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey11Page() {

    const [value, setValue] = useLocalStorage("sustainabilitymotivation");

    const onChange = (evt) => {
        setValue(evt.target.value)
    }

    return (
        <SurveyFrame number="12/12" question={<>Was könnte dich <span class="underline">motivieren</span>, (noch) nachhaltiger zu leben?</>} prevPath="/11" nextPath="/source">
            <p>Schreibe 1-3 kurze Ideen auf.</p>
            <textarea value={value} onChange={onChange}></textarea>
        </SurveyFrame>
    );
}

export default Survey11Page;