import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey07Page() {

    const items = ["Extrem bedrohlich", "Real und kritisch", "Real", "Da, aber übertrieben dargestellt", "Welcher Klimawandel?"]

    const [value, setValue] = useLocalStorage("climatechange");

    const onChange = (evt) => {
        setValue(evt.item)
    }

    return (
        <SurveyFrame number="07/12" question="FÜR WIE REAL UND BEDROHLICH HÄLST DU DEN KLIMAWANDEL?  " prevPath="/06a" nextPath="/08" nextPathInactive={items.indexOf(value) < 0}>
            <SelectorComponent size="full" value={items.indexOf(value)} onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey07Page;