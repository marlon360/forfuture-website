import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey08Page() {

    const items = ["Ja", "Nein"]

    const [value, setValue] = useLocalStorage("sustainability");

    const onChange = (evt) => {
        setValue(evt.item)
    }

    const getNextPath = () => {
        if (value == "Ja") {
            return "/09"
        } else {
            return "/09b"
        }
    }

    return (
        <SurveyFrame number="08/12" question={<>Interessierst du dich für das Thema <span className="underline">Nachhaltigkeit</span>?</>} prevPath="/07" nextPath={getNextPath()} nextPathInactive={items.indexOf(value) < 0}>
            <SelectorComponent onChange={onChange} value={items.indexOf(value)} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey08Page;