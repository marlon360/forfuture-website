import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';
import SliderComponent from '../components/slider.component';

function Survey09Page() {

    return (
        <SurveyFrame number="09/12" question="Für wie Nachhaltig schätzt du dich ein?" prevPath="/08" nextPath="/10">
            <p>
                0 = Absolut gar nicht,<br />
                10 = Sehr! Ich verzichte sogar auf‘s Flugzeug fliegen, um in den Urlaub zu kommen.
            </p>
            <SliderComponent min={1} max={5}></SliderComponent>
        </SurveyFrame>
    );
}

export default Survey09Page;