import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey06Page() {

    const items = ["Sehr wahrscheinlich", "Schon", "Naja", "Eher nicht", "Gar nicht"]

    const [value, setValue] = useLocalStorage("changefuture");

    const onChange = (evt) => {
        setValue(evt.item)
    }

    return (
        <SurveyFrame number="06/12" question="GLAUBST DU, DASS DU IN DEINER AKTUELLEN POSITION (NICHT WÄHREND CORONA), ETWAS FÜR UNSERE ZUKUNFT VERÄNDERN KANNST?" prevPath="/05" nextPath="/06a" nextPathInactive={items.indexOf(value) < 0}>
            <SelectorComponent size="full" value={items.indexOf(value)} onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey06Page;