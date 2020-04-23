import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey09bPage() {

    const items = ["Keine Zeit", "Keine Lust", "Es interessiert mich einfach nicht", "Sonstiges"]

    const [value, setValue] = useLocalStorage("nosustainability");

    const onChange = (evt) => {
        setValue(evt.item);
    }

    return (
        <SurveyFrame number="09/12" question="Was ist der Grund dahinter?" prevPath="/08" nextPath="/1011-skip" nextPathInactive={items.indexOf(value) < 0}>
            <SelectorComponent value={items.indexOf(value)} onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey09bPage;