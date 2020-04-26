import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey11Page() {

    const [value, setValue] = useLocalStorage("sustainabilityactions");

    const onChange = (evt) => {
        setValue(evt.target.value)
    }

    return (
        <SurveyFrame number="11/12" question={<>Was tust du <span className="underline">genau</span>, um nachhaltig zu sein?</>} prevPath="/10" nextPath="/12">
            <p>
                Ich mache…<br/>
                Ich engagiere mich für…<br/>
                Ich verzichte auf…<br/>
                Sonstiges…
            </p>
            <textarea value={value} onChange={onChange}></textarea>
        </SurveyFrame>
    );
}

export default Survey11Page;