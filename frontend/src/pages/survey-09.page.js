import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import SliderComponent from '../components/slider.component';
import { useLocalStorage } from '../utils/localStorage';

function Survey09Page() {

    const [sustainabilityScale, setSustainabilityScale] = useLocalStorage("sustainabilityscale", 1);

    const onChange = (evt) => {
        setSustainabilityScale(evt.value);
    }

    return (
        <SurveyFrame number="09/12" question="Für wie Nachhaltig schätzt du dich ein?" prevPath="/08" nextPath="/10">
            <p>
            1 = Absolut gar nicht.<br/>
            5 = 100%! Tue alles, was machbar ist. Ich verzichte sogar auf’s Flugzeug fliegen, um in den Urlaub zu kommen.
            </p>
            <SliderComponent min={1} max={5} value={sustainabilityScale} onChange={onChange} title="Nachhaltigkeit"></SliderComponent>
        </SurveyFrame>
    );
}

export default Survey09Page;