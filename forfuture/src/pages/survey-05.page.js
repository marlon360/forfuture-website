import React from 'react';
import SurveyFrame from '../components/survey-frame.component';
import SelectorComponent from '../components/selector.component';

function Survey05Page() {

    const items = ["Ja", "Nein"]

    const onChange = (evt) => {
        
    }

    return (
        <SurveyFrame number="05/12" question={<>Was wünschst du dir für <span class="underline">unsere</span> Zukunft in <span class="underline">Deutschland?</span></>} prevPath="/04" nextPath="/06">
            <p>Bessere Bildung, Förderung von Digitalisierung, sozialem Ausgleich, Eiscreme for free jeden Donnerstag nach 16 Uhr…</p>
            <textarea></textarea>
        </SurveyFrame>
    );
}

export default Survey05Page;