import React from 'react';
import SurveyFrame from '../components/survey-frame.component';

function Survey01Page() {
    return (
        <SurveyFrame number="01/12" question="Wie alt bist du?">
            <button data-state="age" value="-16" className="small">-16</button>
            <button data-state="age" value="16" className="small">16</button>
            <button data-state="age" value="17" className="small">17</button>
            <button data-state="age" value="18" className="small">18</button>
            <button data-state="age" value="19" className="small">19</button>
            <button data-state="age" value="19+" className="small">19+</button>
        </SurveyFrame>
    );
}

export default Survey01Page;