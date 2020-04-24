import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey03Page() {

    const items = ["Ja", "Nein"]

    const [value, setValue] = useLocalStorage("future");

    const onChange = (evt) => {
        setValue(evt.item)
    }

    const getNextPath = () => {
        if (value == "Ja") {
            return "/04"
        } else {
            return "/0407-skip"
        }
    }

    return (
        <SurveyFrame number="03/12" question={<>Denkst du manchmal über deine <span class="underline">Zukunft</span> nach?</>} prevPath="/02" nextPath={getNextPath()} nextPathInactive={items.indexOf(value) < 0}>
            <SelectorComponent value={items.indexOf(value)} onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey03Page;