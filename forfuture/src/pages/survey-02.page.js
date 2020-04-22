import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey02Page() {

    const key = "sex";
    const items = ["Weiblich", "Männlich", "keine Angabe"]

    const [value, setValue] = useLocalStorage(key);

    const onChange = (evt) => {
        setValue(evt.item)
    }
    return (
        <SurveyFrame number="02/12" question="Welches Geschlecht hast du?" prevPath="/01" nextPath="/03" nextPathInactive={items.indexOf(value) < 0}>
            <SelectorComponent value={items.indexOf(value)} onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey02Page;