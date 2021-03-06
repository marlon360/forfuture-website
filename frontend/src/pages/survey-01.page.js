import React, { useState } from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey01Page() {

    const key = "age";
    const items = ["-16", "16", "17", "18", "19", "19+"]

    const [value, setValue] = useLocalStorage(key);

    const onChange = (evt) => {
        setValue(evt.item)
    }

    const getNextPage = () => {
        if (value === "-16" || value === "19+") {
            return "/sorry"
        } else {
            return "/02"
        }
    }

    return (
        <SurveyFrame number="01/12" question="Wie alt bist du?" prevPath="/policy" nextPath={getNextPage()} nextPathInactive={items.indexOf(value) < 0}>
            <SelectorComponent value={items.indexOf(value)} size="small" onChange={onChange} items={items}></SelectorComponent>
        </SurveyFrame>
    );
}

export default Survey01Page;