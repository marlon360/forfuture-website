import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SliderComponent from '../components/slider.component';

function Survey10Page() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="10/12" question="Wie sehr achtest du in deinem Alltag darauf Nachhaltig zu sein?" prevPath="/09" nextPath="/11">
            <p>
                0 = Gar nicht.<br/>
                10 = 100% Plastik frei, trage faire-öko Kleidung, bin bei einer Öko-Bank, und benutzte Öko-Strom – ich bin der MASTER!
            </p>
            <SliderComponent min={1} max={5}></SliderComponent>
        </SurveyFrame>
    );
}

export default Survey10Page;